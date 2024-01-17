var today = new Date();
var year = today.getFullYear();
var est = new Date('Jan 16, 2024');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of book reviewing';