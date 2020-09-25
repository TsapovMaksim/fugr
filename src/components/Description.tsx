import React, { ReactElement } from 'react';
import { UserI } from '../types/users';

interface Props {
  activeUser: UserI;
}

function Description({ activeUser }: Props): ReactElement {
  return (
    <div className="description">
      <p className="description__user-name">
        Выбран пользователь <b>{activeUser.firstName}</b>
      </p>
      <h2>Описание:</h2>
      <p className="description__user-descr">{activeUser.description}</p>
      {activeUser.address && (
        <div className="discription__address">
          <p className="description__street-address">
            Адрес проживания: <b>{activeUser.address.streetAddress}</b>
          </p>
          <p className="description__city">
            Город: <b>{activeUser.address.city}</b>
          </p>
          <p className="description__state">
            Провинция/штат: <b>{activeUser.address.state}</b>
          </p>
          <p className="description__zip">
            Индекс: <b>{activeUser.address.zip}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Description;
