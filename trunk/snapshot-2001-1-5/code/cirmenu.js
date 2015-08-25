CRI=0;
CRJ=0;
CRK=0;
FI=-1;

var CRP=new Array(7);
var CRV=new Array(7);
var CFX=new Array(12);
var CFY=new Array(12);
citem=0;

function MakeCLink(Nam,Lnk) {
	if (citem) CLP=CLP+' | ';
	CLP=CLP+'<a href="'+Lnk+'" onMouseover="MVC('+citem+',5)" onMouseout="MVC('+citem+',-2)" target=_top>'+Nam+'</a>';
	citem++;
}

CLP='<NOBR>[ ';
MakeCLink('EXORDIUM','intro/intro.html');
MakeCLink('Z-ORDER','intro/zorder.html');
MakeCLink('MYSTERY','intro/works.html');
MakeCLink('BRILLIANCE','image/');
MakeCLink('NEXUS','link/links.html');
MakeCLink('DESINENCE','ending/end.html');
CLP=CLP+' ]</NOBR>';

CAD=360/citem;

for (i=11;i>=0;i--) {
	MakeL('F'+i,'<img src="code/cirmenu/f'+Math.floor(i/2)+'.gif" width=24 height=24>',1);
	CFX[i]=0;
	CFY[i]=0;
}

for (i=0;i<citem;i++) {
	if (!IFIENS) {
		MakeL('IECE'+i,'<img src="code/cirmenu/w'+i+'e.gif" width=96 height=96>',0);
		MakeL('IECQ'+i,'<img src="code/cirmenu/w'+i+'q.gif" width=96 height=96>',0);
	}
	MakeL('C'+i,'<img src="code/cirmenu/c'+i+'.gif" width=24 height=24>',0);
	CRP[i]=0;
	CRV[i]=0;
}
MakeL('CBB','<img src="code/cirmenu/spcbg.gif" width=96 height=96>',0);
MakeL('CBL','<img NAME="CBI" src="code/cirmenu/spc.gif" width=96 height=96>',0);

function DORT() {
	CRJ+=10;
	CRJ%=360;
	CRI+=(5+ZSin(CRJ,3));
	CRI%=360;
	CRK++;
	CRK%=180;
	Y1=ZCos(Math.abs(90-CRK)/2+27,1);
	X1=ZSin(Math.abs(90-CRK)/2+27,1);
	for (i=0;i<citem;i++) {
		CRP[i]+=CRV[i];
		if (CRP[i]<0) {CRP[i]=0;CRV[i]=0;}
		else if (CRP[i]>100) {
			CRP[i]=100;
			CRV[i]=0;
			ChLImg('CBL','CBI','code/cirmenu/w'+i+'e.gif')
		}
		X=ZCos(CRI+i*CAD,220);
		Y=ZSin(CRI+i*CAD,100);
		XX=ZPER(-X*X1-Y*Y1, 0, CRP[i]);
		YY=ZPER(X*Y1-Y*X1, 0, CRP[i]);
		if (FI==i) {
			for (j=11;j>0;j--) {
				CFX[j]=CFX[j-1];
				CFY[j]=CFY[j-1];
			}
			CFX[0]=XX;
			CFY[0]=YY;
		}
		CenterL('C'+i,XX,YY);
	}
	for (i=11;i>=0;i--) CenterL('F'+i,CFX[i],CFY[i]);
	setTimeout('DORT();',40);
}

function MVC(I,L) {
	CRV[I]=L;
	if (L<0) {
	 	if (CRP[I]==100) ChLImg('CBL','CBI','code/cirmenu/w'+I+'q.gif');
	} else {
		FI=I;
	}
}

for (i=0;i<citem;i++) OnOffL('C'+i,1);

CenterL('CBL', 0, 0);
OnOffL('CBL',1);
CenterL('CBB', 0, 0);
OnOffL('CBB',1);

MakeL('CBM',CLP,1);
MoveL('CBM', 0, 20);

DORT();

