const router = require("express").Router();

const items = [
  {
    namaobat: "paracetamol",
    kandungan: "aspirin",
  },
  {
    namaobat: "proris",
    kandungan: "ibuprofin",
  },
  {
    namaobat: "betadin",
    kandungan: "alcohol",
  },
  {
    namaobat: "bodrex",
    kandungan: "ctm",
  },
];

router.get("/", async (req, res) => {
  const value = req.body.resep[0].obat.toLowerCase();
  let lo = 0;
  let hi = items.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (items[mid].namaobat == value) {
      return res.status(200).json({ namapasien: req.body.pasien.nama, namaobat: items[mid].namaobat, kandunganobat: items[mid].kandungan });
    } else if (items[mid] > value) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return res.status(500).json(-1);
});

module.exports = router;
