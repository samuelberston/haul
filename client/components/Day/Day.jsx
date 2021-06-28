import React from 'react';
import PropTypes from 'prop-types';

import WorkHours from './WorkHours.jsx';
import Totals from './Totals.jsx';
import ComplianceCheck from './ComplianceCheck.jsx';

import complianceData from '../../../data/complianceData';

import css from './Day.module.css';

function getDOW(range) {
  const dict = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  return dict[new Date(range[0]).getDay()];
}

const Day = ({ day }) => {
  const { date, hours, pay, range } = day;
  return (
    <div key={getDOW(day)} id="day" className={css.day}>
      <div id="DOW" className={css.dow}>
        {getDOW(range)}
          &nbsp;
        {date.split('/').slice(0, 2).join('/')}
      </div>
      <div id="dayInfo" className={css.dayInfo}>
        <WorkHours start={range[0]} end={range[1]} />
        <Totals hours={hours} pay={pay} />
        <ComplianceCheck hours={complianceData[date]} />
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Day;
