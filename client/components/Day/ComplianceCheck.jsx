import React from 'react';
import PropTypes from 'prop-types';
import css from './Day.module.css';

const ComplianceCheck = ({ hours }) => {
  const [display, setDisplay] = React.useState(false);
  return (
    <div id="complianceCheck" className={css.complianceCheck}>
      Compliance:
      {'  '}
      {hours >= 56
        ? (
          <i data-testid="icon" className={`fa fa-exclamation-triangle ${css.red}`} onMouseEnter={() => { setDisplay(true); }} onMouseLeave={() => { setDisplay(false); }} />
        ) : (
          <i data-testid="icon" className={`fa fa-check-square ${css.green}`} onMouseEnter={() => { setDisplay(true); }} onMouseLeave={() => { setDisplay(false); }} />
        )}
      {display
        ? (
          <div id={css.modal} data-testid="modal">
            {`${hours} hrs`}
          </div>
        ) : ''}
    </div>
  );
};

ComplianceCheck.propTypes = {
  hours: PropTypes.number.isRequired,
};

export default ComplianceCheck;
