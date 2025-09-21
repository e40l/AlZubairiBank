const express = require('express');
const router = express.Router();

// Mock: المحافظ العشر
const providers = [
  {code:"JIB", name:"جيب"},
  {code:"ONECASH", name:"ون كاش"},
  {code:"JAWALI", name:"جوالي"},
  {code:"FLUSAK", name:"فلوسك"},
  {code:"CASH", name:"كاش"},
  {code:"AMFLUS", name:"ام فلوس"},
  {code:"BYS", name:"بيس"},
  {code:"SHAMEL", name:"شامل موني"},
  {code:"YMWALLET", name:"يمن والت"},
  {code:"MAHFZTI", name:"محفظتي"}
];

// استرجاع قائمة المحافظ
router.get('/', (req,res)=>{
  res.json(providers);
});

// ربط محفظة (محاكاة)
router.post('/link', (req,res)=>{
  const {provider, phone} = req.body;
  res.json({ok:true, message:`تم ارسال رمز التحقق إلى ${phone} عبر ${provider}`});
});

// تأكيد ربط (محاكاة)
router.post('/confirm', (req,res)=>{
  const {provider, phone, otp} = req.body;
  res.json({ok:true, message:`تم ربط المحفظة ${provider} بالرقم ${phone}`});
});

module.exports = router;
