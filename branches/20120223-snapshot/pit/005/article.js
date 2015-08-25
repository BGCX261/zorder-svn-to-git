FNTS=12;
if (screen.availWidth>=800) FNTS=14;
if (screen.availWidth>=1024) FNTS=16;
with (document) {
	writeln('<LINK rel="stylesheet" href="article.css" type="text/css">');
	writeln('<STYLE><!--');
	writeln('BODY {font-size: '+FNTS+'px;line-height: 26px;}');
	writeln('--></STYLE>');
}