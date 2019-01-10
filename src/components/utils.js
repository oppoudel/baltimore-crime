import { groupBy } from "lodash";

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
