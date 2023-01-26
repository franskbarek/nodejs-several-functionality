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
        <li><a href="#mulai-membuat-jadwal">Mulai</a></li>
        <li><a href="#unit-testing-booking">Unit Testing</a></li>
      </ul>
    </li>
    <li>
      <a href="#aplikasi-penggajian">Aplikasi Penggajian</a>
      <ul>
        <li><a href="#mulai-cek-gaji">Mulai</a></li>
        <li><a href="#unit-testing-gaji">Unit Testing</a></li>
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

## Instalasi

Install node modules yang terdapat pada `package.json` sebelum menjalankan aplikasi

Clone repositori ini ke komputer Anda git clone **`https://github.com/franskbarek/nodejs-several-functionality.git`**

Masuk ke dalam direktori aplikasi `cd nodejs-several-functionality`

Install dependensi `npm install` atau `yarn` jika menggunakan yarn

Jalankan aplikasi `npm run start` atau `yarn start` jika menggunakan yarn

Aplikasi akan berjalan pada **`http://localhost:8080`** dan siap digunakan

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Aplikasi Penjadwalan Kamar Operasi

Ketentuan apliksi...

### Penggunaan

Misal gunakan postman...

Untuk melakukan booking kamar operasi, gunakan permintaan POST ke alamat `localhost:8080/bookingkamaroperasi/{bookingdate}/{durasi}`

Contoh:

POST http://localhost:8080/bookingkamaroperasi/2023-01-30T10:00:00.00Z/2

Response ketika berhasil:

`true`

Response ketika gagal:

`false`

Untuk melihat seluruh jadwal operasi, gunakan permintaan GET ke alamat `localhost:8080/bookingkamaroperasi`

Contoh:

POST http://localhost:8080/bookingkamaroperasi

Response:

## Unit Testing

### Jest

---

## Aplikasi Penggajian

### Unit Testing

### Postman

### Jest
