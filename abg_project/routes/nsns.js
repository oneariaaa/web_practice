const express = require("express");
const router = express.Router();
const {
  getAll,
  displayAll,
  showNSN,
  searchNSN,
} = require("../controllers/nsns");

const catchAsync = require("../utils/catchAsync");

router.get("/", catchAsync(getAll));
router.get("/home", catchAsync(displayAll));
router.route("/nsn").get(catchAsync(getAll)).post(catchAsync(searchNSN));

router.get("/nsn/:id", catchAsync(showNSN));

module.exports = router;

/* (req, res, next) => {
  //to do: check the input format using Regular Expression
  const input = req.body.term;
  const s = input.replace("-", "");
  console.log(s);
  next();
},  */
