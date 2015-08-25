IFIENS = (navigator.appName != 'Microsoft Internet Explorer');

with (document) {
	write('<LINK rel="stylesheet" href="../code/book.css" type="text/css">');
	if (IFIENS) {
		write('<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">');
		write('<LINK REL="fontdef" SRC="../font/carolineshand.pfr">');
		write('<LINK REL="fontdef" SRC="../font/acidic.pfr">');
	}
}
