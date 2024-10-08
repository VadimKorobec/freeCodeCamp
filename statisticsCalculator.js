const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]]);
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};

const getMode = (array) => {
  const counts = {};

  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });

  return counts;
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array
    .map((el) => Number(el))
    .filter((el) => !Number.isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);

  console.log(getMode(numbers));

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
