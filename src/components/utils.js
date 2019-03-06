import { groupBy } from 'lodash';

export const groupDataByType = data => {
  const byType = groupBy(data, item => item.Descriptio);
  const topTenTypes = Object.keys(byType)
    .sort((a, b) => byType[b].length - byType[a].length)
    .slice(0, 10);
  const inVRI = f => f.VRI.length > 3;
  const outsideVRI = f => f.VRI.length < 3;
  const groupedData = topTenTypes.map(item => ({
    Types: item,
    Total: byType[item].length,
    inVRI: byType[item].filter(inVRI).length,
    outsideVRI: byType[item].filter(outsideVRI).length,
  }));
  return groupedData;
};
export const groupDataByDistrict = data => {
  const byDistrict = groupBy(data, item => item.District);
  const districts = Object.keys(byDistrict)
    .sort((a, b) => byDistrict[b].length - byDistrict[a].length)
    .slice(0, 9);
  const groupedData = districts.map(item => ({
    District: item,
    Total: byDistrict[item].length,
  }));
  return groupedData;
};
export const groupDataByMonth = data => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const byMonth = groupBy(data, item => item.Month);
  const groupedData = monthNames.map(item => {
    if (byMonth.hasOwnProperty(item)) {
      return {
        Month: item,
        Total: byMonth[item].length,
      };
    }
    return null;
  });
  return groupedData;
};
export const groupDataByDay = data => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const byDay = groupBy(data, item => item.Day);
  const groupedData = days.reduce((arr, item) => {
    if (byDay.hasOwnProperty(item)) {
      arr.push({
        Day: item,
        Total: byDay[item].length,
      });
    }
    return arr;
  }, []);
  return groupedData;
};
export const groupDataByCrimeHour = data => {
  const hours = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const hourFormatter = h =>
    h % 24 >= 12 ? (h % 12 || 12) + 'PM' : (h % 12 || 12) + 'AM';
  const byCrimeHour = groupBy(data, item => item.CrimeHour);
  const groupedData = hours.reduce((arr, item) => {
    if (byCrimeHour.hasOwnProperty(item)) {
      arr.push({
        Hour: hourFormatter(item),
        Total: byCrimeHour[item].length,
      });
    }
    return arr;
  }, []);
  return groupedData;
};
