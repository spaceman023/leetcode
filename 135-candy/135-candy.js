
var candy = function(ratings) {
  let left = new Array(ratings.length).fill(1);
  let right = new Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    let r = ratings[i];
    if (r > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    let r = ratings[i];
    if (r > ratings[i + 1]) {
      right[i] = right[i + 1] + 1
    }
  }
  return left.map((v, i) => Math.max(v, right[i])).reduce((a, b) => a + b)
};
