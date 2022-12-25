const express = require("express");
const router = express.Router();
const moment = require("moment");

// faux database
const schedule = [
  /* 
  {
    id: "85i2now5t1v",
    bookingdate: "202201011000", note* format: "YYYY-MM-DD HH:mm
    durasi: 120,
    inputdate: "2022-12-22T14:10:00.827Z" note* auto increment
  },
  */
];

// create
router.post("/:bookingdate/:durasi", (req, res) => {
  try {
    const fetchData = {
      id: Math.random().toString(36).slice(2), // auto increment
      bookingdate: req.params.bookingdate || 0,
      durasi: parseInt(req.params.durasi) || 0,
      inputdate: moment(), // auto increment
    };
    // validation is null
    if (fetchData.bookingdate < 1) return res.status(400).json([{ false: { message: "Input bookingdate required" } }]);
    if (fetchData.durasi < 1) return res.status(400).json([{ false: { message: "Input durasi required" } }]);
    if (fetchData.durasi > 120) return res.status(400).json([{ false: { message: "Rule duration should 2 hour!" } }]);

    // validation isNaN
    if (isNaN(fetchData.bookingdate) || isNaN(fetchData.durasi)) return res.status(400).json([{ false: { message: "Failed adding data, params should be number!" } }]);

    // validation rule distance bookingdate, min 2 hour
    for (let i = 0; i < schedule.length; i++) {
      const resultFetchDataBookingdate = parseInt(fetchData.bookingdate.slice(8, 10));
      const resultScheduleBookingdate = parseInt(schedule[i].bookingdate.slice(8, 10));
      const result = Math.floor(resultFetchDataBookingdate - resultScheduleBookingdate);
      if (result < 4) return res.status(400).json([{ false: { message: "Sorry bookingdate distance should 2 hour, check again schedules and choice other hour!" } }]);
    }
    schedule.push(fetchData);
    res.status(201).json(schedule);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get all
router.get("/", function (req, res) {
  try {
    res.status(200).json([{ true: { results: schedule } }]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
