import React from 'react';
import PropTypes from 'prop-types';

import css from './WeeklyTotals.module.css';

const WeeklyTotals = ({ totalHours, totalPay }) => (
  <div id="weeklyTotals" className={css.weekly}>
    <div className={css.weeklyHours}>
      Weekly Hours:
      {'  '}
      { totalHours }
    </div>
    <div className={css.weeklyPay}>
      Weekly Pay:  $
      { totalPay}
    </div>
  </div>
);

WeeklyTotals.propTypes = {
  totalHours: PropTypes.number.isRequired,
  totalPay: PropTypes.number.isRequired,
};

export default WeeklyTotals;
