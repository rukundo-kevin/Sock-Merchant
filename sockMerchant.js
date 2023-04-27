function pairOfSocks(arr) {
	const colors = new Set();
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    if (colors.has(ar[i])) {
      pairs++;
      colors.delete(ar[i]);
    } else {
      colors.add(ar[i]);
    }
  }
  return pairs;
}
