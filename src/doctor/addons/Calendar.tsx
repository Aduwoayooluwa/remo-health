import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input, Box } from '@chakra-ui/react';

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          inline
          onClickOutside={() => setIsOpen(false)}
        />
    </Box>
  );
};

export default CalendarComponent;