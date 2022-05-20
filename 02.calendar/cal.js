const argv = require("minimist")(process.argv.slice(2));
const date = new Date();
const year = argv.y !== undefined ? argv.y : date.getFullYear();
const month = argv.m !== undefined ? argv.m : date.getMonth() + 1;

function cal(year, month) {
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);
  let week = firstDate.getDay();

  console.log(`      ${month}月 ${year}`);
  console.log("日 月 火 水 木 金 土");

  let output = "";
  output += String(" ").repeat(week * 3);

  const endDayCount = lastDate.getDate();
  for (let i = 1; i <= endDayCount; i++) {
    output += i.toString().padStart(2) + " ";
    week += 1;
    if (week % 7 == 0) {
      output += "\n";
    }
  }

  console.log(output + "\n");
}

cal(year, month);
