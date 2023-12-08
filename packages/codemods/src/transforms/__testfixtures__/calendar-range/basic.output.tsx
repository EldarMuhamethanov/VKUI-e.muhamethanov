import { CalendarRange } from '@vkontakte/vkui';
import React from 'react';

const App = ({ value, setValue, ...rest }) => {
  return (
    <React.Fragment>
      <CalendarRange
        value={value}
        onChange={setValue}
        {...rest}
        prevMonthLabel="prevMonthLabel"
        nextMonthLabel="nextMonthLabel"
        changeDayLabel="changeDayLabel"
        changeMonthLabel="changeMonthLabel"
        changeYearLabel="changeYearLabel"
      />
    </React.Fragment>
  );
};