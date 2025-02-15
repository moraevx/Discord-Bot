# Discord Auto Chat

Proyek ini hanya untuk experimen dan edukasi semata, gunakan dengan bijak. kami tidak bertanggung jawab apabila proyek ini digunakan untuk tujuan yang tidak tepat.
**Gunakan dengan bijak** kami tidak bertanggung jawab apa bila akun yang anda gunakan di tangguhkan sementara atau di blokir secara permanet.

i'm Moraevx 

**Terima Kasih**

# PC User
## Node.Js (lewati jika sudah)

1. **Update Package List :**
   ```bash
   sudo apt update
   ```
2. **Instal Node.js :**
   ```bash
   sudo apt install nodejs
   ```
3. **Instal npm (Node Package Manager) :**
   ```bash
   sudo apt install npm
   ```
4. **Verifikasi Instalasi :**
   ```bash
   node -v
   npm -v
   ```

## Aplikasi :

1. **Clone repositori ini:**
 
   ```bash
   git clone https://github.com/moraevx/Discord-Bot.git
   cd Discord-Bot
   ```

3. **Ganti file `config.json` :**

   Ubah dengan menggunakan perintah
   ```
   nano config.json
   ```

   Contoh isi `config.json`:

   ```
   {
  "url": "url_Channel_Tujuan_Contoh=https://discord.com/channels/11111.1111",
  "email": "Email_anda",
  "password": "Password_anda",
  "tasks": [
    {
      "channel": "Channel_yang_dituju",
      "message": "isi_pesan_1",
      "delay": 120000
    },
    {
      "channel": "Channel_yang_dituju",
      "message": "isi_pesan_2",
      "delay": 120000
    },
    {
      "channel": "Channel_yang_dituju",
      "message": "isi_pesan_3",
      "delay": 120000
    }
  ]
}
   ```

4. **Jalankan skrip:**

   ```bash
   python3 main.py
   ```

   Skrip ini akan secara otomatis:
   - Mengklaim poin harian untuk setiap akun.

## Mengambil Token Otentikasi

Untuk mengambil `auth` dari cookies di browser:

1. **Buka Developer Tools:**
   - Tekan `F12` atau `Ctrl + Shift + I` di Windows/Linux, atau `Cmd + Option + I` di macOS.
   - Buka tab **Console**.

2. **Jalankan skrip berikut di console:**

   ```javascript
   let cookies = document.cookie.split('; ');
   let refreshToken = cookies.find(cookie => cookie.startsWith('refreshToken=')).split('=')[1];
   prompt('UGD AIRDROP:', refreshToken);
   ```

   - Sebuah prompt akan muncul dengan `auth`. Salin token tersebut dan tempelkan ke file `auth.txt`.

## Catatan:

- Pastikan Anda memperbarui file `auth.txt` dengan token yang valid secara berkala agar otomasi tetap berfungsi.
- Skrip akan berhenti selama 24 jam setelah setiap kali dijalankan, menunggu untuk mengklaim poin harian berikutnya. Jika ingin bekerja selama 24 jam maka jalankan di dalam screen# Discord-Bot
