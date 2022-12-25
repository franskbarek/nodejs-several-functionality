const router = require("express").Router();

const PTKP = [
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

const TARIF_PAJAK_TAHUNAN = [
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

const RUMUS_PAJAK_PENGHASILAN = [
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
    for (let i = 0; i < TARIF_PAJAK_TAHUNAN.length; i++) {
      for (let j = 0; j < TARIF_PAJAK_TAHUNAN.length; j++) {
        for (let k = 0; k < PTKP.length; k++) {
          if (nettoPerbulanFromBody == TARIF_PAJAK_TAHUNAN[i].rentangPenghasilanNetto[[j]] && simbolFromBody == PTKP[k].simbol && statusFromBody == PTKP[k].status)
            return res.status(201).json(TARIF_PAJAK_TAHUNAN[i].rentangPenghasilanNetto[[j]] * 12 - PTKP[k].tarif);
        }
      }
    }
    res.status(400).json("Error occured!");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
