const router = require("express").Router();

router.post("/:dataofbirth", (req, res) => {
  const birth = req.params.dataofbirth;
  const getBirthDay = parseInt(birth.split("").splice(0, 2).join(""));
  const getBirthMonth = parseInt(birth.split("").splice(3, 4).join(""));
  const getBirthYear = parseInt(birth.split("").splice(6, 9).join(""));

  const newdate = new Date();
  const newdateDay = newdate.getDate();
  const newdateMonth = newdate.getMonth() + 1;
  const newdateFullYear = newdate.getFullYear();

  const calculateAgeYear = newdateFullYear - getBirthYear;
  const calculateAgeMonth = newdateMonth + getBirthMonth;
  const calculateAgeDay = newdateDay + getBirthDay;
  const result = calculateAgeYear + "/" + calculateAgeMonth + "/" + calculateAgeDay;

  res.status(200).json(result);
});

module.exports = router;
