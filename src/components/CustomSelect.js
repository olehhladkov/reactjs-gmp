import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../images/icons/arrow.svg';
import '../styles/CustomSelect.scss';

function CustomSelect({ optionsList, selectedOption, onChange }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className="custom-select">
      <button
        type="button"
        className={`toggle ${isOptionsOpen ? 'expanded' : ''}`}
        onClick={toggleOptions}
      >
        {selectedOption}

        <ArrowIcon />
      </button>

      <ul className={`options ${isOptionsOpen ? 'show' : ''}`}>
        {optionsList.map(option => (
          <li
            key={option}
            className={`option ${option === selectedOption ? 'disabled' : ''}`}
            onClick={() => {
              onChange(option);
              setIsOptionsOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

CustomSelect.propTypes = {
  optionsList: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
