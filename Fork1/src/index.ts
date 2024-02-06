type Dates = {
  startDate: string;
  endDate: string;
};

const isValidDate = (dateString: string): boolean => {
  const dateRegex = /^\d{2}\.\d{2}.\d{4}$/;
  return dateRegex.test(dateString);
};

const extractDates = (customer: { ListOfPeriods?: string }): Array<Dates | string> => {
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
console.log(extractDates({ ListOfPeriods: '15.03.2017 - 01.05.2017' }));
console.log(
  extractDates({
    ListOfPeriods: '12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008',
  })
);
console.log(extractDates({ ListOfPeriods: 'NULL' }));
console.log(extractDates({}));


