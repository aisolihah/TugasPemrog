// Input jumlah penjualan salesman
const penjualanHariIni = 1000000; // Ganti dengan jumlah penjualan sesuai kebutuhan

// Inisialisasi variabel uangJasa dan persentaseKomisi
let uangJasa, persentaseKomisi;

// Menggunakan if-else untuk menentukan persentase komisi berdasarkan jumlah penjualan
if (penjualanHariIni <= 200000) {
    uangJasa = 10000;
    persentaseKomisi = 0.1;
} else if (penjualanHariIni > 200000 && penjualanHariIni <= 500000) {
    uangJasa = 20000;
    persentaseKomisi = 0.15;
} else if (penjualanHariIni > 500000) {
    uangJasa = 30000;
    persentaseKomisi = 0.2;
}

// Menghitung jumlah komisi
const komisi = penjualanHariIni * persentaseKomisi;

// Menghitung total pendapatan
const totalPendapatan = uangJasa + komisi;

// Menampilkan hasil
console.log(`Penjualan Hari Ini: Rp. ${penjualanHariIni}`);
console.log(`Uang Jasa: Rp. ${uangJasa}`);
console.log(`Komisi: Rp. ${komisi}`);
console.log(`Total Pendapatan: Rp. ${totalPendapatan}`);