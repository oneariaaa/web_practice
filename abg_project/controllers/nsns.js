const db = require("../databse/db");
const query = require("../databse/query");
const util = require("util");

const q = util.promisify(db.query).bind(db);

const createData = async () => {
  const data = await q(query.query);
  return data;
};

module.exports.displayAll = async (req, res) => {
  const NSN = await createData();
  res.render("home", { NSN });
};

module.exports.getAll = async (req, res) => {
  const NSN = await createData();
  res.render("nsns/index", { NSN });
};

module.exports.showNSN = async (req, res) => {
  const n = req.params.id.split("-");
  const nsn = await q(
    "select * from `nsn` where FSC=? and COUNTRY_CODE = ? and NIIN = ?",
    [parseInt(n[0]), parseInt(n[1]), parseInt(n[2])]
  );
  res.render("nsns/show", { nsn });
};

module.exports.searchNSN = async (req, res) => {
  const input = req.body.term.split("-");
  console.log(input);
  const nsn = await q(
    "select * from `nsn` where FSC=? and COUNTRY_CODE = ? and NIIN = ?",
    [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])]
  );
  console.log(nsn);
  if (!nsn) {
    res.render("error");
  }
  res.render("nsns/show", { nsn });
};
