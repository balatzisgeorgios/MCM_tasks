type PositiveTemporal = {
  days?: string;
  weeks?: string;
  months?: string;
  years?: string;
  hours?: string;
  minutes?: string;
};

function toPositiveTemporal(amount: string, unit: string, nonNegative: boolean | 'nonNegative' = false): PositiveTemporal | string {
  const normalizedUnit = unit.toLowerCase().trim();

  if (parseInt(amount) ===  0 && !nonNegative) {
    return `amount zero in toPositiveTemporal is invalid, unit: ${normalizedUnit}`;
  }

  let result: PositiveTemporal = {};
  switch (normalizedUnit) {
    case 'm':
    case 'month':
      result = { months: amount };
      break;
    case 'd':
    case 'day':
      result = { days: amount };
      break;
    case 'w':
    case 'week':
      result = { weeks: amount };
      break;
    case 'y':
    case 'year':
      result = { years: amount };
      break;
    default:
      throw new Error(`Invalid unit provided: ${unit}`);
  }

  return result;
}

/*
//alternative implementation

const toPositiveTemporal = (amount, unit, nonNegative) => {
  const numericAmount = parseInt(amount);

  if (numericAmount === 0 && nonNegative) {
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  }

  const result = {};

  switch (unit.toLowerCase()) {
    case "m":
      result.months = amount;
      break;
    case "y":
    case "year":
      result.years = amount;
      break;
    case "day":
      result.days = amount;
      break;
    default:
      // Assuming other units are treated as months
      result.months = amount;
  }

  return result;
};

*/

// Example usage:
console.log(toPositiveTemporal('6', 'M')); // { months: '6' }
console.log(toPositiveTemporal('1', 'Month', 'nonNegative')); // { months: '1' }
console.log(toPositiveTemporal('1', 'y')); // { years: '1' }
console.log(toPositiveTemporal('0', 'M')); // 'amount zero in toPositiveTemporal is invalid, unit: M'
console.log(toPositiveTemporal('0', 'Year', 'nonNegative')); // { years: '0' }
console.log(toPositiveTemporal('31', 'day')); // { days: '31' }
console.log(toPositiveTemporal('2', 'm', false)); // { months: '2' }
