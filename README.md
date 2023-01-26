<a name="readme-top"></a>

[![GitHub Stars](https://img.shields.io/github/stars/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality/stars) [![GitHub Issues](https://img.shields.io/github/issues/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality/issues)

# Dokumentasi Teknis

## Tentang Aplikasi

Merupakan Web API sederhana dari beberapa fungsi logika, menggunakan teknologi Express.js.

![API Preview](./public/images/testing-all.jpg)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabel konten</summary>
  <ol>
    <li>
      <a href="#tentang-aplikasi">Tentang Aplikasi</a>
      <ul>
        <li><a href="#teknologi-yang-digunakan">Teknologi yang digunakan</a></li>
      </ul>
    </li>
    <li>
      <a href="#instalasi">Instalasi</a>
    </li>
    <li>
      <a href="#aplikasi-penjadwalan-kamar-operasi">Aplikasi Penjadwalan Kamar Operasi</a>
      <ul>
        <li><a href="#penggunaan">Penggunaan</a></li>
        <li><a href="#unit-testing">Unit Testing</a></li>
      </ul>
    </li>
    <li>
      <a href="#aplikasi-penggajian">Aplikasi Penggajian</a>
      <ul>
        <li><a href="#penggunaan">Penggunaan</a></li>
        <li><a href="#unit-testing">Unit Testing</a></li>
      </ul>
    </li>
  </ol>
</details>

---

## Teknologi yang digunakan

- yarn
- node.js
- express.js
- jest
- supertest
- postman

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installasi

Install node modules yang terdapat pada **`package.json`** sebelum menjalankan aplikasi

Clone repositori ini ke komputer Anda git clone `https://github.com/franskbarek/nodejs-several-functionality.git`

Masuk ke dalam direktori aplikasi **`cd nodejs-several-functionality`**

Install dependensi **`npm install`** atau **`yarn`** jika menggunakan yarn

Jalankan aplikasi **`npm run start`** atau **`yarn start`** jika menggunakan yarn

Aplikasi akan berjalan pada http://localhost:8080 dan siap digunakan

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 1. Aplikasi Penjadwalan Kamar Operasi

Untuk melakukan penjadwalan kamar operasi, aturannya adalah jarak antara satu operasi dengan operasi yang lain minimal 2 jam. Jika
seorang dokter ingin booking kamar operasi, harus menyampaikan tanggal dan jam kapan mau menggunakan kamar
operasi, dan estimasi durasi operasi tersebut. Response dari API ada dalam body, berisi hanya 2 kemungkinan saja, true atau false.

### Penggunaan

Untuk mulai menggunakan aplikasi dapat menggunakan API testing tool misal Postman, Insomnia dan lain-lain.

Untuk melakukan booking kamar operasi, gunakan permintaan POST ke alamat `http://localhost:8080/bookingkamaroperasi/{bookingdate}/{durasi}`

Contoh:

POST http://localhost:8080/bookingkamaroperasi/2023-01-30T10:00:00.00Z/2

Response ketika berhasil:

`true`

Response ketika gagal:

`false`

Untuk melihat seluruh jadwal operasi, gunakan permintaan GET ke alamat `http://localhost:8080/bookingkamaroperasi`

Contoh:

GET http://localhost:8080/bookingkamaroperasi

Response ketika berhasil:

```
[
    {
        "startTime": "2023-01-15T10:00:00.000Z",
        "endTime": "2023-01-15T12:00:00.000Z",
        "duration": 2
    }
]
```

### Unit Testing

Untuk menjalankan unit testing pada aplikasi penjadwalan kamar operasi jalankan perintah **`yarn test-booking`** pada terminal dan posisi direktori root

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 2. Aplikasi Penggajian

Untuk melakukan perhitungan gaji karyawan di berbagai negara, maka besar kemungkinan untuk membayar gaji pegawai di beberapa
negara, dimana tiap-tiap negara memiliki regulasi penggajian yang berbeda beda. Katakanlah kita akan melakukan pembayaran gaji untuk
karyawan di Indonesia dan di Vietnam. Gaji karyawan di Indonesia dalam Rupiah (IDR) dan karyawan di Vietnam dalam Dong (VND).
Goalnya pada aplikasi ini adalah menghitung gaji perbulan, pertahun serta pajak pertahun dan perbulan dengan ketentuan pajak tiap-tiap negara dan status pernikahan. Dalam response body akan fokus mengembalikan response pajak perbulan saja.

### Penggunaan

Untuk mulai menggunakan aplikasi dapat menggunakan API testing tool misal Postman, Insomnia dan lain-lain.

Untuk melakukan penggajian, gunakan permintaan POST ke alamat `http://localhost:8080/hitunggaji`

Contoh:

POST http://localhost:8080/hitunggaji

Request body:

```
{
  "employee": {
    "name": "John",
    "id": "123",
    "nationality": "Indonesia",
    "marital_status": "K1"
  },
  "komponengaji": [
    {
      "name": "Basic Salary",
      "amount": 25000000
    },
    {
      "name": "Allowance",
      "amount": 5000000
    }
  ]
}
```

Response ketika berhasil:

```
{
    "pajak_bulanini": "3.146.000"
}
```

### Unit Testing

Untuk menjalankan unit testing pada aplikasi penjadwalan kamar operasi jalankan perintah **`yarn test-penggajian`** pada terminal dan posisi direktori root

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
