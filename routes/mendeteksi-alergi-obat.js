const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json("mendeteksi alergi obat");
});

module.exports = router;
