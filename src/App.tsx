import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { fetchUsers, setActiveUser } from './redux/actions/users';
import { RootState } from './redux/reducers/rootReducer';
import {
  AddUser,
  Description,
  Filter,
  Pagination,
  Preloader,
  TableCategories,
  TableRow,
} from './components';
import { filterUsers, getUsersForCurrentPage } from './functions/users';
import { UserI } from './types/users';
import { CategorySortTypes, SortByTypes } from './types/filter';

import './App.scss';

const manyUsersUrl =
  'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const fewUsersUrl =
  'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

function App() {
  const dispatch = useDispatch();
  const users: UserI[] = useSelector(({ users }: RootState) => users.items);
  const isUsersLoaded: boolean = useSelector(({ users }: RootState) => users.isLoaded);
  const currentPage: number = useSelector(({ users }: RootState) => users.currentPage);
  const activeUser: UserI = useSelector(({ users }: RootStateOrAny) => users.activeUser);
  const [selectedUsersUrl, setSelectedUsersUrl] = React.useState<string | null>(null);

  const categorySort: CategorySortTypes = useSelector(
    ({ filter }: RootState) => filter.categorySort,
  );
  const searchByString = useSelector(({ filter }: RootState) => filter.searchByString);
  const sortBy: SortByTypes = useSelector(({ filter }: RootState) => filter.sortBy);

  const displayedUsers = filterUsers(users, categorySort, sortBy, searchByString);

  const onUserClick = (data: UserI) => {
    dispatch(setActiveUser(data));
  };

  const onManyUsersClick = () => {
    setSelectedUsersUrl(manyUsersUrl);
  };

  const onFewUsersClick = () => {
    setSelectedUsersUrl(fewUsersUrl);
  };

  React.useEffect(() => {
    dispatch(fetchUsers(selectedUsersUrl));
  }, [selectedUsersUrl]);
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="select-count">
            <h2 className="select-count__title">Выберите количество пользователей</h2>
            <button onClick={() => onFewUsersClick()} type="button">
              Мало
            </button>
            <button onClick={() => onManyUsersClick()} type="button">
              Много
            </button>
          </div>
          {!!selectedUsersUrl &&
            (isUsersLoaded ? (
              <>
                <Filter />
                <AddUser dispatch={dispatch} title="Добавить пользователя" />
                <table className="users-table">
                  <TableCategories />
                  <tbody>
                    {getUsersForCurrentPage &&
                      getUsersForCurrentPage(displayedUsers, currentPage).map(
                        (
                          { id, lastName, firstName, email, phone, address, description },
                          index,
                        ) => (
                          <TableRow
                            onClick={() =>
                              onUserClick({
                                id,
                                lastName,
                                firstName,
                                email,
                                phone,
                                address,
                                description,
                              })
                            }
                            key={`${id}_${index}`}
                            id={id}
                            lastName={lastName}
                            email={email}
                            phone={phone}
                            firstName={firstName}
                          />
                        ),
                      )}
                  </tbody>
                </table>
                {Object.keys(activeUser).length !== 0 && <Description activeUser={activeUser} />}
                <Pagination itemsCount={displayedUsers.length} itemsPerPage={50} />
              </>
            ) : (
              <Preloader />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
