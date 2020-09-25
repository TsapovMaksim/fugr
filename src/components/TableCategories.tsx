import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { setCategorySort, setSortBy } from '../redux/actions/filter';
import { RootState } from '../redux/reducers/rootReducer';
import { CategorySortTypes, SortByTypes } from '../types/filter';

const categories: CategorySortTypes[] = ['id', 'firstName', 'lastName', 'email', 'phone'];

function TableCategories(): ReactElement {
  const dispatch = useDispatch();
  const sortBy: SortByTypes = useSelector(({ filter }: RootState) => filter.sortBy);
  const [activeSortType, setActiveSortType] = React.useState(0);

  const onClickSortBy = (sortBy: SortByTypes) => {
    sortBy === 'inc' ? dispatch(setSortBy('dec')) : dispatch(setSortBy('inc'));
  };

  const onCategorySortClick = (categorySort: CategorySortTypes, index: number) => {
    setActiveSortType(index);
    dispatch(setCategorySort(categorySort));
  };
  return (
    <thead>
      <tr className="users-table__sort-row">
        {categories.map((el, index) => (
          <th
            className={classNames('users-table__td', { active: activeSortType === index })}
            onClick={() => onCategorySortClick(el, index)}
            key={index}>
            <span>{el}</span>
            <span onClick={() => onClickSortBy(sortBy)}>
              {activeSortType === index && sortBy === 'dec' ? 'По убыванию' : 'По возрастанию'}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableCategories;
