# Discord Auto Chat

Proyek ini hanya untuk experimen dan edukasi semata, gunakan dengan bijak. kami tidak bertanggung jawab apabila proyek ini digunakan untuk tujuan yang tidak tepat.
**Gunakan dengan bijak** kami tidak bertanggung jawab apa bila akun yang anda gunakan di tangguhkan sementara atau di blokir secara permanet.
##Fitur
- Waktu Jeda dapat di atur
  
i'm Moraevx 

**Terima Kasih**

# Only Visual Studi Code
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

   ```bash
   {
     "url": "https://discord.com/channels/11111.1111", //Masukan url channel tujuan
     "email": "Email_anda", //masukan email discord
     "password": "Password_anda", //masukan password 
     "tasks": [
       {
         "channel": "Channel_yang_dituju",
         "message": "isi_pesan_1",
         "delay": 120000 //ganti waktu sesuai kebuthan 10000 : 1 menit
       },
       {
         "channel": "Channel_yang_dituju",
         "message": "isi_pesan_2",
         "delay": 120000 //ganti waktu sesuai kebuthan 10000 : 1 menit
       },
       {
         "channel": "Channel_yang_dituju",
         "message": "isi_pesan_3",
         "delay": 120000 //ganti waktu sesuai kebuthan 10000 : 1 menit
       }
     ]
   }
   ```

4. **Jalankan skrip:**

   ```bash
   node DiscordBot.js
   ```

   Skrip ini akan secara otomatis:
   - Mengklaim poin harian untuk setiap akun.


