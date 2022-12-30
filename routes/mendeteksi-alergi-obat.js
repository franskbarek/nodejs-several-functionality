const router = require("express").Router();

router.get("/", (req, res) => {
  const pasien = req.body.pasien;
  const obat = req.body.resep[0].obat.toLowerCase();
  const obatList = ["proris", "aspirin"];
  let lo = 0;
  let hi = obatList.length - 1;
  console.log(hi);
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (obatList[mid] == obat) {
      return res.status(200).json(mid);
    } else if (obatList[mid] > obat) {
      res.status(200).json((hi = mid - 1));
    } else {
      res.status(200).json((lo = mid + 1));
    }
  }
  return res.status(200).json(lo);
});

module.exports = router;
