<a name="readme-top"></a>

[![GitHub Stars](https://img.shields.io/github/stars/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality/stars) [![GitHub Issues](https://img.shields.io/github/issues/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality/issues)

# Dokumentasi Teknis

## Tentang Aplikasi

Merupakan Web API sederhana dari beberapa fungsi logika, menggunakan teknologi Express.js.

![API Preview](https://www.udrop.com/7LqA/testing-all.jpg)

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
      <a href="#petunjuk-menjalankan-aplikasi">Petunjuk menjalankan Aplikasi</a>
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

## Petunjuk menjalankan Aplikasi

Install node modules yang terdapat pada `package.json` sebelum menjalankan aplikasi

Clone repositori ini ke komputer Anda git clone **`https://github.com/franskbarek/nodejs-several-functionality.git`**

Masuk ke dalam direktori aplikasi `cd nodejs-several-functionality`

Install dependensi `npm install` atau `yarn` jika menggunakan yarn

Jalankan aplikasi `npm run start` atau `yarn start` jika menggunakan yarn

Aplikasi akan berjalan pada **`http://localhost:8080`** dan siap digunakan

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

#### There are 3 admin levels:

- **Helper:** Can delete chat messages
- **Moderator:** The above plus the ability to kick and ban users
- **Administrator:** All the above plus send global alerts and promote/demote users
