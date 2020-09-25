import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { setCurrentPage } from '../redux/actions/users';
import { RootState } from '../redux/reducers/rootReducer';

interface Props {
  itemsCount: number;
  itemsPerPage: number;
}

function Pagination({ itemsCount, itemsPerPage }: Props): ReactElement {
  const dispatch = useDispatch();
  const currentPage = useSelector(({ users }: RootState) => users.currentPage);

  const onPageClick = (value: number) => {
    dispatch(setCurrentPage(value));
  };

  const getPagesCount = (itemsCount: number, itemsPerPage: number): number[] => {
    let pagesArr = [];
    for (let i = 0; i < Math.ceil(itemsCount / itemsPerPage); i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  };
  return (
    <ul className="pagination">
      {getPagesCount(itemsCount, itemsPerPage).map((el, index) => (
        <li
          className={classNames('pagination__item', { active: currentPage === index + 1 })}
          onClick={() => onPageClick(index + 1)}
          key={index}>
          {el}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
