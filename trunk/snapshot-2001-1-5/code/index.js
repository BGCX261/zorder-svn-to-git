MakeL('I2','<img src="icon/index/title02.gif" width=106 height=106>',0);
MakeL('I1','<A href="menu.html" target="_top"><img src="icon/index/title01.gif" width=370 height=190 alt="Enter Z-Order" border=0></A>',0);
CenterL('I1',0,-60);
OnOffL('I1',1);
I=0;

function DORT() {
	I+=358;
	I%=360;
	CenterL('I2',ZCos(I,40)-50,ZSin(I,40)-60);
	setTimeout('DORT()',40);
}

for (i=0;i<6;i++) {
	MakeL('IECE'+i,'<img src="code/cirmenu/w'+i+'e.gif" width=96 height=96>',0);
	MakeL('IECQ'+i,'<img src="code/cirmenu/w'+i+'q.gif" width=96 height=96>',0);
}

DORT();
OnOffL('I2',1);
