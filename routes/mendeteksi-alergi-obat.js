const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    const { pasien, resep } = req.body;
    // membuat set dari alergi pasien
    const alergiSet = new Set(pasien.alergi);
    // fungsi validasi akan melakukan filter item resep
    const validResep = resep.filter((item) => {
      // ketika item yang memiliki kandungan yang ada dalam set alergi pasien, maka akan tampilkan
      return item.kandungan.some((kandungan) => alergiSet.has(kandungan));
    });
    res.status(201).json({
      resep: validResep.map((elem) => {
        return {
          obat: elem.obat,
        };
      }),
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
