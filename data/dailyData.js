const HOSlog = require('./HOSlog');

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

function transform(data) {
  const res = {};
  data.forEach((day) => {
    const date = `${new Date(day.startTime).getMonth() + 1}/${new Date(day.startTime).getDate()}/${new Date(day.startTime).getFullYear()}`;
    const range = [day.startTime, day.endTime];
    const hours = getHoursFromRange(range);
    const pay = getPayFromHours(hours);
    res[date] = {
      range: [
        day.startTime,
        day.endTime,
      ],
      hours,
      pay,
    };
  });
  return res;
}

// console.log(transform(HOSlog));

module.exports = transform(HOSlog);
