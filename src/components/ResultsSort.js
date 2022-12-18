import { useSelector, useDispatch } from 'react-redux';
import CustomSelect from './CustomSelect';
import { getMoviesThunk, setSortOption } from '../app/appSlice';
import '../styles/ResultsSort.scss';

export default function ResultsSort() {
  const sortOptionList = useSelector(state => state.app.sortOptionList);
  const filterOptionSelected = useSelector(state => state.app.filterOptionSelected);
  const sortOptionSelected = useSelector(state => state.app.sortOptionSelected);

  const dispatch = useDispatch();

  const applySort = sortOption => {
    dispatch(setSortOption(sortOption));
    dispatch(
      getMoviesThunk(
        `?filter=${filterOptionSelected}&sortBy=${sortOption.value}&sortOrder=desc`
      )
    );
  };

  return (
    <div className="results-sort">
      <span className="results-sort__label">sort by</span>

      <CustomSelect
        optionsList={sortOptionList}
        selectedOption={sortOptionSelected}
        selectOption={option => applySort(option)}
      />
    </div>
  );
}
