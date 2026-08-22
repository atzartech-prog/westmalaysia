// ==========================================
// DATA DESTINASI WISATA MALAYSIA
// ==========================================
const destinations = [
  {
    id: 1,
    name: "Petronas Twin Towers & KLCC",
    region: "west",
    category: ["Modern", "Belanja", "Kuliner"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a52e?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Ikon modern Malaysia yang menjulang tinggi di jantung kota Kuala Lumpur.",
    description: "Menara Kembar Petronas adalah struktur kembar tertinggi di dunia. Berdiri megah setinggi 452 meter, menara ini melambangkan kemajuan pesat Malaysia. Di bawahnya terdapat Suria KLCC, pusat perbelanjaan mewah, serta KLCC Park yang asri dengan pertunjukan air mancur menari. Pengunjung juga dapat berjalan melintasi Skybridge di lantai 41 dan dek observasi di lantai 86 untuk menikmati pemandangan kota 360 derajat.",
    highlights: ["Skybridge di lantai 41 & 42", "Dek Observasi lantai 86", "Taman KLCC & Air Mancur Simfoni", "Pusat perbelanjaan Suria KLCC"],
    location: "Kuala Lumpur, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Petronas+Twin+Towers",
    bestTime: "Sepanjang tahun (Malam hari untuk pemandangan lampu terbaik)",
    entryFee: "RM 94 (Dewasa non-MyKad), RM 35 (MyKad)",
    tips: "Pesan tiket secara online beberapa hari sebelumnya karena kuota harian sangat terbatas."
  },
  {
    id: 2,
    name: "George Town Historic City",
    region: "west",
    category: ["Budaya", "Kuliner", "Sejarah"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Surga kuliner jalanan dan situs warisan sejarah UNESCO yang memukau.",
    description: "George Town adalah ibu kota Penang yang terkenal dengan arsitektur kolonial yang terpelihara baik, mural street art yang ikonik, serta keberagaman budaya. Merupakan surga kuliner legendaris Asia Tenggara seperti Char Kway Teow, Nasi Kandar, dan Asam Laksa. Kota ini memadukan pengaruh Melayu, Tionghoa, India, dan Eropa dalam harmoni yang memikat.",
    highlights: ["Street Art di Lebuh Armenian", "Kek Lok Si Temple (Vihara Terbesar)", "Penang Hill (Bukit Bendera)", "Klan Jeti (Chew Jetty)"],
    location: "Pulau Pinang, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=George+Town+Penang",
    bestTime: "November - Februari (cuaca lebih sejuk dan tidak terlalu basah)",
    entryFee: "Gratis (area umum bersejarah), beberapa kuil/museum berbayar",
    tips: "Sewa sepeda atau becak hias untuk menjelajahi gang-gang bersejarah di sore hari."
  },
  {
    id: 3,
    name: "Langkawi Sky Bridge",
    region: "west",
    category: ["Alam", "Pantai", "Petualangan"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Jembatan gantung melengkung terpanjang di dunia di atas puncak gunung hutan hujan.",
    description: "Langkawi Sky Bridge adalah jembatan gantung melengkung sepanjang 125 meter yang menawarkan pemandangan spektakuler Laut Andaman dan pulau-pulau sekitarnya dari ketinggian 660 meter di atas permukaan laut. Terletak di puncak Gunung Mat Cincang, pengunjung dapat mencapainya menggunakan Langkawi SkyCab (kereta gantung tercuram di dunia). Pulau Langkawi sendiri adalah geopark UNESCO dengan pantai-pantai berpasir putih bebas bea cukai.",
    highlights: ["Langkawi SkyCab (Kereta Gantung)", "Sky Bridge (Jembatan Gantung)", "Pantai Cenang", "Kilim Karst Geoforest Park"],
    location: "Kedah, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Langkawi+Sky+Bridge",
    bestTime: "Januari - Maret (Musim kemarau, laut sangat tenang)",
    entryFee: "RM 85 (SkyCab + SkyBridge untuk dewasa non-MyKad)",
    tips: "Naiklah wahana SkyCab di pagi hari untuk menghindari antrean panjang dan menikmati kabut pegunungan."
  },
  {
    id: 4,
    name: "Cameron Highlands",
    region: "west",
    category: ["Alam", "Kuliner", "Santai"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599908608823-3bdf702db08b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Dataran tinggi sejuk dengan kebun teh hijau berombak dan perkebunan stroberi.",
    description: "Terletak pada ketinggian sekitar 1.500 meter di atas permukaan laut, Cameron Highlands menawarkan pelarian sempurna dari suhu panas dataran rendah. Dikenal dengan pemandangan kebun teh Boh yang hijau bergelombang bagaikan karpet raksasa, perkebunan stroberi petik sendiri, kebun lavender, serta hutan kuno Mossy Forest yang berkabut mistis bagaikan di film fantasi.",
    highlights: ["BOH Tea Center Sungai Palas", "Mossy Forest (Hutan Berlumut purba)", "Strawberry Farm & Cactus Valley", "Pasar Malam Golden Hills"],
    location: "Pahang, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Cameron+Highlands",
    bestTime: "Sepanjang tahun (suhu berkisar 15-22 derajat Celcius)",
    entryFee: "Gratis (kebun teh), Mossy Forest (RM 30 untuk non-MyKad)",
    tips: "Kenakan jaket tipis atau sweater karena suhu udara bisa menjadi sangat dingin terutama setelah hujan atau malam hari."
  },
  {
    id: 5,
    name: "Melaka Historic City",
    region: "west",
    category: ["Budaya", "Sejarah", "Kuliner"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1628150493863-71f0d4ca0835?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Jejak sejarah kolonial Belanda, Portugis, dan Peranakan Baba Nyonya di tepi sungai.",
    description: "Melaka adalah kota bersejarah tinggi yang pernah menjadi salah satu pelabuhan perdagangan tersibuk di dunia. Warisan kolonial Portugis, Belanda, dan Inggris berpadu dengan tradisi Tionghoa dan Melayu setempat, melahirkan kebudayaan unik Peranakan (Baba Nyonya). Anda dapat menjelajahi reruntuhan benteng A Famosa, berfoto di depan Gereja Merah (Christ Church), serta menyusuri Sungai Melaka dengan kapal pesiar.",
    highlights: ["A Famosa & St. Paul's Hill", "Jonker Street (Pasar Malam)", "Melaka River Cruise", "Museum Warisan Baba Nyonya"],
    location: "Melaka, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Stadthuys+Melaka",
    bestTime: "Akhir pekan (Jumat-Minggu malam untuk menikmati keramaian Jonker Walk)",
    entryFee: "Gratis (pusat sejarah), River Cruise (RM 30 untuk dewasa)",
    tips: "Cicipi Chicken Rice Ball tradisional dan Es Cendol durian yang sangat khas Melaka di siang hari yang terik."
  },
  {
    id: 6,
    name: "Taman Negara National Park",
    region: "west",
    category: ["Alam", "Petualangan"],
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Salah satu hutan hujan tropis tertua di dunia, berumur lebih dari 130 juta tahun.",
    description: "Taman Negara merupakan surga bagi pecinta alam liar dan petualangan sejati. Hutan hujan purba ini menawarkan ekosistem yang luar biasa kaya dengan ribuan spesies tumbuhan dan hewan. Daya tarik utamanya adalah Canopy Walkway, jembatan gantung tali terpanjang di dunia yang membentang tinggi di sela-sela tajuk pohon. Aktivitas menarik lainnya meliputi penjelajahan gua, kunjungan ke perkampungan suku asli Orang Asli (Bateq), dan safari malam hari.",
    highlights: ["Canopy Walkway (Jembatan Tajuk Pohon)", "Bukit Teresek Hiking", "Kunjungan Kampung Orang Asli", "Menyusuri Sungai Tembeling dengan Perahu"],
    location: "Pahang, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Taman+Negara+National+Park",
    bestTime: "Maret - September (Musim kering, cocok untuk trekking dan berkemah)",
    entryFee: "Izin Masuk RM 1, Tiket Kamera/Ponsel RM 5, Canopy Walkway RM 5",
    tips: "Gunakan pakaian lengan panjang yang cepat kering, bawa lotion anti pacet (leech), dan senter kepala."
  },
  {
    id: 7,
    name: "Gunung Kinabalu",
    region: "sabah",
    category: ["Alam", "Petualangan"],
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1626082896492-766af4fc6595?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Gunung tertinggi di Malaysia dan Situs Warisan Dunia UNESCO dengan pemandangan sunrise magis.",
    description: "Menjulang setinggi 4.095 meter di atas permukaan laut, Gunung Kinabalu adalah jantung kebanggaan Sabah. Gunung ini memiliki keanekaragaman hayati yang menakjubkan, mulai dari tanaman kantong semar raksasa hingga bunga Rafflesia. Pendakian ke puncak Low's Peak menyajikan lanskap bebatuan granit yang dramatis dan panorama samudera awan yang sangat indah saat matahari terbit.",
    highlights: ["Low's Peak (Puncak Gunung Kinabalu)", "Taman Kinabalu (Pusat Botani UNESCO)", "Kota Belud Viewpoint", "Kundasang (Lembah sapi mirip Swiss)"],
    location: "Ranau, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Mount+Kinabalu",
    bestTime: "Maret - Agustus (Musim dengan curah hujan terendah)",
    entryFee: "Izin pendakian, asuransi, dan pemandu lokal berkisar RM 300 - RM 600",
    tips: "Pemesanan slot pendakian harus dilakukan 3 hingga 6 bulan sebelumnya karena batasan ketat kuota harian pendaki."
  },
  {
    id: 8,
    name: "Pulau Sipadan Marine Park",
    region: "sabah",
    category: ["Pantai", "Alam", "Petualangan"],
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Destinasi penyelaman (diving) terbaik dunia dengan keanekaragaman terumbu karang laut dalam.",
    description: "Terbentuk dari pertumbuhan terumbu karang hidup di atas gunung berapi purba yang tenggelam di bawah laut, Sipadan adalah satu-satunya pulau samudra di Malaysia. Terkenal secara global sebagai kiblat penyelaman karena dikelilingi oleh dinding laut vertikal (drop-off) sedalam 600 meter. Penyelam dapat berenang bersama ratusan penyu hijau, hiu karang, serta kawanan barakuda raksasa (barracuda tornado) dan ikan bumphead parrotfish.",
    highlights: ["Diving di Barracuda Point", "Drop Off Wall (Dinding Terumbu Karang)", "Melihat Penyu Hijau bertelur", "Pulau Mabul & Kapalai di sekitarnya"],
    location: "Semporna, Pantai Timur Sabah",
    mapUrl: "https://maps.google.com/?q=Sipadan+Island",
    bestTime: "April - Juni (Jarak pandang bawah air bisa mencapai 30 meter)",
    entryFee: "Izin Selam RM 450 per hari (kuota dibatasi hanya 120 penyelam/hari)",
    tips: "Anda harus memiliki lisensi menyelam minimal Advanced Open Water untuk menikmati keindahan bawah laut Sipadan secara maksimal."
  },
  {
    id: 9,
    name: "Sungai Kinabatangan",
    region: "sabah",
    category: ["Alam", "Petualangan", "Santai"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Sungai terpanjang kedua di Malaysia, habitat asli Gajah Pygmy Bornean dan Bekantan.",
    description: "Sungai Kinabatangan membentang sepanjang 560 kilometer melintasi hutan dataran rendah Sabah. Sungai ini merupakan salah satu tempat terbaik di Asia untuk mengamati satwa liar di habitat aslinya. Dengan menaiki perahu motor kayu menyusuri sungai di pagi atau sore hari, Anda dapat dengan mudah melihat Orangutan liar, monyet Bekantan (proboscis monkey) yang hidungnya panjang, Gajah Pygmy Kalimantan yang bertubuh kerdil, serta berbagai macam burung enggang (hornbill).",
    highlights: ["River Cruise Margasatwa Pagi/Sore", "Safari Hutan Malam Hari", "Danau Tapal Kuda (Oxbow Lake)", "Penginapan Hutan Ramah Lingkungan (Eco-lodge)"],
    location: "Sandakan, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Kinabatangan+River",
    bestTime: "Maret - Oktober (Musim satwa aktif mencari makan di pinggir sungai)",
    entryFee: "Paket tur penginapan + safari sungai berkisar RM 350 - RM 800",
    tips: "Bawa teropong (binocular) berkualitas baik dan kamera dengan lensa telephoto untuk menangkap detail ekspresi satwa liar dari atas perahu."
  },
  {
    id: 10,
    name: "Poring Hot Spring & Rafflesia",
    region: "sabah",
    category: ["Alam", "Budaya", "Santai"],
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pemandian air panas belerang alami di kaki Gunung Kinabalu dan taman bunga Rafflesia.",
    description: "Terletak di kawasan dataran rendah Taman Nasional Kinabalu, Poring Hot Spring terkenal dengan pemandian air panas alami berpori belerang yang berkhasiat menyembuhkan dan merelaksasi otot setelah mendaki gunung. Selain kolam air panas, pengunjung dapat berjalan di atas Canopy Walkway setinggi 40 meter di atas tanah hutan, mengunjungi taman kupu-kupu, menyusuri air terjun Kipungit, serta melihat bunga terbesar di dunia, Rafflesia Keithii, yang sedang mekar jika beruntung.",
    highlights: ["Kolam Rendam Belerang Alami", "Canopy Walkway Poring", "Air Terjun Kipungit & Langanan", "Pusat Konservasi Bunga Rafflesia"],
    location: "Ranau, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Poring+Hot+Spring",
    bestTime: "Sepanjang tahun (paling menyenangkan di sore hari yang sejuk atau setelah trekking)",
    entryFee: "RM 15 (Dewasa non-MyKad), biaya tambahan RM 5 untuk Canopy Walk",
    tips: "Jika ada penanda bahwa bunga Rafflesia sedang mekar di luar area taman nasional milik warga lokal, luangkan waktu dan uang sekitar RM 10-20 untuk melihatnya karena bunga ini hanya mekar selama 5-7 hari."
  },
  {
    id: 11,
    name: "Taman Laut Tunku Abdul Rahman",
    region: "sabah",
    category: ["Pantai", "Modern", "Santai"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Klaster 5 pulau tropis berpasir putih yang indah hanya 15 menit menggunakan perahu dari Kota Kinabalu.",
    description: "Taman Laut Tunku Abdul Rahman terdiri dari lima pulau eksotis: Gaya, Sapi, Manukan, Mamutik, dan Sulug. Pulau-pulau ini menawarkan pelarian laut yang sangat mudah diakses langsung dari kota. Pulau Sapi dan Manukan sangat populer untuk aktivitas pantai seperti snorkeling, jet ski, parasailing, dan berjalan di dasar laut (sea walking). Hutan pulau Gaya memiliki jalur trekking pendek, sementara perairan di sekitarnya dipenuhi terumbu karang warna-warni yang dihuni ikan badut (nemo).",
    highlights: ["Snorkeling di Pulau Sapi", "Water Sports di Pulau Manukan", "Zip-line Antar Pulau (Coral Flyer)", "Pantai Pasir Putih Pulau Mamutik"],
    location: "Kota Kinabalu, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Tunku+Abdul+Rahman+Marine+Park",
    bestTime: "November - April (Cuaca cerah dan ombak laut relatif tenang)",
    entryFee: "Tiket konservasi pulau RM 20 + sewa kapal boat pp sekitar RM 35-50",
    tips: "Gunakan layanan island hopping untuk mengunjungi 2 pulau sekaligus dalam satu hari agar menghemat biaya kapal."
  },
  {
    id: 12,
    name: "Lembah Danum Conservation Area",
    region: "sabah",
    category: ["Alam", "Petualangan"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Hutan lindung purba tak tersentuh dengan satwa endemik langka dan kabut fajar magis.",
    description: "Lembah Danum adalah kawasan perlindungan hutan hujan tropis seluas 438 kilometer persegi yang hampir tidak terganggu oleh aktivitas manusia. Menjadi salah satu ekosistem hutan hujan tropis tertua dan paling rumit di dunia. Pengunjung yang tinggal di resort ramah lingkungan di sini dapat menikmati tur alam malam hari untuk melihat mamalia terbang, trekking fajar untuk menyaksikan kabut menyelimuti tajuk hutan dari dek observasi, serta berenang di kolam air terjun alami.",
    highlights: ["Danum Valley Canopy Walkway", "Pemandangan Fajar Bukit Coffin", "Trekking Sungai & Air Terjun Purba", "Night Safari Margasatwa Noktural"],
    location: "Lahad Datu, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Danum+Valley+Conservation+Area",
    bestTime: "Maret - Oktober (memudahkan penelusuran hutan tanpa lumpur tebal)",
    entryFee: "Memerlukan izin khusus, direkomendasikan mengambil paket akomodasi penuh",
    tips: "Pakaian anti-pacet (leech socks) sangat wajib digunakan di sini karena kelembapan hutan yang tinggi mengundang banyak pacet hutan."
  },
  {
    id: 13,
    name: "Batu Caves",
    region: "west",
    category: ["Budaya", "Sejarah", "Petualangan"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Kuil Hindu gua legendaris dengan patung emas Dewa Murugan raksasa dan 272 anak tangga pelangi.",
    description: "Batu Caves adalah sebuah bukit kapur yang memiliki serangkaian gua dan kuil gua di daerah Gombak, Selangor. Merupakan salah satu kuil Hindu di luar India yang paling populer dan menjadi pusat festival Thaipusam di Malaysia. Di gerbang masuk, pengunjung disambut oleh patung Dewa Murugan tertinggi di dunia (42,7 meter) dan tangga warna-warni ikonik sebanyak 272 anak tangga menuju Gua Katedral utama yang megah.",
    highlights: ["Patung Dewa Murugan Emas Raksasa", "272 Anak Tangga Pelangi", "Gua Katedral (Temple Cave) yang megah", "Ramayana Cave & Monyet Liar"],
    location: "Selangor, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Batu+Caves",
    bestTime: "Pagi hari (07.00 - 09.00 untuk menghindari suhu panas dan antrean panjang)",
    entryFee: "Gratis (Gua Utama), Ramayana Cave (RM 5)",
    tips: "Gunakan pakaian sopan yang menutupi lutut dan bahu karena ini merupakan tempat ibadah aktif. Hati-hati dengan monyet liar di tangga."
  },
  {
    id: 14,
    name: "Genting Highlands",
    region: "west",
    category: ["Modern", "Belanja", "Santai"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Resor puncak gunung berkabut dengan kasino, taman hiburan outdoor megah, dan mal belanja.",
    description: "Genting Highlands, yang dikenal sebagai 'Resor Kota Hiburan di Atas Awan', terletak di puncak Gunung Ulu Kali pada ketinggian 1.800 meter. Menawarkan iklim pegunungan yang sejuk dengan hiburan modern kelas dunia seperti kasino berlisensi satu-satunya di Malaysia, taman hiburan indoor dan outdoor (Genting SkyWorlds), mal perbelanjaan premium (Genting Highlands Premium Outlets), serta kuil Chin Swee Caves Temple yang indah di lereng gunung.",
    highlights: ["Genting SkyWorlds Theme Park", "Awana SkyWay (Kereta Gantung Kaca)", "Chin Swee Caves Temple yang menawan", "SkyAvenue Shopping Mall"],
    location: "Pahang/Selangor, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Genting+Highlands",
    bestTime: "Maret - September (Cuaca cerah dengan kabut tipis di sore hari)",
    entryFee: "Gratis masuk kawasan, tiket kereta gantung & wahana permainan berbayar",
    tips: "Gunakan Awana SkyWay dan turunlah di stasiun Chin Swee Temple untuk menikmati kuil gua Buddha yang spektakuler secara gratis."
  },
  {
    id: 15,
    name: "Pulau Redang",
    region: "west",
    category: ["Pantai", "Alam", "Santai"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pulau surga tropis berpasir putih halus dengan perairan kristal dan penangkaran penyu.",
    description: "Pulau Redang adalah salah satu pulau terbesar dan terindah di lepas pantai timur Malaysia Barat. Terkenal dengan pasir putihnya yang sehalus bubuk bedak, perairan biru kehijauan yang sangat jernih, serta terumbu karang yang kaya akan kehidupan laut. Tempat ini merupakan surga snorkeling dan diving, di mana Anda dapat dengan mudah berenang bersama hiu karang bayi dan penyu laut.",
    highlights: ["Snorkeling di Marine Park Center", "Pantai Pasir Panjang (Long Beach)", "Melihat Penyu di Chagar Hutang", "Diving bangkai kapal karam bersejarah"],
    location: "Terengganu, Malaysia Barat",
    mapUrl: "https://maps.google.com/?q=Redang+Island",
    bestTime: "April - Agustus (Pulau ditutup total selama musim monsun Timur Laut dari November hingga Februari)",
    entryFee: "Tiket Taman Laut RM 30 untuk non-MyKad",
    tips: "Pesan paket resort lengkap (all-inclusive) yang biasanya sudah mencakup makan 3 kali sehari, sewa boat snorkeling, dan transportasi feri dari dermaga Merang."
  },
  {
    id: 16,
    name: "Pulau Mantanani",
    region: "sabah",
    category: ["Pantai", "Alam", "Santai"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pulau terpencil berjuluk 'Maldives-nya Sabah' dengan laut biru toska jernih dan dugong liar.",
    description: "Kepulauan Mantanani adalah sekelompok tiga pulau terisolasi di barat laut pantai Sabah. Terkenal karena air lautnya yang biru kehijauan transparan bagaikan kristal dan pantai pasir putih yang sepi sepanjang mata memandang. Terkenal sebagai salah satu tempat menyelam terbaik di mana mamalia laut langka Dugong (putri duyung) terkadang terlihat berenang bebas.",
    highlights: ["Snorkeling dengan visibilitas luar biasa", "Melihat fenomena laut bercahaya (Blue Tears)", "Menyaksikan Sunset spektakuler", "Melihat pemukiman suku asli Bajau Laut"],
    location: "Kota Belud, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Mantanani+Islands",
    bestTime: "April - September (keadaan laut tenang dan air sangat jernih)",
    entryFee: "Paket day-trip dari Kota Kinabalu mulai RM 200 - RM 300",
    tips: "Mantanani berjarak sekitar 45 menit perjalanan boat cepat yang bisa berguncang hebat jika ombak tinggi, jadi siapkan obat anti-mabuk perjalanan."
  },
  {
    id: 17,
    name: "Kundasang & Desa Dairy Farm",
    region: "sabah",
    category: ["Alam", "Santai", "Kuliner"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Dataran tinggi bersuhu sejuk di kaki gunung dengan peternakan sapi perah mirip Swiss.",
    description: "Kundasang adalah kota kecil berhawa dingin (16-22°C) yang terletak tepat di lereng Gunung Kinabalu. Daya tarik utamanya adalah Desa Dairy Farm, sebuah peternakan sapi perah berlatar belakang puncak granit megah Gunung Kinabalu, menghasilkan pemandangan padang rumput hijau subur berpagar putih yang sangat mirip dengan pedesaan di Swiss. Pengunjung dapat mencicipi susu segar, gelato buatan lokal, dan memberi makan anak sapi.",
    highlights: ["Desa Dairy Farm (Swiss of Sabah)", "Kundasang War Memorial", "Pasar Sayur & Buah Segar Kundasang", "Sosodikon Hill Viewpoint"],
    location: "Ranau, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Desa+Dairy+Farm+Kundasang",
    bestTime: "Pagi hari pukul 06.00 - 08.00 (saat puncak Gunung Kinabalu belum tertutup awan tebal)",
    entryFee: "RM 5 (Dewasa)",
    tips: "Pesan tiket Desa Dairy Farm secara online terlebih dahulu karena kuota harian pengunjung dibatasi ketat demi kenyamanan."
  },
  {
    id: 18,
    name: "Mari Mari Cultural Village",
    region: "sabah",
    category: ["Budaya", "Sejarah", "Kuliner"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Desa adat interaktif untuk mempelajari tradisi, tarian, dan sumpit berburu 5 suku asli Sabah.",
    description: "Mari Mari Cultural Village adalah museum hidup yang terletak di dalam hutan hujan Kota Kinabalu. Desa adat ini didedikasikan untuk melestarikan tradisi budaya dari lima suku asli terbesar di Sabah: Dusun, Rungus, Lundayeh, Bajau, dan Murut (suku pemburu kepala legendaris). Pengunjung dapat melihat rumah adat bambu asli, mencoba sumpit berburu, belajar membuat api tradisional dari bambu, mencicipi madu hutan dan anggur beras lokal, serta menyaksikan pertunjukan tari Lansaran yang menakjubkan.",
    highlights: ["Rumah Adat 5 Suku Utama Sabah", "Demonstrasi Menyumpit & Membuat Api", "Mencicipi Kuliner Tradisional & Lihing (Anggur Beras)", "Tarian Tradisional Lansaran & Magunatip (Tari Bambu)"],
    location: "Kota Kinabalu, Sabah (Timur)",
    mapUrl: "https://maps.google.com/?q=Mari+Mari+Cultural+Village",
    bestTime: "Sesi siang (pukul 10.00) atau sore (pukul 14.00) dengan reservasi agen wisata",
    entryFee: "Sekitar RM 100 - RM 150 (termasuk makan siang/makan malam prasmanan khas lokal)",
    tips: "Ikutlah aktif dalam kegiatan praktek seperti melompat di atas papan Lansaran suku Murut untuk memenangkan hadiah tradisional."
  }
];

// ==========================================
// DATA TRIVIA FAKTA MENARIK
// ==========================================
const triviaList = [
  "Gunung Kinabalu di Sabah adalah Situs Warisan Dunia UNESCO pertama di Malaysia yang ditetapkan pada tahun 2000.",
  "Taman Negara diperkirakan berusia 130 juta tahun, menjadikannya lebih tua dari hutan Amazon di Amerika Selatan.",
  "Pulau Sipadan adalah satu-satunya pulau samudra (oceanic island) vulkanik di Malaysia, menjulang 600 meter vertikal dari dasar laut.",
  "Bunga Rafflesia, bunga terbesar di dunia, dapat tumbuh hingga diameter 1 meter. Bunga ini membutuhkan 9 bulan untuk mekar tapi hanya mekar selama 5-7 hari saja sebelum mati layu.",
  "Cameron Highlands ditemukan oleh seorang penjelajah Inggris bernama William Cameron pada tahun 1885 saat memetakan wilayah perbatasan Pahang-Perak.",
  "Monyet Bekantan (Proboscis Monyet) dengan ciri khas hidung panjang menggantung adalah satwa endemik pulau Kalimantan (Borneo) yang dapat dijumpai di sepanjang Sungai Kinabatangan.",
  "Kota Melaka diakui sebagai warisan dunia UNESCO karena arsitekturnya yang dipengaruhi oleh pendudukan Portugis, Belanda, Inggris, Tiongkok, dan budaya lokal.",
  "Kereta Gantung Langkawi (Langkawi SkyCab) adalah salah satu kereta gantung paling curam di dunia dengan sudut kemiringan menantang mencapai 42 derajat."
];

// ==========================================
// DATA KUIS PENCARI WISATA
// ==========================================
const quizQuestions = [
  {
    id: 1,
    question: "Apa gaya liburan impian yang paling Anda dambakan?",
    options: [
      { text: "Menyatu dengan Alam & Petualangan Liar", tags: ["Alam", "Petualangan"] },
      { text: "Menelusuri Sejarah & Budaya Lokal", tags: ["Budaya", "Sejarah"] },
      { text: "Gemerlap Kota Modern & Berbelanja", tags: ["Modern", "Belanja"] },
      { text: "Santai Menikmati Pantai & Laut", tags: ["Pantai", "Santai"] }
    ]
  },
  {
    id: 2,
    question: "Siapa rekan perjalanan utama Anda?",
    options: [
      { text: "Solo Traveler (Saya bepergian sendirian)", tags: ["Petualangan", "Modern"] },
      { text: "Keluarga / Pasangan (Santai & Nyaman)", tags: ["Santai", "Belanja", "Budaya"] },
      { text: "Teman-teman (Eksplorasi seru & aktif)", tags: ["Petualangan", "Pantai", "Kuliner"] }
    ]
  },
  {
    id: 3,
    question: "Suasana tempat seperti apa yang paling Anda sukai?",
    options: [
      { text: "Pegunungan hijau yang sejuk dan berkabut", tags: ["Alam", "Santai"] },
      { text: "Kota Metropolitan yang ramai dan dinamis", tags: ["Modern", "Belanja", "Kuliner"] },
      { text: "Hutan hujan rimba yang kaya margasatwa", tags: ["Alam", "Petualangan"] },
      { text: "Pulau eksotis dan pantai berpasir putih", tags: ["Pantai", "Santai"] }
    ]
  },
  {
    id: 4,
    question: "Berapa lama Anda berencana untuk berlibur?",
    options: [
      { text: "Singkat (Wisata kilat 1-3 hari)", tags: ["Modern", "Kuliner"] },
      { text: "Sedang (Liburan santai 4-7 hari)", tags: ["Budaya", "Pantai", "Santai"] },
      { text: "Lama (Eksplorasi mendalam > 7 hari)", tags: ["Petualangan", "Alam"] }
    ]
  }
];

// ==========================================
// STATE APLIKASI
// ==========================================
let appState = {
  activeRegion: "all",
  searchQuery: "",
  selectedCategories: new Set(),
  selectedSort: "default",
  favorites: JSON.parse(localStorage.getItem("jelajah_malaysia_favs")) || [],
  quizAnswers: [],
  currentQuizStep: 0,
  activeTriviaIndex: 0
};

// ==========================================
// ELEMENT DOM SELEKTOR
// ==========================================
const DOM = {
  themeToggle: document.getElementById("theme-toggle"),
  themeToggleDarkIcon: document.getElementById("theme-toggle-dark-icon"),
  themeToggleLightIcon: document.getElementById("theme-toggle-light-icon"),
  mobileMenuBtn: document.getElementById("mobile-menu-btn"),
  mobileMenu: document.getElementById("mobile-menu"),
  favCount: document.getElementById("fav-count"),
  favCountMobile: document.getElementById("fav-count-mobile"),
  
  heroSearch: document.getElementById("hero-search"),
  searchInput: document.getElementById("search-input"),
  sortSelect: document.getElementById("sort-select"),
  categoryFilterContainer: document.getElementById("category-filter-container"),
  regionTabs: document.querySelectorAll(".region-tab"),
  destinationsGrid: document.getElementById("destinations-grid"),
  noResults: document.getElementById("no-results"),
  activeFiltersInfo: document.getElementById("active-filters-info"),
  activeFilterPills: document.getElementById("active-filter-pills"),
  clearAllFilters: document.getElementById("clear-all-filters"),
  
  favoritesGrid: document.getElementById("favorites-grid"),
  emptyFavorites: document.getElementById("empty-favorites"),
  
  // Quiz
  quizIntro: document.getElementById("quiz-intro"),
  quizActive: document.getElementById("quiz-active"),
  quizResult: document.getElementById("quiz-result"),
  startQuizBtn: document.getElementById("start-quiz-btn"),
  quizProgressBar: document.getElementById("quiz-progress-bar"),
  quizProgressText: document.getElementById("quiz-progress-text"),
  quizProgressPercent: document.getElementById("quiz-progress-percent"),
  quizQuestion: document.getElementById("quiz-question"),
  quizOptions: document.getElementById("quiz-options"),
  quizPrevBtn: document.getElementById("quiz-prev-btn"),
  quizRecommendationsList: document.getElementById("quiz-recommendations-list"),
  resetQuizBtn: document.getElementById("reset-quiz-btn"),
  
  // Trivia
  triviaBtn: document.getElementById("trivia-btn"),
  triviaBubble: document.getElementById("trivia-bubble"),
  triviaText: document.getElementById("trivia-text"),
  closeTriviaBtn: document.getElementById("close-trivia-btn"),
  nextTriviaBtn: document.getElementById("next-trivia-btn"),
  
  // Modal
  detailModal: document.getElementById("detail-modal"),
  modalBackdrop: document.getElementById("modal-backdrop"),
  modalCard: document.getElementById("modal-card"),
  modalImage: document.getElementById("modal-image"),
  modalCategories: document.getElementById("modal-categories"),
  modalTitleText: document.getElementById("modal-title-text"),
  modalLocation: document.getElementById("modal-location"),
  modalRating: document.getElementById("modal-rating"),
  modalRegionBadge: document.getElementById("modal-region-badge"),
  modalBestTime: document.getElementById("modal-best-time"),
  modalEntryFee: document.getElementById("modal-entry-fee"),
  modalDescription: document.getElementById("modal-description"),
  modalHighlights: document.getElementById("modal-highlights"),
  modalTips: document.getElementById("modal-tips"),
  modalFavBtn: document.getElementById("modal-fav-btn"),
  modalFavIcon: document.getElementById("modal-fav-icon"),
  modalFavText: document.getElementById("modal-fav-text"),
  modalMapLink: document.getElementById("modal-map-link"),
  modalCloseBtn: document.getElementById("close-modal-btn"),
  modalCloseActionBtn: document.getElementById("modal-close-action-btn"),
};

// ==========================================
// RENDER DATA / LAYOUT MANAGEMENT
// ==========================================

// Inisialisasi Kategori Filter Tab
function initCategories() {
  // Ambil semua kategori unik dari data destinasi
  const allCategories = new Set();
  destinations.forEach(d => d.category.forEach(c => allCategories.add(c)));
  
  DOM.categoryFilterContainer.innerHTML = "";
  allCategories.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition cursor-pointer select-none border border-transparent";
    pill.textContent = cat;
    pill.dataset.category = cat;
    
    pill.addEventListener("click", () => {
      toggleCategoryFilter(cat);
    });
    
    DOM.categoryFilterContainer.appendChild(pill);
  });
}

// Handler klik untuk kategori filter
function toggleCategoryFilter(cat) {
  if (appState.selectedCategories.has(cat)) {
    appState.selectedCategories.delete(cat);
  } else {
    appState.selectedCategories.add(cat);
  }
  
  updateCategoryPillUI();
  filterAndRenderDestinations();
}

// Perbarui tampilan pill kategori aktif
function updateCategoryPillUI() {
  const pills = DOM.categoryFilterContainer.querySelectorAll("button");
  pills.forEach(pill => {
    const cat = pill.dataset.category;
    if (appState.selectedCategories.has(cat)) {
      pill.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition cursor-pointer select-none border border-emerald-500 shadow-sm shadow-emerald-500/20";
    } else {
      pill.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition cursor-pointer select-none border border-transparent";
    }
  });

  // Update filter aktif indicator
  renderActiveFilterIndicator();
}

// Render active filter pills
function renderActiveFilterIndicator() {
  DOM.activeFilterPills.innerHTML = "";
  
  let totalFilters = appState.selectedCategories.size;
  if (appState.searchQuery) totalFilters++;
  
  if (totalFilters === 0) {
    DOM.activeFiltersInfo.classList.add("hidden");
    return;
  }
  
  DOM.activeFiltersInfo.classList.remove("hidden");
  
  // Search query pill
  if (appState.searchQuery) {
    const pill = createFilterPill(`Cari: "${appState.searchQuery}"`, () => {
      appState.searchQuery = "";
      DOM.searchInput.value = "";
      DOM.heroSearch.value = "";
      filterAndRenderDestinations();
    });
    DOM.activeFilterPills.appendChild(pill);
  }
  
  // Categories pills
  appState.selectedCategories.forEach(cat => {
    const pill = createFilterPill(cat, () => {
      appState.selectedCategories.delete(cat);
      updateCategoryPillUI();
      filterAndRenderDestinations();
    });
    DOM.activeFilterPills.appendChild(pill);
  });
}

function createFilterPill(text, onRemove) {
  const div = document.createElement("span");
  div.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800";
  
  const span = document.createElement("span");
  span.textContent = text;
  div.appendChild(span);
  
  const btn = document.createElement("button");
  btn.className = "ml-1.5 text-emerald-500 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-200 focus:outline-none cursor-pointer";
  btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  btn.addEventListener("click", onRemove);
  
  div.appendChild(btn);
  return div;
}

// Bersihkan semua filter
function clearAllFilters() {
  appState.searchQuery = "";
  appState.selectedCategories.clear();
  DOM.searchInput.value = "";
  DOM.heroSearch.value = "";
  updateCategoryPillUI();
  filterAndRenderDestinations();
}

// Render kartu destinasi ke grid utama
function renderDestinations(items) {
  DOM.destinationsGrid.innerHTML = "";
  
  if (items.length === 0) {
    DOM.noResults.classList.remove("hidden");
    DOM.destinationsGrid.classList.add("hidden");
    return;
  }
  
  DOM.noResults.classList.add("hidden");
  DOM.destinationsGrid.classList.remove("hidden");
  
  items.forEach(d => {
    const card = document.createElement("div");
    card.className = "wisata-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md flex flex-col h-full";
    
    // Check if in favorites
    const isFav = appState.favorites.includes(d.id);
    const favIconClass = isFav ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-slate-400 dark:text-slate-500";
    const regionBadgeText = d.region === "west" ? "Malaysia Barat" : "Sabah";
    
    // Categories pill HTML
    const catHtml = d.category.slice(0, 2).map(cat => 
      `<span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100/80 text-slate-600 dark:bg-slate-900/60 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40">${cat}</span>`
    ).join(" ");
    
    card.innerHTML = `
      <!-- Thumbnail Image & Action overlay -->
      <div class="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
        <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-105" loading="lazy">
        <!-- Region Badge -->
        <span class="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold rounded-full text-white bg-slate-900/60 backdrop-blur-md border border-white/10 uppercase tracking-wide">
          ${regionBadgeText}
        </span>
        <!-- Bookmark Icon -->
        <button class="fav-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-950/70 backdrop-blur-md flex items-center justify-center border border-white/20 dark:border-slate-800/20 hover:scale-110 active:scale-95 transition cursor-pointer" data-id="${d.id}">
          <i class="${favIconClass}"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="p-5 flex flex-col flex-grow space-y-3">
        <div class="flex items-center justify-between text-xs">
          <!-- Category List -->
          <div class="flex flex-wrap gap-1">${catHtml}</div>
          <!-- Rating -->
          <div class="flex items-center text-amber-500 font-bold">
            <i class="fa-solid fa-star mr-1"></i> ${d.rating.toFixed(1)}
          </div>
        </div>

        <h3 class="font-serif font-black text-lg text-slate-800 dark:text-white line-clamp-1 leading-tight hover:text-emerald-500 transition-colors">
          ${d.name}
        </h3>
        
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed flex-grow">
          ${d.shortDescription}
        </p>

        <!-- Location -->
        <div class="text-[10px] text-slate-400 dark:text-slate-500 flex items-center pt-2">
          <i class="fa-solid fa-location-dot mr-1 text-emerald-500"></i> ${d.location}
        </div>

        <!-- Button Read More -->
        <button class="details-btn w-full mt-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200 cursor-pointer" data-id="${d.id}">
          Selengkapnya <i class="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </div>
    `;
    
    // Attach Event Listeners on Card Elements
    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(d.id);
    });
    card.querySelector(".details-btn").addEventListener("click", () => openModal(d.id));
    card.querySelector("h3").addEventListener("click", () => openModal(d.id));
    
    DOM.destinationsGrid.appendChild(card);
  });
}

// Render data destinasi favorit
function renderFavorites() {
  DOM.favoritesGrid.innerHTML = "";
  
  if (appState.favorites.length === 0) {
    DOM.emptyFavorites.classList.remove("hidden");
    DOM.favoritesGrid.classList.add("hidden");
    return;
  }
  
  DOM.emptyFavorites.classList.add("hidden");
  DOM.favoritesGrid.classList.remove("hidden");
  
  const favItems = destinations.filter(d => appState.favorites.includes(d.id));
  
  favItems.forEach(d => {
    const card = document.createElement("div");
    card.className = "wisata-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md flex flex-col h-full";
    const regionBadgeText = d.region === "west" ? "Malaysia Barat" : "Sabah";
    
    card.innerHTML = `
      <div class="relative h-40 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
        <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover select-none">
        <span class="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold rounded-full text-white bg-slate-900/60 backdrop-blur-md border border-white/10 uppercase">
          ${regionBadgeText}
        </span>
        <button class="remove-fav-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center border border-transparent shadow-sm hover:scale-105 active:scale-95 transition cursor-pointer" data-id="${d.id}">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
      <div class="p-4 flex flex-col flex-grow space-y-2">
        <div class="flex justify-between items-center text-xs text-amber-500 font-bold">
          <span class="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-semibold">${d.category[0]}</span>
          <span><i class="fa-solid fa-star mr-0.5"></i> ${d.rating.toFixed(1)}</span>
        </div>
        <h3 class="font-serif font-black text-base text-slate-800 dark:text-white line-clamp-1">${d.name}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-grow">${d.shortDescription}</p>
        <button class="view-fav-btn w-full mt-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition duration-200" data-id="${d.id}">
          Lihat Detail
        </button>
      </div>
    `;
    
    card.querySelector(".remove-fav-btn").addEventListener("click", () => toggleFavorite(d.id));
    card.querySelector(".view-fav-btn").addEventListener("click", () => openModal(d.id));
    
    DOM.favoritesGrid.appendChild(card);
  });
}

// ==========================================
// BUSINESS LOGIC: FILTER & SEARCH & SORT
// ==========================================

// Filter dan sortir data lalu render
function filterAndRenderDestinations() {
  let filtered = destinations;
  
  // 1. Filter Region Tab
  if (appState.activeRegion !== "all") {
    filtered = filtered.filter(d => d.region === appState.activeRegion);
  }
  
  // 2. Filter Search Query
  if (appState.searchQuery) {
    const q = appState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(d => 
      d.name.toLowerCase().includes(q) || 
      d.location.toLowerCase().includes(q) || 
      d.shortDescription.toLowerCase().includes(q) ||
      d.category.some(cat => cat.toLowerCase().includes(q))
    );
  }
  
  // 3. Filter Categories Selected
  if (appState.selectedCategories.size > 0) {
    filtered = filtered.filter(d => 
      Array.from(appState.selectedCategories).every(cat => d.category.includes(cat))
    );
  }
  
  // 4. Sorting
  if (appState.selectedSort === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (appState.selectedSort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (appState.selectedSort === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    // Default sorting based on ID
    filtered.sort((a, b) => a.id - b.id);
  }
  
  // Render
  renderDestinations(filtered);
  renderActiveFilterIndicator();
}

// Bookmark / Simpan Favorite Toggle
function toggleFavorite(id) {
  const index = appState.favorites.indexOf(id);
  if (index === -1) {
    appState.favorites.push(id);
  } else {
    appState.favorites.splice(index, 1);
  }
  
  // Save to localStorage
  localStorage.setItem("jelajah_malaysia_favs", JSON.stringify(appState.favorites));
  
  // Update badge count
  updateFavoriteBadges();
  
  // Re-render
  filterAndRenderDestinations();
  renderFavorites();
  
  // Update modal bookmark button state if open
  if (!DOM.detailModal.classList.contains("hidden")) {
    const currentModalId = parseInt(DOM.modalFavBtn.dataset.id);
    if (currentModalId === id) {
      updateModalFavButtonState(id);
    }
  }
}

function updateFavoriteBadges() {
  const count = appState.favorites.length;
  DOM.favCount.textContent = count;
  DOM.favCountMobile.textContent = count;
}

// ==========================================
// MODAL WORKSPACE
// ==========================================

function openModal(id) {
  const d = destinations.find(item => item.id === id);
  if (!d) return;
  
  DOM.modalImage.src = d.image;
  DOM.modalImage.alt = d.name;
  
  // Categories inside modal
  DOM.modalCategories.innerHTML = d.category.map(cat => 
    `<span class="px-2.5 py-1 text-[10px] font-bold rounded-md bg-emerald-500 text-white shadow-sm border border-emerald-400">${cat}</span>`
  ).join(" ");
  
  DOM.modalTitleText.textContent = d.name;
  DOM.modalLocation.textContent = d.location;
  DOM.modalRating.textContent = d.rating.toFixed(1);
  DOM.modalRegionBadge.textContent = d.region === "west" ? "Malaysia Barat" : "Sabah";
  
  // Region color class
  if (d.region === "west") {
    DOM.modalRegionBadge.className = "inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300";
  } else {
    DOM.modalRegionBadge.className = "inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300";
  }
  
  DOM.modalBestTime.textContent = d.bestTime;
  DOM.modalEntryFee.textContent = d.entryFee;
  DOM.modalDescription.textContent = d.description;
  DOM.modalTips.textContent = d.tips;
  
  // Highlights ul
  DOM.modalHighlights.innerHTML = d.highlights.map(hl => 
    `<li>${hl}</li>`
  ).join("");
  
  // Map Link
  DOM.modalMapLink.href = d.mapUrl;
  
  // Favorite Button dataset
  DOM.modalFavBtn.dataset.id = d.id;
  updateModalFavButtonState(d.id);
  
  // Show modal
  DOM.detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // block background scroll
  
  // Slide up card animation
  setTimeout(() => {
    DOM.modalCard.classList.remove("opacity-0", "translate-y-4", "scale-95");
    DOM.modalCard.classList.add("modal-anim-enter-active");
  }, 10);
}

function updateModalFavButtonState(id) {
  const isFav = appState.favorites.includes(id);
  if (isFav) {
    DOM.modalFavBtn.className = "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs transition flex items-center justify-center gap-2 border border-transparent shadow-sm";
    DOM.modalFavIcon.className = "fa-solid fa-heart";
    DOM.modalFavText.textContent = "Destinasi Disimpan";
  } else {
    DOM.modalFavBtn.className = "w-full sm:w-auto px-5 py-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 dark:border-rose-950 dark:hover:bg-rose-950/30 font-semibold text-xs transition flex items-center justify-center gap-2";
    DOM.modalFavIcon.className = "fa-regular fa-heart";
    DOM.modalFavText.textContent = "Simpan ke Favorit";
  }
}

function closeModal() {
  DOM.modalCard.classList.remove("modal-anim-enter-active");
  DOM.modalCard.classList.add("opacity-0", "translate-y-4", "scale-95");
  
  setTimeout(() => {
    DOM.detailModal.classList.add("hidden");
    document.body.style.overflow = ""; // restore scroll
  }, 250);
}

// ==========================================
// INTERACTIVE QUIZ
// ==========================================

function startQuiz() {
  appState.quizAnswers = [];
  appState.currentQuizStep = 0;
  
  DOM.quizIntro.classList.add("hidden");
  DOM.quizResult.classList.add("hidden");
  DOM.quizActive.classList.remove("hidden");
  
  renderQuizStep();
}

function renderQuizStep() {
  const stepIndex = appState.currentQuizStep;
  const q = quizQuestions[stepIndex];
  
  // Progress Bar
  const total = quizQuestions.length;
  const percent = Math.round(((stepIndex + 1) / total) * 100);
  DOM.quizProgressBar.style.width = `${percent}%`;
  DOM.quizProgressText.textContent = `Langkah ${stepIndex + 1} dari ${total}`;
  DOM.quizProgressPercent.textContent = `${percent}%`;
  
  // Question Title
  DOM.quizQuestion.textContent = q.question;
  
  // Navigation Back Button
  DOM.quizPrevBtn.disabled = stepIndex === 0;
  
  // Options
  DOM.quizOptions.innerHTML = "";
  q.options.forEach((opt, optIdx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-500 text-left text-xs sm:text-sm font-medium transition cursor-pointer flex items-center space-x-3";
    btn.innerHTML = `
      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
        ${String.fromCharCode(65 + optIdx)}
      </span>
      <span class="flex-grow">${opt.text}</span>
    `;
    
    btn.addEventListener("click", () => {
      selectQuizOption(opt.tags);
    });
    DOM.quizOptions.appendChild(btn);
  });
}

function selectQuizOption(tags) {
  appState.quizAnswers.push(tags);
  
  if (appState.currentQuizStep < quizQuestions.length - 1) {
    appState.currentQuizStep++;
    renderQuizStep();
  } else {
    finishQuizAndShowResults();
  }
}

function prevQuizStep() {
  if (appState.currentQuizStep > 0) {
    appState.quizAnswers.pop();
    appState.currentQuizStep--;
    renderQuizStep();
  }
}

function finishQuizAndShowResults() {
  // Hitung Kecocokan Destinasi
  // Gabungkan semua tags jawaban terpilih
  const selectedTags = appState.quizAnswers.flat();
  
  // Hitung score untuk setiap destinasi
  const scoredDestinations = destinations.map(d => {
    let score = 0;
    // Cek kategori kecocokan
    d.category.forEach(cat => {
      if (selectedTags.includes(cat)) {
        score += 2; // Match category matches high
      }
    });
    
    // Berikan bobot kecocokan tambahan berdasarkan region untuk suasana tertentu
    if (selectedTags.includes("Alam") && d.region === "sabah") score += 1;
    if (selectedTags.includes("Modern") && d.region === "west") score += 1;
    if (selectedTags.includes("Sejarah") && d.region === "west") score += 1;
    
    return { destination: d, score: score };
  });
  
  // Sortir berdasarkan score tertinggi
  scoredDestinations.sort((a, b) => b.score - a.score);
  
  // Ambil top 3 rekomendasi
  const topRecommendations = scoredDestinations.slice(0, 3);
  
  // Render hasil
  DOM.quizRecommendationsList.innerHTML = "";
  DOM.quizActive.classList.add("hidden");
  DOM.quizResult.classList.remove("hidden");
  
  topRecommendations.forEach((item, index) => {
    const d = item.destination;
    const recDiv = document.createElement("div");
    recDiv.className = "flex items-center space-x-4 p-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition";
    
    recDiv.innerHTML = `
      <div class="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-slate-900">
        <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover">
      </div>
      <div class="flex-grow min-w-0">
        <div class="flex items-center justify-between">
          <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">${d.region === "west" ? "Malaysia Barat" : "Sabah"}</span>
          <span class="text-[10px] text-slate-400"><i class="fa-solid fa-star text-amber-500 mr-0.5"></i> ${d.rating.toFixed(1)}</span>
        </div>
        <h4 class="text-xs sm:text-sm font-bold text-white truncate">${d.name}</h4>
      </div>
      <button class="quiz-detail-btn px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold flex-shrink-0 cursor-pointer">
        Buka
      </button>
    `;
    
    recDiv.querySelector(".quiz-detail-btn").addEventListener("click", () => {
      openModal(d.id);
    });
    
    DOM.quizRecommendationsList.appendChild(recDiv);
  });
}

function resetQuiz() {
  DOM.quizResult.classList.add("hidden");
  DOM.quizActive.classList.add("hidden");
  DOM.quizIntro.classList.remove("hidden");
}

// ==========================================
// FLOATING TRIVIA FACTORY
// ==========================================

function toggleTrivia() {
  if (DOM.triviaBubble.classList.contains("hidden")) {
    // Show random trivia
    cycleTrivia();
    DOM.triviaBubble.classList.remove("hidden");
    setTimeout(() => {
      DOM.triviaBubble.classList.add("show");
    }, 10);
  } else {
    hideTrivia();
  }
}

function hideTrivia() {
  DOM.triviaBubble.classList.remove("show");
  setTimeout(() => {
    DOM.triviaBubble.classList.add("hidden");
  }, 350);
}

function cycleTrivia() {
  const currentIndex = appState.activeTriviaIndex;
  let nextIndex = Math.floor(Math.random() * triviaList.length);
  
  // Make sure not picking same trivia
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * triviaList.length);
  }
  
  appState.activeTriviaIndex = nextIndex;
  DOM.triviaText.innerHTML = triviaList[nextIndex];
}

// ==========================================
// THEME & MODE MANAGEMENT (DARK/LIGHT)
// ==========================================

function initTheme() {
  // Theme check
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark");
    DOM.themeToggleDarkIcon.classList.add("hidden");
    DOM.themeToggleLightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    DOM.themeToggleLightIcon.classList.add("hidden");
    DOM.themeToggleDarkIcon.classList.remove("hidden");
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    DOM.themeToggleLightIcon.classList.add("hidden");
    DOM.themeToggleDarkIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    DOM.themeToggleDarkIcon.classList.add("hidden");
    DOM.themeToggleLightIcon.classList.remove("hidden");
  }
}

// ==========================================
// REGION TAB INTERACTION
// ==========================================
function selectRegionTab(selectedTab) {
  DOM.regionTabs.forEach(tab => {
    tab.classList.remove("active");
  });
  selectedTab.classList.add("active");
  
  appState.activeRegion = selectedTab.dataset.region;
  filterAndRenderDestinations();
}

// ==========================================
// EVENT LISTENERS & INITS
// ==========================================

function registerEventListeners() {
  // Dark/Light Theme Toggle
  DOM.themeToggle.addEventListener("click", toggleTheme);
  
  // Mobile Hamburger Menu
  DOM.mobileMenuBtn.addEventListener("click", () => {
    DOM.mobileMenu.classList.toggle("hidden");
  });
  
  // Close Mobile Menu on Click Navigation Link
  DOM.mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      DOM.mobileMenu.classList.add("hidden");
    });
  });

  // Region tabs clicks
  DOM.regionTabs.forEach(tab => {
    tab.addEventListener("click", () => selectRegionTab(tab));
  });
  
  // Hero Search Input
  DOM.heroSearch.addEventListener("keyup", (e) => {
    appState.searchQuery = e.target.value;
    DOM.searchInput.value = e.target.value; // Sync with filter search input
    filterAndRenderDestinations();
  });
  
  // Filter Search Input
  DOM.searchInput.addEventListener("keyup", (e) => {
    appState.searchQuery = e.target.value;
    DOM.heroSearch.value = e.target.value; // Sync with hero search input
    filterAndRenderDestinations();
  });
  
  // Sorting Select
  DOM.sortSelect.addEventListener("change", (e) => {
    appState.selectedSort = e.target.value;
    filterAndRenderDestinations();
  });
  
  // Clear Filters button
  DOM.clearAllFilters.addEventListener("click", clearAllFilters);
  
  // Quick Categories Button from Hero Search widget
  document.querySelectorAll(".quick-cat").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      appState.selectedCategories.clear();
      appState.selectedCategories.add(cat);
      updateCategoryPillUI();
      
      // Auto Scroll to Destinations
      document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
      filterAndRenderDestinations();
    });
  });
  
  // Modal Closes
  DOM.modalCloseBtn.addEventListener("click", closeModal);
  DOM.modalCloseActionBtn.addEventListener("click", closeModal);
  DOM.modalBackdrop.addEventListener("click", closeModal);
  
  // Bookmark button in Modal
  DOM.modalFavBtn.addEventListener("click", () => {
    const currentId = parseInt(DOM.modalFavBtn.dataset.id);
    toggleFavorite(currentId);
  });
  
  // Keyboard Close Modal Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !DOM.detailModal.classList.contains("hidden")) {
      closeModal();
    }
  });
  
  // Quiz Events
  DOM.startQuizBtn.addEventListener("click", startQuiz);
  DOM.quizPrevBtn.addEventListener("click", prevQuizStep);
  DOM.resetQuizBtn.addEventListener("click", resetQuiz);
  
  // Trivia Events
  DOM.triviaBtn.addEventListener("click", toggleTrivia);
  DOM.closeTriviaBtn.addEventListener("click", hideTrivia);
  DOM.nextTriviaBtn.addEventListener("click", cycleTrivia);
  
  // Close Trivia when click outside
  document.addEventListener("click", (e) => {
    if (!DOM.triviaBtn.contains(e.target) && !DOM.triviaBubble.contains(e.target)) {
      if (!DOM.triviaBubble.contains(e.target)) {
        hideTrivia();
      }
    }
  });
}

// Initializing Web Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCategories();
  
  // Set default active tab UI
  const defaultTab = Array.from(DOM.regionTabs).find(t => t.dataset.region === "all");
  if (defaultTab) defaultTab.classList.add("active");
  
  // Setup favorite badges
  updateFavoriteBadges();
  
  // Register Actions
  registerEventListeners();
  
  // First initial render
  filterAndRenderDestinations();
  renderFavorites();
  
  // Auto show trivia notification in 4 seconds for user engagement
  setTimeout(() => {
    if (DOM.triviaBubble.classList.contains("hidden")) {
      toggleTrivia();
    }
  }, 4000);
});
