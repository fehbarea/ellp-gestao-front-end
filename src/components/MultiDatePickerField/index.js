import React, { useEffect, useState } from 'react';
import DatePicker from "react-multi-date-picker";
import styles from './MultiDatePickerField.module.css';

function MultiDatePickerField({ name, register, errors, setValue, validationRules}) {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleChange = (dates) => {
    setSelectedDates(dates);
    const formattedDates = dates.map(date => date.format("DD/MM/YYYY"));
    setValue(name, formattedDates, { shouldValidate: true });
  };

  useEffect(() => {
    register(name, validationRules);
  }, [register, name, validationRules]);


  return (
    <div className={styles.MultiDatePicker}>
      <label>Selecione as datas:</label>
      <DatePicker
        multiple
        value={selectedDates}
        onChange={handleChange}
        format="DD/MM/YYYY"
        className={styles.datePickerField}
        editable={false} 
      />
      {errors[name] && <p className={styles.errorMessage}>{errors[name].message}</p>}
    </div>
  );
}

export default MultiDatePickerField;