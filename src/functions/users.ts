import { CategorySortTypes, SortByTypes } from '../types/filter';
import { UserI } from '../types/users';

export const getUsersForCurrentPage = (users: UserI[], currentPage: number): UserI[] => {
  const usersPerPage = 50;
  if (users.length < usersPerPage) {
    return users;
  }
  let start = (currentPage - 1) * usersPerPage;
  let end = users.length - start >= usersPerPage ? currentPage * usersPerPage : users.length;
  let newUsers: UserI[] = [];
  for (let i = start; i < end; i++) {
    newUsers = [...newUsers, users[i]];
  }

  return newUsers;
};

export const filterUsers = (
  users: UserI[],
  categorySort: CategorySortTypes,
  sortBy: SortByTypes,
  searchByString: string,
): UserI[] => {
  let newUsers;
  if (searchByString) {
    newUsers = users.filter(
      ({ email, firstName, lastName, phone, id }) =>
        email.includes(searchByString) ||
        firstName.includes(searchByString) ||
        lastName.includes(searchByString) ||
        phone.includes(searchByString) ||
        `${id}`.includes(searchByString),
    );
  } else {
    newUsers = users.slice(0);
  }
  if (sortBy === 'inc') {
    newUsers.sort((a, b) => {
      if (a[categorySort] > b[categorySort]) {
        return 1;
      } else if (a[categorySort] < b[categorySort]) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    newUsers.sort((a, b) => {
      if (a[categorySort] < b[categorySort]) {
        return 1;
      } else if (a[categorySort] > b[categorySort]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  return newUsers;
};
