const dailyData = require('./dailyData');

const complianceData = {};

Object.keys(dailyData).forEach((day) => {
  function complianceCheck(date) {
    let i = Object.keys(dailyData).indexOf(date);
    let { hours } = dailyData[date];
    if (i < 6) {
      while (i >= 0) {
        hours += dailyData[Object.keys(dailyData)[i]].hours;
        i -= 1;
      }
    } else {
      for (let j = 1; j < 7; j += 1) {
        hours += dailyData[Object.keys(dailyData)[i - j]].hours;
      }
    }
    return Math.floor(hours * 100) / 100;
  }
  complianceData[day] = complianceCheck(day);
});

module.exports = complianceData;
