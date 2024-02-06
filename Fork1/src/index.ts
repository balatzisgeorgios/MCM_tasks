type Dates = {
  startDate: string;
  endDate: string;
};

const isValidDate = (dateString: string): boolean => {
  // This regex matches dates in the format DD.MM.YYYY or DD/MM/YYYY or DD-MM-YYYY
  // It also ensures that the day and month are within valid ranges and that the year starts with  19 or  20
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])([.-/])(0[1-9]|1[012])([.-/])(19|20)\d{2}$/;
  return dateRegex.test(dateString);
};


const toExtractDates = (customer: { ListOfPeriods?: string }): Array<Dates | string> => {
  if (!customer.ListOfPeriods) {
    return [];
  }

  const datePeriods = customer.ListOfPeriods.split('|');

  const result = datePeriods.map((datePeriod) => {
    const [startDate, endDate] = datePeriod.trim().split('-').map((date) => date.trim());

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      return 'string length is invalid';
    }

    return {
      startDate,
      endDate,
    };
  });

  return result;
};

// Beispielaufrufe
console.log(toExtractDates({ ListOfPeriods: '15.03.2017 - 01.05.2017' }));
console.log(
  toExtractDates({
    ListOfPeriods: '12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008',
  })
);
console.log(toExtractDates({ ListOfPeriods: 'NULL' }));
console.log(toExtractDates({}));
