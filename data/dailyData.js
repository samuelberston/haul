const HOSlog = require('./HOSlog');

function transform(data) {
  const res = {};

  function getHoursFromRange(range) {
    const start = new Date(range[0]);
    const end = new Date(range[1]);
    const startMin = start.getHours() * 60 + start.getMinutes();
    const endMin = end.getHours() * 60 + end.getMinutes();
    return Math.floor(((endMin - startMin) / 60) * 100) / 100;
  }

  function getPayFromHours(hours) {
    if (hours > 8) {
      return Math.floor((8 * 22) + (hours - 8) * 33 * 100) / 100;
    }
    return Math.floor(hours * 22 * 100) / 100;
  }

  data.forEach((day) => {
    const { startTime, endTime } = day;
    const date = `${new Date(startTime).getMonth() + 1}/${new Date(startTime).getDate()}/${new Date(startTime).getFullYear()}`;
    const range = [startTime, endTime];
    const hours = getHoursFromRange(range);
    const pay = getPayFromHours(hours);
    res[date] = {
      range: [
        startTime,
        endTime,
      ],
      hours,
      pay,
      date,
    };
  });

  return res;
}

// console.log(transform(HOSlog));

module.exports = transform(HOSlog);
