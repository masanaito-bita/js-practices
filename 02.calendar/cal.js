const argv = require("minimist")(process.argv.slice(2));
const date = new Date();
const year = typeof argv.y !== "undefined" ? argv.y : date.getFullYear();
const month = typeof argv.m !== "undefined" ? argv.m : date.getMonth() + 1;

function cal(year, month) {
  const first_date = new Date(year, month - 1, 1);
  const last_date = new Date(year, month, 0);
  const end_day_count = last_date.getDate();
  let week = first_date.getDay();

  console.log(`      ${month}月 ${year}`);
  console.log("日 月 火 水 木 金 土");

  let output = "";
  if (week != 0) {
    process.stdout.write(String(" ").repeat(week * 3));
  }

  for (let i = 1; i <= end_day_count; i++) {
    if (i < 10) {
      output += ` ${i} `;
    } else {
      output += `${i} `;
    }

    week += 1;
    if (week % 7 == 0) {
      output += "\n";
    }
  }

  console.log(output);
}

cal(year, month);
