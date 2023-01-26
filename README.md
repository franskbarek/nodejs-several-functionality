[![GitHub Stars](https://img.shields.io/github/stars/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality) [![GitHub Issues](https://img.shields.io/github/issues/franskbarek/nodejs-several-functionality.svg)](https://github.com/franskbarek/nodejs-several-functionality/issues)

# Dokumentasi Teknis

## Tentang Aplikasi

Merupakan Web API sederhana dari beberapa fungsi logika, menggunakan framework Node.js menggunkan Express.js.

![Chat Preview](http://i.imgur.com/lgRe8z4.png)

## Teknologi yang digunakan

- yarn
- node.js
- express.js
- jest
- supertest
- postman

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabel konten</summary>
  <ol>
    <li>
      <a href="#about-the-app">Tentang Aplikasi</a>
      <ul>
        <li><a href="#built-with">Teknologi yang digunakan</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Petunjuk menjalankan Aplikasi</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

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

## Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application. You will then be able to access it at localhost:3000

To give yourself administrator permissions on the chat, you will have to type `/role [your-name]` in the app console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

#### There are 3 admin levels:

- **Helper:** Can delete chat messages
- **Moderator:** The above plus the ability to kick and ban users
- **Administrator:** All the above plus send global alerts and promote/demote users
