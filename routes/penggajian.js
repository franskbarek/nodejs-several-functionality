const router = require("express").Router();

function ptkp(status) {
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

  for (let i = 0; i < _ptkp.length; i++) {
    const result = _ptkp[i];
    if (status === result.status) {
      return result.tarif;
    }
  }
}

function tarifPajakTahunan(gajiperbulan) {
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
  for (let i = 0; i < _tarifPajakTahunan.length; i++) {
    for (let j = 0; j < _tarifPajakTahunan.length; j++) {
      const result = _tarifPajakTahunan[i];
      const result2 = result.rentangPenghasilanNetto[[j]];
      console.log(result2);
      if (gajiperbulan === result2) {
        return result2;
      }
    }
  }
}

const rumusPajakPenghasilan = (gajiperbulan, status /* argument akan di validasi oleh function ptkp() dan tarifPajakTahunan()*/) => {
  const gajiBulan = tarifPajakTahunan(gajiperbulan);
  const tarifPtkp = ptkp(status);
  const layer = 50;
  const gajiTahun = gajiBulan * 12 - tarifPtkp;
  const tax50 = (5 / 100) * layer;
  const taxGthen50 = (15 / 100) * (gajiTahun - layer);
  const result = tax50 + taxGthen50;

  if (gajiBulan <= 250) {
    const details = {
      "Gaji perbulan": gajiBulan,
      "Pengahasilan netto pertahun": gajiTahun,
      "Total pajak pertahun": result,
      "Total pajak bulan ini": result / 12,
    };
    return details;
  } else {
    return "Error occurred!";
  }
};

//create
router.post("/", (req, res) => {
  try {
    const result = rumusPajakPenghasilan(req.body.komponengaji[0].nettoPerbulan, req.body.komponengaji[1].status);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
