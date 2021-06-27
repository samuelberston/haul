import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day/Day.jsx';

import css from './Schedule.module.css';

const Schedule = ({ weekData }) => (
  <div id="schedule" className={css.ranges}>
    {weekData.map((day) => (
      <Day key={day.range[0]} day={day} />
    ))}
  </div>
);

Schedule.propTypes = {
  weekData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Schedule;
