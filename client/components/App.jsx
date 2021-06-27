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
          <i className="fa fa-arrow-left" />
        </button>
        <div id="current" className={css.current} data-testid={week}>
          Driver&apos;s Schedule: Week of
          {' '}
          {week}
        </div>
        <button id="right" className={css.right} type="button" onClick={() => { setWeek(changeWeek(week, 'right')); }}>
          <i className="fa fa-arrow-right" />
        </button>
      </div>
      <Schedule weekData={weeklyData[week].days} />
      <WeeklyTotals totalHours={weeklyData[week].totalHours} totalPay={weeklyData[week].totalPay} />
    </div>
  );
};

export default App;
