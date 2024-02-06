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

/*
//Altenative Implementierung
const extractDates = (customer: any): Dates[] | string[] => {
  const result: Dates[] = [];
  const listOfPeriods = customer?.ListOfPeriods;

  if (!listOfPeriods || listOfPeriods.toUpperCase() === "NULL") {
    return result;
  }

  const periodsArray = listOfPeriods.split("|");

  for (const period of periodsArray) {
    const dates = period.split("-").map(date => date.trim());
    
    if (dates.length === 2) {
      const startDate = dates[0];
      const endDate = dates[1];

      if (/^\d{2}\.\d{2}\.\d{4}$/.test(startDate) && /^\d{2}\.\d{2}\.\d{4}$/.test(endDate)) {
        result.push({ startDate, endDate });
      } else {
        return [`Invalid date format in ListOfPeriods: ${period}`];
      }
    } else {
      return [`Invalid date range in ListOfPeriods: ${period}`];
    }
  }

  return result;
};
*/


// Beispielaufrufe
console.log(toExtractDates({ ListOfPeriods: '15.03.2017 - 01.05.2017' }));
console.log(
  toExtractDates({
    ListOfPeriods: '12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008',
  })
);
console.log(toExtractDates({ ListOfPeriods: 'NULL' }));
console.log(toExtractDates({}));
