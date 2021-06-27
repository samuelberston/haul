import React from 'react';
import PropTypes from 'prop-types';

import css from './Day.module.css';

const WorkHours = ({ start, end }) => {
  const [clicked, click] = React.useState(false);

  return (
    <div id="workHours" className={css.workHours}>
      <div className={css.label}>
        Hours
        <button type="button" onClick={() => { click(!clicked); }}>
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
          <div id={css.hoursInfo}>
            <div id="startTime" className={css.startTime}>
              <div>
                Start:
              </div>
              <div className={css.value}>
                {start.split('T')[1].split(':').slice(0, 2).join(':')}
              </div>
            </div>
            <div id="endTime" className={css.endTime}>
              <div>
                End:
              </div>
              <div className={css.value}>
                {end.split('T')[1].split(':').slice(0, 2).join(':')}
              </div>
            </div>
          </div>
        ) : ''}
    </div>
  );
};

WorkHours.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default WorkHours;
