const router = require("express").Router();

const _ptkp = [
  {
    status: "Belum kawin",
    simbol: "TK",
    tarif: 25,
  },
  {
    status: "Sudah kawin dan belum punya anak",
    simbol: "K0",
    tarif: 50,
  },
  {
    status: "Sudah kawin dan sudah punya anak",
    simbol: "K1",
    tarif: 75,
  },
];

const _tarifPajakTahunan = [
  {
    rentangPenghasilanNetto: [10, 30, 50], // ? mungkin tepat jika meletakan sequence number pada obj arr
    tarifPajak: 5 / 100,
  },
  {
    rentangPenghasilanNetto: [70, 200, 250],
    tarifPajak: 10 / 100,
  },
  {
    rentangPenghasilanNetto: [300, 400, 500],
    tarifPajak: 15 / 100,
  },
];

const _rumusPajakPenghasilan = [
  {
    layer: 50,
    rumus: (5 / 100) * 50,
    tarifPajak: 2.5,
  },
  {
    layer: 50 - 250,
    rumus: (285 - 50) * (15 / 100),
    tarifPajak: 35.25,
  },
];

//create
router.post("/", async (req, res) => {
  try {
    const nettoPerbulanFromBody = await req.body.komponengaji[0].nettoPerbulan;
    const simbolFromBody = await req.body.komponengaji[1].simbol;
    const statusFromBody = await req.body.komponengaji[2].status;
    for (let i = 0; i < _tarifPajakTahunan.length; i++) {
      for (let j = 0; j < _tarifPajakTahunan.length; j++) {
        for (let k = 0; k < _ptkp.length; k++) {
          if (nettoPerbulanFromBody == _tarifPajakTahunan[i].rentangPenghasilanNetto[[j]] && simbolFromBody == _ptkp[k].simbol && statusFromBody == _ptkp[k].status) {
            const gajiPerbulan = _tarifPajakTahunan[i].rentangPenghasilanNetto[[j]];
            const gajiPertahun = gajiPerbulan * 12;
            const pajakPertahun = gajiPertahun - _ptkp[k].tarif;
            const pajakPertahunFix = 2.5 + 35.25; // masih hardcode, compare nilainya masih dipikirkan.
            const pajakPerbulan = pajakPertahunFix / 12;
            return res
              .status(201)
              .json([{ "Total Gaji Perbulan": gajiPerbulan, "Total Gaji Pertahun": gajiPertahun, "Total Pajak Pertahun belum fix": pajakPertahun, "Total Pajak Pertahun fix": pajakPertahunFix, "Total Pajak Bulan ini": pajakPerbulan }]);
          }
        }
      }
    }
    res.status(400).json("Error occurred!");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
