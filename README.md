# 🇲🇾 Jelajah Malaysia - Barat & Sabah 🌴

Sebuah aplikasi web interaktif, responsif, dan elegan yang berfungsi sebagai pemandu wisata digital untuk menjelajahi keindahan destinasi wisata di **Malaysia Barat (Semenanjung)** dan **Sabah (Borneo)**. 

Aplikasi ini dibangun menggunakan teknologi murni **HTML5, CSS3 (Tailwind CSS CDN), dan Vanilla JavaScript** tanpa memerlukan instalasi database rumit. Dilengkapi dengan fitur-fitur modern seperti *Dark Mode*, kuis pencari rekomendasi wisata pintar, dan penyimpanan favorit lokal (*LocalStorage*).

---

## ✨ Fitur Utama

Aplikasi dirancang agar tidak kaku, interaktif, dan memberikan kenyamanan membaca maksimal bagi pengguna (*user experience*):

1. **Pembagian Wilayah yang Jelas**: Memisahkan destinasi di **Malaysia Barat** (seperti Kuala Lumpur, Penang, Cameron Highlands) dan **Sabah** (seperti Gunung Kinabalu, Sipadan, Lembah Danum) menggunakan navigasi tab yang intuitif.
2. **Kuis Rekomendasi Pintar (Interactive Quiz)**: Kuis 4 langkah yang menganalisis preferensi gaya liburan, rombongan, suasana, dan durasi tinggal Anda untuk merekomendasikan 3 destinasi paling cocok.
3. **Penyimpanan Favorit Lokal (Bookmarks)**: Pengguna dapat menyimpan destinasi impian mereka. Daftar favorit ini disimpan langsung di browser menggunakan `localStorage` sehingga tidak akan hilang saat halaman dimuat ulang.
4. **Detail Modal Informasi Lengkap**: Mengklik "Selengkapnya" akan memunculkan jendela pop-up estetik berisi:
   - Deskripsi lengkap & Sorotan utama (*Key Highlights*).
   - Rating destinasi & Estimasi biaya masuk.
   - Waktu berkunjung terbaik & Tips berwisata eksklusif.
   - Tautan langsung ke Google Maps lokasi terkait.
5. **Mode Gelap & Terang (Dark/Light Mode)**: Transisi warna yang halus untuk kenyamanan membaca di malam hari, yang menyesuaikan preferensi bawaan sistem pengguna secara otomatis.
6. **Widget Fakta Menarik (Trivia Widget)**: Bola melayang di pojok kanan bawah yang memunculkan fakta-fakta unik dan edukatif seputar geografi dan budaya Malaysia Barat dan Sabah.
7. **Pencarian, Filter, & Sortir Fleksibel**:
   - Pencarian real-time berdasarkan teks kata kunci.
   - Filter multi-kategori (Alam, Budaya, Pantai, Modern, Sejarah, Kuliner, Belanja).
   - Pengurutan berdasarkan rating tertinggi, serta urutan alfabetis A-Z dan Z-A.

---

## 📂 Struktur Berkas Proyek

```text
wisata-malaysia/
├── index.html   # Struktur utama halaman web, modal detail, kuis, dan navigasi.
├── style.css    # Penyesuaian visual custom, scrollbar, efek hover, & animasi modal.
└── app.js       # Dataset 12 destinasi utama, kuis logika, pencarian, dan penanganan event.
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini menggunakan **Vanilla JavaScript** tanpa dependensi backend atau kompilasi build, sehingga sangat mudah dijalankan:

### Metode 1: Jalankan Langsung (Paling Mudah)
1. Buka folder `wisata-malaysia`.
2. Klik dua kali berkas `index.html` untuk langsung membukanya di browser Google Chrome, Firefox, Safari, atau Microsoft Edge pilihan Anda.

### Metode 2: Menggunakan Local Web Server (Direkomendasikan)
Untuk performa yang lebih optimal terutama saat memuat gambar dari Unsplash, Anda dapat menjalankan server lokal:

**Menggunakan Python (jika terinstal):**
```bash
cd wisata-malaysia
python -m http.server 8000
```
Buka browser Anda dan akses `http://localhost:8000`.

**Menggunakan Node.js / NPM (`live-server`):**
```bash
npm install -g live-server
cd wisata-malaysia
live-server
```

---

## 🎨 Teknologi & Desain

- **Typography**: Kontras yang elegan antara **Playfair Display** (sangat mewah untuk judul/header bergaya majalah travel) dan **Poppins** (bersih, modern, dan sangat nyaman dibaca untuk teks tubuh).
- **Styling**: **Tailwind CSS v3** untuk efisiensi framework utilitas dan responsivitas, dipadukan dengan custom CSS untuk efek glassmorphism, transisi halus, dan animasi kustom.
- **Icons**: **Font Awesome v6** untuk ikon-ikon indikator yang estetik.
- **Data Source**: Gambar-gambar berkualitas tinggi bersumber langsung dari Unsplash API secara dinamis.

---

## 📝 Kontribusi & Kustomisasi

Anda dapat menambahkan destinasi baru dengan sangat mudah! Buka berkas `app.js` dan tambahkan objek baru ke dalam array `destinations` dengan format sebagai berikut:

```javascript
{
  id: 13,
  name: "Nama Destinasi Baru",
  region: "west" /* atau "sabah" */,
  category: ["Alam", "Budaya"],
  rating: 4.8,
  image: "https://images.unsplash.com/...",
  shortDescription: "Deskripsi singkat yang tampil pada kartu.",
  description: "Penjelasan lengkap destinasi yang akan tampil pada modal detail.",
  highlights: ["Sorotan 1", "Sorotan 2"],
  location: "Nama Kota/Negara Bagian",
  mapUrl: "Tautan pencarian Google Maps",
  bestTime: "Bulan terbaik berkunjung",
  entryFee: "Estimasi biaya masuk",
  tips: "Tips penting bagi calon pengunjung."
}
```

---

*Selamat Menjelajah Keindahan Malaysia Barat dan Sabah! 🗺️✨*
