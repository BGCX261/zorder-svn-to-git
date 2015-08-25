function MMouse(EVT) {
	MoveL('AI1',0,EVT.pageY-18);
	MoveL('AI2',EVT.pageX-18,0);
	MoveL('AI3',EVT.pageX-30,EVT.pageY-30);
}

function MMouseIE() {
	MoveL('AI1',0,event.clientY-18);
	MoveL('AI2',event.clientX-18,0);
	MoveL('AI3',event.clientX-30,event.clientY-30);
}

MakeL('AI1','<img src="code/aim/aim01.gif" width=1024 height=1>',1);
MakeL('AI2','<img src="code/aim/aim02.gif" width=1 height=1024>',1);
MakeL('AI3','<img src="code/aim/aim03.gif" width=25 height=25>',1);

if (navigator.appName != 'Microsoft Internet Explorer')	{document.captureEvents(Event.MOUSEMOVE);document.onmousemove=MMouse;}
else document.onmousemove=MMouseIE;
