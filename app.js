function buildFun(n) {
	var res = [];

	for (var i = 0; i < n; i++) {
		(function (i) {
			res.push(function () {
				return i;
			});
		})(i);
	}
	return res;
}
