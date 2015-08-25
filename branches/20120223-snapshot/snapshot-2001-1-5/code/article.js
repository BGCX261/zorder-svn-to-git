FNTS=16;
if (screen.availWidth>=800) FNTS=20;
if (screen.availWidth>=1024) FNTS=24;
with (document) {
	writeln('<LINK rel="stylesheet" href="../code/article.css" type="text/css">');
	writeln('<STYLE><!--');
	writeln('BODY {font-size: '+FNTS+'px;line-height: 26px;}');
	writeln('--></STYLE>');
}