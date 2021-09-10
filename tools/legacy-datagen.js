/*
2017:var b = genWeekdays(2017, [[1,23,2,26],[7,3,8,27],[10,1,10,7]]);
2021:var b = genWeekdays(2021, [[2,1,2,26],[7,5,8,27],[10,1,10,7]]);
*/
var genWeekdays = function(year, holidays){
	// day : 0 - Sun, 6 - Sat
	// output: 0 - Holiday, 6 - Festival
	// @holidays: [[1,1,2,2]] - firstDay to lastDay(Jan 1 - Feb 2)

	if(!holidays) holidays = [];
	holidays = holidays.map(function(h){
		if(h.length == 2){
			h.push(h[0]);
			h.push(h[1]);
		}
		return h;
	});
	holidays.sort(function(a, b){
		return a[0]*31+a[1]-b[0]*31-b[1];
	});
	var holiday = holidays.shift();

	var r = [];
	for(var i=0;i<12;i++){
		r.push([]);
	}
	var date = new Date(year, 0, 1);
	for(var m in r){
		var d = 1;
		date.setMonth(m);
		// console.log(m,d);
		while(1){
			date.setDate(d);
			if(date.getMonth() != m){
				// Already next month
				break;
			}
			if (date.getDay() == 6 || date.getDay() == 0) {
				r[m][d-1] = 36;
			} else {
				r[m][d-1] = date.getDay()+40;
			}

			if(holiday){
				//console.log(m,d,holiday);
				if(m*31+d <= (holiday[2]-1)*31+holiday[3]){
					if(m*31+d >= (holiday[0]-1)*31+holiday[1]){
						// in range
						r[m][d-1] = 0;
					}
				}else{
					holiday = holidays.shift();
				}
			}
			d++;
		}
	}
	return JSON.stringify(r);
};