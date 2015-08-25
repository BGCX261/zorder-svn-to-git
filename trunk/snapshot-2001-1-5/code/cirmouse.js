for (i=11;i>=0;i--) {
	MakeL('F'+i,'<img src="../code/cirmenu/f'+Math.floor(i/2)+'.gif" width=24 height=24>',1);
	FX[i]=0;
	FY[i]=0;
}

function MMouse(EVT) {
	NVI=0;
	NX=EVT.pageX;
	NY=EVT.pageY;
}

function MMouseIE() {
	NVI=0;
	NX=event.clientX;
	NY=event.clientY;
}

function RollFXY() {
	for (i=11;i>0;i--) {
		FX[i]=FX[i-1];
		FY[i]=FY[i-1];
		MoveL('F'+i,FX[i],FY[i]);
	}
	MoveL('F0',FX[0],FY[0]);
}

if (navigator.appName != 'Microsoft Internet Explorer')	{document.captureEvents(Event.MOUSEMOVE);document.onmousemove=MMouse;}
else document.onmousemove=MMouseIE;

function MFXYT() {
	NVI++;
	if (NVI>10) {
		NCI++;
		X=ZCos((NVI*10%360),50);
		Y=ZSin((NVI*10%360),25);
		X1=ZCos(NCI%360,2);
		Y1=ZSin(NCI%360,2);
		FX[0]=NX+(X*X1+Y*Y1)-10;
		FY[0]=NY+(X*Y1-Y*X1)-10;
	} else {
		FX[0]=NX-30;
		FY[0]=NY-30;
	}
	RollFXY();
	setTimeout('MFXYT()',40);
}
MFXYT();