function roundToQuarter(num) {
  return parseFloat((Math.round(num * 4) / 4).toFixed(2));
}

function parseStarRating(ratingsObj) {
  let sum = 0;
  let count = 0;
  const keyArr = Object.keys(ratingsObj);
  keyArr.forEach((key) => {
    sum += key * ratingsObj[key];
    count += parseInt(ratingsObj[key], 10);
  });
  return roundToQuarter(sum / count);
}

export default parseStarRating;
