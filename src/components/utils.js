import { groupBy } from "lodash";
import { getMonth } from "date-fns";

export const groupDataByType = data => {
  const byType = groupBy(data, item => item.Descriptio);
  const topTenTypes = Object.keys(byType)
    .sort((a, b) => byType[b].length - byType[a].length)
    .slice(0, 10);
  const inVRI = f => f.VRI.length > 3;
  const outsideVRI = f => f.VRI.length < 3;
  const groupedData = topTenTypes.reduce((arr, item) => {
    arr.push({
      Types: item,
      Total: byType[item].length,
      inVRI: byType[item].filter(inVRI).length,
      outsideVRI: byType[item].filter(outsideVRI).length
    });
    return arr;
  }, []);
  return groupedData;
};
export const groupDataByDistrict = data => {
  const byDistrict = groupBy(data, item => item.District);
  const districts = Object.keys(byDistrict)
    .sort((a, b) => byDistrict[b].length - byDistrict[a].length)
    .slice(0, 9);
  const groupedData = districts.reduce((arr, item) => {
    arr.push({
      District: item,
      Total: byDistrict[item].length
    });
    return arr;
  }, []);
  return groupedData;
};
export const groupDataByMonth = data => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const byMonth = groupBy(data, item => monthNames[getMonth(item.CrimeDate)]);
  const groupedData = monthNames.reduce((arr, item) => {
    if (byMonth.hasOwnProperty(item)) {
      arr.push({
        Month: item,
        Total: byMonth[item].length
      });
    }
    return arr;
  }, []);
  return groupedData;
};
