function MoveL(Nam,X,Y) {
	if (navigator.appName != 'Microsoft Internet Explorer')	document.layers[Nam].moveToAbsolute(X,Y);
	else {
		document.all(Nam).style.top=Y;
		document.all(Nam).style.left=X;
	}
}

function MMouse(EVT) {
	MoveEye(EVT.pageX,EVT.pageY);
}

function MMouseIE() {
	MoveEye(event.clientX,event.clientY);
}

function MoveEye(X,Y) {
	MVE(1,245,X,Y);
	MVE(2,445,X,Y);
}

function MVE(I,X,X1,Y1) {
	XX=X1-X;
	YY=Y1-235;
	L=2*XX*XX+YY*YY;
	if (L<1200) {
		XX=XX*L/1200;
		YY=YY*L/1200;
	} else {
		XX=XX/Math.sqrt(L)*30;
		YY=YY/Math.sqrt(L)*40;
	}
	MoveL('E'+I,XX+X,YY+212);
}

if (navigator.appName != 'Microsoft Internet Explorer')	{document.captureEvents(Event.MOUSEMOVE);document.onmousemove=MMouse;}
else document.onmousemove=MMouseIE;
