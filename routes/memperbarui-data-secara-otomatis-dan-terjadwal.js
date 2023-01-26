const router = require("express").Router();

router.get("/:dateofbirth", (req, res) => {
  const dateOfBirth = new Date(req.params.dateofbirth.split("-").reverse().join("-"));
  const currentDate = new Date(req.body.currentDate);

  const ageInMilliseconds = currentDate - dateOfBirth;

  const year = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  const month = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
  const day = Math.floor(((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24) + 1);

  res.status(200).json(`${year}/${month}/${day}`);
});

module.exports = router;

// const moment = require("moment");
//   const dateOfBirth = moment(req.params.dateofbirth, "DD-MM-YYYY");
//   const currentDate = moment("03-10-2022", "DD-MM-YYYY");

//   const ageInMilliseconds = currentDate.diff(dateOfBirth);
//   const age = moment.duration(ageInMilliseconds);

//   res.json({
//     umur: {
//       tahun: age.years(),
//       bulan: age.months(),
//       hari: age.days(),
//     },
//   });
// });
