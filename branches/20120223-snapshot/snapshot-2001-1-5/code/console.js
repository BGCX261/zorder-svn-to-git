TypeL=0;
TypeS=0;
TypeN=0;
CMY=-48;
SCY=0;

FNTS='s';
if (screen.availWidth>=800) FNTS='m';
if (screen.availWidth>=1024) FNTS='l';
with (document) {
	write('<LINK rel="stylesheet" href="../code/console'+FNTS+'.css" type="text/css">');
}

for (i=0;i<8;i++)
	MakeL('CTPW'+i,'<img name="cw'+i+'" src="../icon/work/w'+i+'.gif" width=204 height=25>',0);

function DoConsole() {
	CMY+=8;
	if (CMY<ZWinH()+48) {
		MoveL('CM',0,CMY);
		setTimeout('DoConsole()',40);
	} else {
		MI=0;
		DoPN();
		OnOffL('PREVL',1);
		OnOffL('NEXTL',1);
	}
}

function StartCon() {
	TypeY=ZWinH()/2-30;
	CenterL('CTPW0',0,TypeY);
	OnOffL('CTPW0',1);
	OnOffL('SCE',1);
	DoConsole();
	DoScan();
	MakeType();
	OnOffL('CTPW7',1);
}

function DoPN() {
	MI+=3;
	MoveL('PREVL',MI-110,ZWinH()-50);
	MoveL('NEXTL',ZWinW()-MI,ZWinH()-50);
	if (MI<120) setTimeout('DoPN()',40);
}

function DoScan() {
	SCY+=4;
	SCY%=ZWinH();
	if (Math.random()>0.3) MoveL('SCL',0,SCY);
	else MoveL('SCL',0,ZWinH()*Math.random());
	setTimeout('DoScan()',50);
}

function MakeType() {
	if (TypeS!=TypeN) {
		TypeS=TypeN;
		TypeL=0;
		ChLImg('CTPW0','cw0','../icon/work/w'+TypeS+'.gif');
	}
	CenterL('CTPW7',TypeL*17,TypeY);
	TypeL++;
	TypeL%=13;
	setTimeout('MakeType()',100+Math.random()*400);
}

function ConTopic(I) {
	TypeN=I;
	ChLImg('SCE','wi'+I,'../icon/work/'+I+'.gif');
}

function ConCancel(I) {
	ChLImg('SCE','wi'+I,'../icon/work/'+I+'a.gif');
}

setTimeout('StartCon()',1000);