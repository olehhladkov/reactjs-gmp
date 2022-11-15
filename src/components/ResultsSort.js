import { useState } from 'react';
import CustomSelect from './CustomSelect';
import './ResultsSort.scss';

const optionsList = ['release date', 'title', 'rating'];

export default function ResultsSort() {
  const [selectedOption, setSelectedOption] = useState(optionsList[0]);

  return (
    <div className="results-sort">
      <span className="results-sort__label">sort by</span>

      <CustomSelect
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={option => setSelectedOption(option)}
      />
    </div>
  );
}
