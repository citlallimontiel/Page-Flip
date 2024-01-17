(function() {

	var book = {
		name: 'A Christmas Carol',
		bookRate: 20,
		discount: 10,
		offerPrice: function() {
			var offerRate = this.bookRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};

	var bookName, bookRate, specialRate;

	bookName = document.getElementById('bookName');
	bookRate = document.getElementById('bookRate');
	specialRate = document.getElementById('specialRate');

	bookName.textContent = hotel.name;
	bookRate.textContent = '$' + book.bookRate.toFixed(2);
	specialRate.textContent = '$' + book.offerPrice();

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());