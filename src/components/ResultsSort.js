import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CustomSelect from './CustomSelect';
import { getMoviesThunk, setSearchFields } from '../app/appSlice';
import '../styles/ResultsSort.scss';

export default function ResultsSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOptionList = useSelector((state) => state.app.sortOptionList);
  const sortOptionSelected = useSelector(
    (state) => state.app.searchFields.sortBy
  );

  const selectedOption = sortOptionList.find(
    (option) => option.value === sortOptionSelected
  ) ?? { name: 'release date', value: 'release_date' };

  const dispatch = useDispatch();

  const applySort = async (sortOption) => {
    await dispatch(setSearchFields({ sortBy: sortOption.value }));
    await dispatch(getMoviesThunk());

    searchParams.set('sortBy', sortOption.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="results-sort">
      <span className="results-sort__label">sort by</span>

      <CustomSelect
        optionsList={sortOptionList}
        selectedOption={selectedOption}
        selectOption={(option) => applySort(option)}
      />
    </div>
  );
}
