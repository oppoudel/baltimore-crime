import { groupBy } from "lodash";

export const reduceDataByType = data => {
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
