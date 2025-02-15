const { chromium } = require('playwright');
const fs = require('fs');

// Baca file konfigurasi
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

// Fungsi untuk logging error
function logError(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${message}\n`;
    console.error(logMessage); // Tampilkan di konsol
    fs.appendFileSync('error.log', logMessage); // Simpan ke file log
}

async function runDiscordBot() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Navigasi ke halaman login Discord menggunakan URL dari config
        await page.goto(config.url);

        // Isi email dan password dari file konfigurasi
        await page.getByRole('textbox', { name: 'Email or Phone Number*' }).click();
        await page.getByRole('textbox', { name: 'Email or Phone Number*' }).fill(config.email);
        await page.getByRole('textbox', { name: 'Password*' }).click();
        await page.getByRole('textbox', { name: 'Password*' }).fill(config.password);

        // Klik tombol login
        await page.getByRole('button', { name: 'Log In' }).click();

        // Tunggu hingga login berhasil
        try {
            await page.waitForSelector('[aria-label="User Settings"]', { timeout: 10000 });
            console.log('Login berhasil!');
        } catch (error) {
            logError('Gagal login: Elemen "User Settings" tidak ditemukan.');
            throw new Error('Login gagal');
        }

        // Buka User Settings
        await page.getByRole('button', { name: 'User Settings' }).click();
        await page.getByRole('tab', { name: 'Accessibility' }).click();
        await page.getByRole('checkbox', { name: 'Show Send Message button' }).check();
        await page.getByRole('button', { name: 'Close' }).click();

        // Fungsi untuk mengirim pesan
        const sendMessage = async (channelName, message) => {
            try {
                await page.getByRole('link', { name: channelName }).click();
                await page.getByRole('textbox', { name: `Message #${channelName}` }).click();
                await page.getByRole('textbox', { name: `Message #${channelName}` }).fill(message);
                await page.getByRole('button', { name: 'Send Message' }).click();
                console.log(`Pesan berhasil dikirim ke ${channelName}: ${message}`);
            } catch (error) {
                logError(`Gagal mengirim pesan ke ${channelName}: ${error.message}`);
            }
        };

        // Jalankan task dari file konfigurasi
        for (const task of config.tasks) {
            await sendMessage(task.channel, task.message);
            await page.waitForTimeout(task.delay);
        }

        console.log('Semua task selesai!');
    } catch (error) {
        logError(`Terjadi error: ${error.message}`);
    } finally {
        // Tutup browser
        await context.close();
        await browser.close();
    }
}

// Jalankan fungsi
runDiscordBot();