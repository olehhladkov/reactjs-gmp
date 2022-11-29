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
        {selectedOption.name}

        <ArrowIcon />
      </button>

      <ul className={`options ${isOptionsOpen ? 'show' : ''}`}>
        {optionsList.map(({ name, value }) => (
          <li
            key={value}
            className={`option ${
              value === selectedOption.value ? 'disabled' : ''
            }`}
            onClick={() => {
              onChange({ name, value });
              setIsOptionsOpen(false);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

CustomSelect.propTypes = {
  optionsList: PropTypes.array.isRequired,
  selectedOption: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
