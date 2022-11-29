import { useSelector, useDispatch } from 'react-redux';
import CustomSelect from './CustomSelect';
import { getMoviesThunk, setSortBy } from '../app/appSlice';
import '../styles/ResultsSort.scss';

export default function ResultsSort() {
  const sortByList = useSelector(state => state.app.sortByList);
  const filterBy = useSelector(state => state.app.filterBy);
  const sortBy = useSelector(state => state.app.sortBy);

  const dispatch = useDispatch();

  const applySort = sortBy => {
    dispatch(setSortBy(sortBy));
    dispatch(
      getMoviesThunk(
        `?filter=${filterBy}&sortBy=${sortBy.value}&sortOrder=desc`
      )
    );
  };

  return (
    <div className="results-sort">
      <span className="results-sort__label">sort by</span>

      <CustomSelect
        optionsList={sortByList}
        selectedOption={sortBy}
        onChange={option => applySort(option)}
      />
    </div>
  );
}
