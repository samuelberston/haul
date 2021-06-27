import React from 'react';
import PropTypes from 'prop-types';

import css from './Day.module.css';

const Totals = ({ hours, pay }) => {
  const [clicked, click] = React.useState(false);

  return (
    <div id={css.totals} className={css.totals}>
      <div className={css.label}>
        Totals
        <button type="button" data-testid="button" onClick={() => { click(!clicked); }}>
          {clicked
            ? (
              <i className="fa fa-chevron-up" />
            ) : (
              <i className="fa fa-chevron-down" />
            )}
        </button>
      </div>
      {clicked
        ? (
          <div id={css.totalsInfo} data-testid="totalsInfo">
            <div id="dailyHours" className={css.dailyHours}>
              <div>
                Daily Hours:
              </div>
              <div className={css.value}>
                { hours }
              </div>
            </div>
            <div id="dailyPay" className={css.dailyPay}>
              <div>
                Daily Pay:
              </div>
              <div className={css.value}>
                $
                { pay }
              </div>
            </div>
          </div>
        ) : ''}
    </div>
  );
};

Totals.propTypes = {
  hours: PropTypes.number.isRequired,
  pay: PropTypes.number.isRequired,
};

export default Totals;
