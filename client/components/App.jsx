import React, { useState } from 'react';

import weeklyData from '../../data/weeklyData';

import Schedule from './Schedule.jsx';
import WeeklyTotals from './WeeklyTotals.jsx';

import css from './App.module.css';

const App = () => {
  const [week, setWeek] = useState('1/3/2021');

  function changeWeek(currentWeek, dir) {
    const i = Object.keys(weeklyData).indexOf(currentWeek);
    if (dir === 'right' && i !== Object.keys(weeklyData).length - 1) {
      return Object.keys(weeklyData)[i + 1];
    }
    if (dir === 'left' && i !== 0) {
      return Object.keys(weeklyData)[i - 1];
    }
    return currentWeek;
  }

  return (
    <div id="reactApp" className={css.reactApp}>
      <div id="navigation" className={css.nav}>
        <button id="left" className={css.left} type="button" onClick={() => { setWeek(changeWeek(week, 'left')); }}>
          {Object.keys(weeklyData).indexOf(week) > 0 && (<i className="fa fa-arrow-left" />)}
        </button>
        <div id="current" className={css.current} data-testid={week}>
          Week of:
          <div id={css.currentWeek}>
            <select id={css.select} onChange={(e) => { setWeek(e.target.value); }}>
              {Object.keys(weeklyData).map((w) => (
                <option key={w} value={w} selected={w === week}>{w}</option>
              ))}
            </select>
          </div>
        </div>
        <button id="right" className={css.right} type="button" onClick={() => { setWeek(changeWeek(week, 'right')); }}>
          {Object.keys(weeklyData).indexOf(week) < Object.keys(weeklyData).length - 1 && (<i className="fa fa-arrow-right" />)}
        </button>
      </div>
      <Schedule weekData={weeklyData[week].days} />
      <WeeklyTotals totalHours={weeklyData[week].totalHours} totalPay={weeklyData[week].totalPay} />
    </div>
  );
};

export default App;
