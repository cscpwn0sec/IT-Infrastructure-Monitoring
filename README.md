# Monitor Infrastruktur IT

Proyek ini menyediakan solusi komprehensif untuk memantau seluruh infrastruktur IT Anda. Termasuk pemantauan HTTPS dan Ping terdistribusi, metrik dan visualisasi khusus, pemantauan bandwidth dan SNMP, pemantauan OS dan proses secara detail, pelaporan kesehatan dan inventaris, serta pemberitahuan dan notifikasi yang dapat ditindaklanjuti.

## Fitur

- **Pemantauan HTTPS & Ping Terdistribusi**: Memantau ketersediaan dan waktu respons dari beberapa layanan web dan host.
- **Metrik & Visualisasi Khusus**: Mendefinisikan dan memvisualisasikan metrik khusus untuk mendapatkan wawasan tentang kinerja infrastruktur Anda.
- **Pemantauan Bandwidth & SNMP**: Melacak penggunaan bandwidth dan data SNMP dari perangkat jaringan.
- **Pemantauan OS & Proses Secara Detail**: Mendapatkan informasi detail tentang proses OS dan sumber daya sistem.
- **Pelaporan Kesehatan & Inventaris**: Menghasilkan laporan tentang kesehatan dan inventaris infrastruktur Anda.
- **Pemberitahuan & Notifikasi yang Dapat Ditindaklanjuti**: Menerima pemberitahuan dan notifikasi melalui email, SMS, atau webhook ketika ambang batas terlampaui.

## Teknologi yang Digunakan

- **Backend**: Flask
- **Frontend**: React
- **Pemantauan**: psutil, ping3, pysnmp, requests
- **Notifikasi**: smtplib, Twilio

## Memulai

### Prasyarat

- Python 3.x
- Node.js
- npm (Node Package Manager)

### Instalasi

#### Backend

1. Clone repository:
    ```sh
    git clone https://github.com/yourusername/IT-Infrastructure-Monitoring.git
    cd IT-Infrastructure-Monitoring/backend
    ```

2. Siapkan lingkungan virtual dan instal dependensi:
    ```sh
    ./scripts/setup.sh
    ```

3. Jalankan server backend:
    ```sh
    ./scripts/start_backend.sh
    ```

#### Frontend

1. Navigasi ke direktori frontend:
    ```sh
    cd ../frontend
    ```

2. Instal dependensi frontend dan jalankan server frontend:
    ```sh
    ./scripts/start_frontend.sh
    ```

### Penggunaan

1. Akses antarmuka web di `http://localhost:3000`
2. Gunakan endpoint API untuk data pemantauan:

   - `/ping` - Memeriksa status ping dari host yang dikonfigurasi
   - `/https` - Memeriksa status HTTPS dari URL yang dikonfigurasi
   - `/snmp` - Memeriksa status SNMP dari perangkat yang dikonfigurasi
   - `/os` - Mendapatkan informasi detail OS dan proses
   - `/bandwidth` - Mendapatkan penggunaan bandwidth dari antarmuka jaringan
   - `/health-report` - Mendapatkan laporan kesehatan
   - `/inventory-report` - Mendapatkan laporan inventaris
   - `/custom-report` - Mendapatkan laporan khusus
   - `/alerts` - Mendapatkan pemberitahuan alert

## Endpoint API

- `/ping`: Memeriksa status ping dari host yang dikonfigurasi
- `/https`: Memeriksa status HTTPS dari URL yang dikonfigurasi
- `/snmp`: Memeriksa status SNMP dari perangkat yang dikonfigurasi
- `/os`: Mendapatkan informasi detail OS dan proses
- `/bandwidth`: Mendapatkan penggunaan bandwidth dari antarmuka jaringan
- `/health-report`: Mendapatkan laporan kesehatan
- `/inventory-report`: Mendapatkan laporan inventaris
- `/custom-report`: Mendapatkan laporan khusus
- `/alerts`: Mendapatkan pemberitahuan alert

## Kontribusi

Silakan kirimkan masalah dan permintaan penarikan. Kami menyambut semua kontribusi!
