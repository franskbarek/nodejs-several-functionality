const router = require("express").Router();

const _ptkp = [
  {
    status: "Belum kawin",
    simbol: "TK",
    tarif: 25, // juta
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
    rentangPenghasilanNetto: [30, 40, 50], // juta
    tarifPajak: 5 / 100,
  },
  {
    rentangPenghasilanNetto: [100, 150, 250],
    tarifPajak: 10 / 100,
  },
  {
    rentangPenghasilanNetto: [300, 400, 500],
    tarifPajak: 15 / 100,
  },
];

const _rumusPajakPenghasilan = (layer) => {
  const layer50 = layer * (5 / 100);
  const layerGthen50 = (15 / 100) * (285 - layer);
  if (layer > 0 && layer <= 49) {
    return layer50;
  } else if (layer >= 50 && layer <= 250) {
    return layer50 + layerGthen50;
  } else {
    return;
  }
};

//create
router.post("/", (req, res) => {
  try {
    const nettoPerbulanFromBody = req.body.komponengaji[0].nettoPerbulan;
    const simbolFromBody = req.body.komponengaji[1].simbol;
    const statusFromBody = req.body.komponengaji[2].status;
    const resultPajak = _rumusPajakPenghasilan(nettoPerbulanFromBody);

    for (let i = 0; i < _tarifPajakTahunan.length; i++) {
      for (let j = 0; j < _tarifPajakTahunan.length; j++) {
        for (let k = 0; k < _ptkp.length; k++) {
          if (nettoPerbulanFromBody == _tarifPajakTahunan[i].rentangPenghasilanNetto[[j]] && simbolFromBody == _ptkp[k].simbol && statusFromBody == _ptkp[k].status) {
            const gajiPerbulan = _tarifPajakTahunan[i].rentangPenghasilanNetto[[j]];
            const gajiPertahun = gajiPerbulan * 12;
            const pajakPertahun = gajiPertahun - _ptkp[k].tarif;
            const pajakPertahunFix = resultPajak;
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
