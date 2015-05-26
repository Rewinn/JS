var today   = new Date();
var day     = today.getDay();
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hour    = today.getHours();
var minute	= today.getMinutes();
var second  = today.getSeconds();
var meridiem = (hour >= 12)? 'PM ':'AM ';  

hour = (hour >= 12)? hour - 12: hour;

if (hour === 0 && meridiem === ' PM ') {
	if (minute === 0 && second === 0) {
		hour     = 12;
		meridiem = 'Noon';
	} else {
		hour     = 12;
		meridiem = ' PM';
	}
}

if (hour === 0 && meridiem === ' AM ') {
	if (minute === 0 && second === 0) {
		hour     = 12;
		meridiem = ' Midnight';
	} else {
		hour 	 = 12;
		meridiem = ' AM';
	}
}

