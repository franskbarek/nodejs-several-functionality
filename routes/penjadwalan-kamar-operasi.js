const express = require("express");
const router = express.Router();

// Init arr
const scheduledOperations = [];

// add booking
router.post("/:bookingdate/:durasi", async (req, res) => {
  // mengambil tanggal dan durasi dari parameter yang diterima
  const bookingDate = new Date(req.params.bookingdate);
  const duration = parseInt(req.params.durasi);
  // menghitung waktu selesainya operasi dari tanggal booking dan durasi
  const operationEndTime = new Date(bookingDate.getTime() + duration * 60 * 60 * 1000);

  // init var untuk mengecek apakah ada slot yang tersedia default adalah true
  let isSlotAvailable = true;
  // iterate setiap jadwal operasi yang sudah dijadwalkan
  for (let i = 0; i < scheduledOperations.length; i++) {
    // tanggal mulai dan tanggal selesai operasi yang sudah dijadwalkan
    const scheduledOperationStart = await scheduledOperations[i].startTime;
    const scheduledOperationEnd = await scheduledOperations[i].endTime;
    const scheduledOperationEndPlusInterval = new Date(scheduledOperationEnd.getTime() + duration * 60 * 120 * 1000);
    // validasi jika waktu jam booking yang tersedia
    if (operationEndTime <= scheduledOperationEndPlusInterval) {
      // maka slot tidak tersedia
      isSlotAvailable = false;
      // break dari looping
      break;
    }
  }

  // slot tersedia
  if (isSlotAvailable) {
    // tambahkan jadwal operasi yang baru diminta ke array jadwal operasi yang sudah dijadwalkan
    scheduledOperations.push({ startTime: bookingDate, endTime: operationEndTime, duration: duration });
    // kirimkan respon true ke client
    return res.status(201).json(true);
    // res.status(201).json({ status: true, result: scheduledOperations });
  } else {
    // kirimkan respon false ke client
    res.status(400).json(false);
    // res.status(400).json({ status: false });
  }
});

// get bookings
router.get("/", (req, res) => {
  try {
    res.status(200).json(scheduledOperations);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
