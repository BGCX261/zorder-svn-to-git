RTA1=0;
RTA2=0;
RolA=7;
RolB=6;

with (document) {
	write('<LINK rel="stylesheet" href="../code/link.css" type="text/css">');
}

for (i=0;i<3;i++) MakeL('RTR'+i, '<img src="../code/rtri/r0.gif" width=128 height=128>',1);
MakeL('RTR', '<A href="../menu.html" target=_top><img src="../code/rtri/r1.gif" width=128 height=128 border=0 alt="back to Main Menu...."></A>',1);
CenterL('RTR',0,0);

function DoRTRI() {
	RTA1+=RolA;
	RTA1%=360;
	RTA2+=RolB;
	RTA2%=360;
	RTRL=ZCos(RTA2,40)+120;
	for (i=0;i<3;i++)
		CenterL('RTR'+i,-ZCos(RTA1+i*120,RTRL),ZSin(RTA1+i*120,RTRL));
	setTimeout('DoRTRI()',47);
}

DoRTRI();