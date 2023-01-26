const router = require("express").Router();

//create
router.post("/", (req, res) => {
  try {
    const employee = req.body.employee;
    const komponengaji = req.body.komponengaji;

    // Validasi input
    if (!employee.nationality || !employee.marital_status) {
      return res.status(400).json({
        message: "Nationality and marital status are required!",
      });
    }

    let PTKP;
    if (employee.nationality === "Indonesia") {
      if (employee.marital_status === "TK") {
        PTKP = 25000000;
      } else if (employee.marital_status === "K0") {
        PTKP = 50000000;
      } else if (employee.marital_status === "K1") {
        PTKP = 75000000;
      } else {
        return res.status(400).json({
          message: "Invalid marital status",
        });
      }
    } else if (employee.nationality === "Vietnam") {
      if (employee.marital_status === "TK") {
        PTKP = 15000000;
      } else if (employee.marital_status === "K0") {
        PTKP = 30000000;
      } else {
        return res.status(400).json({
          message: "Invalid marital status",
        });
      }
    } else {
      return res.status(400).json({
        message: "Invalid nationality",
      });
    }

    // Menghitung penghasilan bruto
    let penghasilan_bruto = 0;
    komponengaji.forEach((komponen) => {
      penghasilan_bruto += komponen.amount;
    });

    // Menghitung penghasilan netto:
    let penghasilan_netto;
    if (employee.nationality === "Indonesia") {
      penghasilan_netto = penghasilan_bruto * 12 - PTKP;
    } else {
      const asuransi_setahun = 1000000 * 12;
      penghasilan_netto = penghasilan_bruto * 12 - asuransi_setahun - PTKP;
    }

    // Menentukan tarif pajak
    let tarif_pajak;
    if (employee.nationality === "Indonesia") {
      if (penghasilan_netto <= 50000000) {
        tarif_pajak = 0.05;
      } else if (penghasilan_netto > 50000000 && penghasilan_netto <= 250000000) {
        tarif_pajak = 0.1;
      } else {
        tarif_pajak = 0.15;
      }
    } else if (employee.nationality === "Vietnam") {
      if (penghasilan_netto <= 50000000) {
        tarif_pajak = 0.025;
      } else {
        tarif_pajak = 0.075;
      }
    }

    // Menghitung gaji bersih dan pajak karyawan
    let pajak_bulanini;
    if (employee.nationality === "Indonesia") {
      const layer50 = 50000000 * 0.05;
      const layerGreaterThen50 = (penghasilan_netto - 50000000) * 0.15;
      const pajak_setahun = layer50 + layerGreaterThen50; // expect 37.75 juta
      const pajakbulanini_before = pajak_setahun / 12;
      const roundedNum = Math.round(pajakbulanini_before / 1000) * 1000;
      const formattedNum = roundedNum.toLocaleString("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      pajak_bulanini = formattedNum; // expect 3.146.000
    } else if (employee.nationality === "Vietnam") {
      const layer50 = 50000000 * 0.025;
      const layerGreaterThen50 = (penghasilan_netto - 50000000) * 0.075;
      const pajak_setahun = layer50 + layerGreaterThen50; // expect 21.35 juta
      const pajakbulanini_before = pajak_setahun / 12;
      const roundedNum = Math.round(pajakbulanini_before / 1000) * 1000;
      const formattedNum = roundedNum.toLocaleString("vi-VN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      pajak_bulanini = formattedNum; // expect 1.779.000
    }
    // Mengembalikan response pajak bulan ini
    res.status(201).json({ pajak_bulanini: pajak_bulanini });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
