IFIENS = (navigator.appName != 'Microsoft Internet Explorer');

IEFX=0;
IEFY=0;
NSFX=0;
NSFY=0;

function MakeL(Nam,Cont,Vis) {
	if (IFIENS) document.write('<LAYER ID='+Nam+' visibility='+(Vis?'show':'hide')+'>'+Cont+'</LAYER>');
	else document.write('<DIV ID='+Nam+' style="width:1px;position:absolute;visibility:'+(Vis?'visible':'hidden')+'">'+Cont+'</DIV>');
}

function ChLImg(LNam,INam,URL) {
	if (IFIENS) document.layers[LNam].document.images[INam].src=URL;
	else document.images[INam].src = URL;
}

function OnOffL(Nam,Vis) {
	if (IFIENS) document.layers[Nam].visibility=(Vis?'show':'hide');
	else document.all(Nam).style.visibility=(Vis?'visible':'hidden');
}

function MoveL(Nam,X,Y) {
	if (IFIENS) document.layers[Nam].moveToAbsolute(X+NSFX,Y+NSFY);
	else {
		document.all(Nam).style.top=Y+IEFY;
		document.all(Nam).style.left=X+IEFX;
	}
}

function CenterL(Nam,X,Y) {
	if (IFIENS) document.layers[Nam].moveToAbsolute((innerWidth-document.layers[Nam].clip.width)/2+X,(innerHeight-document.layers[Nam].clip.height)/2+Y);
	else {
		document.all(Nam).style.top=Y+(document.body.clientHeight-document.all(Nam).clientHeight)/2;
		document.all(Nam).style.left=X+(document.body.clientWidth-document.all(Nam).clientWidth)/2;
	}
}

function InitClip(Nam) {
	if (IFIENS) {
		document.layers[Nam].ZOZ=document.layers[Nam].zIndex;
		document.layers[Nam].ZOH=document.layers[Nam].clip.height;
		document.layers[Nam].ZOW=document.layers[Nam].clip.right;
	} else {
		document.all(Nam).ZOZ=document.all(Nam).style.zIndex;
		document.all(Nam).ZOH=document.all(Nam).scrollHeight;
		document.all(Nam).ZOW=document.all(Nam).scrollWidth;
		document.all(Nam).ZOU=0;
		document.all(Nam).ZOL=0;
		document.all(Nam).ZOR=document.all(Nam).ZOW;
		document.all(Nam).ZOD=document.all(Nam).ZOH;
	}
}

function SetIEClip(Nam) {
	document.all(Nam).style.clip='rect('+document.all(Nam).ZOU.toString()+' '+document.all(Nam).ZOR.toString()+' '+document.all(Nam).ZOD.toString()+' '+document.all(Nam).ZOL.toString()+')';
}

function ZWinW() {
	return (IFIENS ? innerWidth : document.body.clientWidth);
}

function ZWinH() {
	return (IFIENS ? innerHeight : document.body.clientHeight);
}

function ZIL(Nam,ZI) {
	if (IFIENS) document.layers[Nam].zIndex=ZI;
	else document.all(Nam).style.zIndex=ZI;
}

function ZCos(A,R) {
	return R*Math.cos(A*Math.PI/180)
}

function ZSin(A,R) {

	return R*Math.sin(A*Math.PI/180)
}

function ZPER(A,B,P) {
	return (A*(100-P)+B*P)/100
}