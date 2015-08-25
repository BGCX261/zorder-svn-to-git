MenuNum=0;
MenuZU=99;

function IELShow(LID) {
	if (document.all('MenuH'+LID).ZOOID) clearInterval(document.all('MenuH'+LID).ZOOID);
	document.all('MenuH'+LID).ZOD=0;
	SetIEClip('MenuH'+LID);
	MoveL('MenuH'+LID,event.clientX+40,event.clientY+20);
	document.all('MenuH'+LID).style.visibility='visible';
	document.all('MenuH'+LID).style.zIndex=(MenuZU++);
	document.all('MenuH'+LID).ZOV='visible';
	document.all('MenuH'+LID).ZOOID=setInterval('IEMOpen('+LID+')',50);
}

function LayerShow(LID) {
	MoveL('MenuH'+LID,ZMouseX+40,ZMouseY+20);
	if (document.layers['MenuH'+LID].ZOOID>0) clearInterval(document.layers['MenuH'+LID].ZOOID);
	document.layers['MenuH'+LID].clip.height=0;
	document.layers['MenuH'+LID].visibility='show';
	document.layers['MenuH'+LID].zIndex=99;
	document.layers['MenuH'+LID].ZOV='show';
	document.layers['MenuH'+LID].ZOOID=setInterval('MenuOpen('+LID+')',50);
}

function IELHide(LID) {
	if (document.all('MenuH'+LID).ZOCID>0) clearInterval(document.all('MenuH'+LID).ZOCID);
	document.all('MenuH'+LID).zIndex=0;
	document.all('MenuH'+LID).ZOV='hidden';
	document.all('MenuH'+LID).ZOCID=setInterval('IEMClose('+LID+')',50);
}

function LayerHide(LID) {
	if (document.layers['MenuH'+LID].ZOCID>0) clearInterval(document.layers['MenuH'+LID].ZOCID);
	document.layers['MenuH'+LID].zIndex=0;
	document.layers['MenuH'+LID].ZOV='hide';
	document.layers['MenuH'+LID].ZOCID=setInterval('MenuClose('+LID+')',50);
}

function IEMOpen(MID) {
	if (document.all('MenuH'+MID).ZOD<document.all('MenuH'+MID).ZOH) {
		document.all('MenuH'+MID).ZOD+=(document.all('MenuH'+MID).ZOH/20);
		SetIEClip('MenuH'+MID);
	} else {
		clearInterval(document.all('MenuH'+MID).ZOH);
		document.all('MenuH'+MID).ZOOID=0;
		document.all('MenuH'+MID).ZOD=document.all('MenuH'+MID).ZOH;
		SetIEClip('MenuH'+MID);
	}
}

function MenuOpen(MID) {
	if (document.layers['MenuH'+MID].clip.height<document.layers['MenuH'+MID].ZOH)
		document.layers['MenuH'+MID].clip.height+=(document.layers['MenuH'+MID].ZOH/20);
	else {
		clearInterval(document.layers['MenuH'+MID].ZOOID);
		document.layers['MenuH'+MID].ZOOID=0;
		document.layers['MenuH'+MID].clip.height=document.layers['MenuH'+MID].ZOH;
	}
}

function IEMClose(MID) {
	if (document.all('MenuH'+MID).ZOL<document.all('MenuH'+MID).ZOR) {
		document.all('MenuH'+MID).ZOL+=(document.all('MenuH'+MID).ZOW/40);
		document.all('MenuH'+MID).ZOR-=(document.all('MenuH'+MID).ZOW/40);
		SetIEClip('MenuH'+MID);
	} else {
		clearInterval(document.all('MenuH'+MID).ZOCID);
		document.all('MenuH'+MID).ZOCID=0;
		document.all('MenuH'+MID).style.visibility=document.all('MenuH'+MID).ZOV;
		document.all('MenuH'+MID).ZOL=0;
		document.all('MenuH'+MID).ZOR=document.all('MenuH'+MID).ZOW;
		document.all('MenuH'+MID).zIndex=document.all('MenuH'+MID).ZOZ;
	}
}

function MenuClose(MID) {
	if (document.layers['MenuH'+MID].clip.width>0) {
		document.layers['MenuH'+MID].clip.left+=(document.layers['MenuH'+MID].ZOW/40);
		document.layers['MenuH'+MID].clip.right-=(document.layers['MenuH'+MID].ZOW/40);
	} else {
		clearInterval(document.layers['MenuH'+MID].ZOCID);
		document.layers['MenuH'+MID].ZOCID=0;
		document.layers['MenuH'+MID].visibility=document.layers['MenuH'+MID].ZOV;
		document.layers['MenuH'+MID].clip.left=0;
		document.layers['MenuH'+MID].clip.right=document.layers['MenuH'+MID].ZOW;
		document.layers['MenuH'+MID].zIndex=document.layers['MenuH'+MID].ZOZ;
	}
}

function MakeMenuH(MLK, MTL) {
	document.write('<A HREF="'+MLK+'"');
	if (IFIENS) document.write(' OnMouseOut="LayerHide('+MenuNum+')" OnMouseOver="LayerShow('+MenuNum+')"');
	else document.write(' OnMouseOut="IELHide('+MenuNum+')" OnMouseOver="IELShow('+MenuNum+')"');
	document.writeln('>'+MTL+'</A>');
}

function MakeMenuLayer(Wrd) {
	MakeL('MenuH'+MenuNum,Wrd,0);
	InitClip('MenuH'+MenuNum);
}

function MakeMenu(Lnk, Txt, Wrd) {
	MenuNum++;
	MakeMenuH(Lnk, Txt);
	MakeMenuLayer(Wrd);
}




function MMouse(EVT) {
	ZMouseY=EVT.pageY;
	ZMouseX=EVT.pageX;
}

if (navigator.appName != 'Microsoft Internet Explorer')	{document.captureEvents(Event.MOUSEMOVE);document.onmousemove=MMouse;}
