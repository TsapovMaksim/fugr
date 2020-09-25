import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  className?: string;
  onClick: () => void;
}

function TableRow({
  email,
  firstName,
  id,
  lastName,
  phone,
  className,
  onClick,
}: Props): ReactElement {
  return (
    <tr onClick={() => onClick()} className={classNames('users-table__row', className)}>
      <td className="users-table__td">{id}</td>
      <td className="users-table__td">{firstName}</td>
      <td className="users-table__td">{lastName}</td>
      <td className="users-table__td">{email}</td>
      <td className="users-table__td">{phone}</td>
    </tr>
  );
}

export default TableRow;
