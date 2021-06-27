const dailyData = require('./dailyData');

const daysInMonth = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

function findWeek(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  const DOM = date.getDate();
  const DOW = date.getDay();
  if (DOW === 0) {
    return `${month + 1}/${DOM}/${year}`;
  }
  if (DOM - DOW > 0) {
    return `${month + 1}/${DOM - DOW}/${year}`;
  }
  if (month === 0) {
    month = 11;
    year -= 1;
  } else {
    month -= 1;
  }
  return findWeek(new Date(year, month, daysInMonth[month] - (DOW - DOM)));
}

function transform(dailyData) {
  const res = {};
  Object.keys(dailyData).forEach((day) => {
    const week = findWeek(new Date(day));
    if (!res[week]) {
      res[week] = {
        days: [dailyData[day]],
      };
    } else {
      res[week].days.push(dailyData[day]);
    }
  });
  return res;
}

function weeklyMeta(weeklyData) {
  const res = {};
  Object.keys(weeklyData).forEach((week) => {
    res[week] = {};
    res[week].days = weeklyData[week].days;
    let totalHours = 0;
    let totalPay = 0;
    weeklyData[week].days.forEach((day) => {
      totalHours += day.hours;
      totalPay += day.pay;
    });
    res[week].totalHours = Math.floor(totalHours * 100) / 100;
    res[week].totalPay = Math.floor(totalPay * 100) / 100;
  });
  return res;
}

// console.log(weeklyMeta(transform(dailyData)));

module.exports = weeklyMeta(transform(dailyData));
