import { useState } from 'react';
import './CustomSelect.scss';

export default function CustomSelect(params) {
  const { optionsList, selectedOption, onChange } = params;
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

        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z"
            fill="#F65261"
          />
        </svg>
      </button>

      <ul className={`options ${isOptionsOpen ? 'show' : ''}`}>
        {optionsList.map((option, index) => (
          <li
            key={option}
            className={`option ${option === selectedOption ? 'disabled' : ''}`}
            onClick={() => {
              onChange(index);
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
