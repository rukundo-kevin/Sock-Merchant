function pairOfSocks(arr) {
	let num = 0;
	arr.forEach(sock => {
		let sockArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == sock) {
				sockArr.push(arr[i]);
				delete arr[i];
			}
		}
		if (sockArr.length > 0 && sockArr.length % 2 == 0) {
			num += parseInt(sockArr.length / 2);
		} else if (sockArr.length > 0 && sockArr.length % 2 != 0) {
			num += parseInt((sockArr.length - 1) / 2);
		}
	});
	return num;
}

const s = pairOfSocks([2, 2, 4, 2, 2, 3, 3, 3, 44, 6, 6, 4, 54, 4]);
console.log(s);
