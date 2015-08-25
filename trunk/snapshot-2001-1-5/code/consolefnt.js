FNTS='s';
if (screen.availWidth>=800) FNTS='m';
if (screen.availWidth>=1024) FNTS='l';
with (document) {
	write('<LINK rel="stylesheet" href="../code/console'+FNTS+'.css" type="text/css">');
}
