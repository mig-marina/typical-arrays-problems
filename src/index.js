
exports.min = function min (array) {
	if(array === undefined) {
		return 0;
		} else {
			let n = array.length;
			if(n == 0) {
				return 0;
			} else {
				let min=array[0];
				for(let i=1; i<n; i++) {
					if(array[i]<min) {min=array[i];}
				}
				return min;
			}
		}
}

exports.max = function max (array) {
  if(array === undefined) {
		return 0;
		} else {
			let n = array.length;
			if(n == 0) {
				return 0;
			} else {
				let max=array[0];
				for(let i=1; i<n; i++) {
					if(array[i]>max) {max=array[i];}
				}
				return max;
			}
		}
}

exports.avg = function avg (array) {
  if(array === undefined) {
		return 0;
		} else {
			let n = array.length;
			if(n == 0) {
				return 0;
			} else {
				let sum = 0;
				for(let i=0; i<n; i++) {
					sum += array[i];
				}
				let avg = sum/n;
				return avg;
			}
		}
}
