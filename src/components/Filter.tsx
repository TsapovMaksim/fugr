import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchByString } from '../redux/actions/filter';
import { setCurrentPage } from '../redux/actions/users';

function Filter(): ReactElement {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = React.useState('');

  const onChangeFilterValue = (value: string) => {
    setFilterValue(value);
  };

  const onFindClick = (value: string) => {
    dispatch(setSearchByString(value));
    dispatch(setCurrentPage(1));
  };

  const onResetClick = () => {
    dispatch(setSearchByString(''));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="filter">
      <h2 className="filter__title">Поиск по строке</h2>
      <input
        type="text"
        onChange={(e) => onChangeFilterValue(e.target.value)}
        value={filterValue}
      />
      <button onClick={() => onFindClick(filterValue)} type="button">
        Найти
      </button>
      <button onClick={() => onResetClick()} type="button">
        Сбросить
      </button>
    </div>
  );
}

export default Filter;
