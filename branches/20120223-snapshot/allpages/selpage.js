IFIENS = (navigator.appName != 'Microsoft Internet Explorer');
var PGDEC=new Array(20);
PGDEC[0]='���п�ܷQ�[�ݪ������A<br>�Ϋ�<A href="../menu.html" target=_top>���B�^��Z-Order�D���C';
PGDEC[1]='���ڪ��Ĥ@�Ӻ�X�������<br>�E�ʺ��e���<br>�ERPG ���<br>�E�C�����<br>�E�{���]�p���<p align=right>�բݡn�n�n <A href="http://bashful.ice.ntnu.edu.tw/~zordius/maxmix.html">��</A>';
PGDEC[2]='���ڪ���X�@�~����<br>�E�����@�~����<br>�E��v�@�~����<br>�E��r�@�~����<br>�E�{���@�~����<p align=right>�բݡn�n�n <A href="/ZOrder/2001-1-5/">��</A>';
PGDEC[3]='���u�g�@�~�����@<br>�E�u�g�G�c�]�l��<br>�E�u�g�G�G�m<br>�E�u�g�G�ȫ�<br>�E�u�g�G�@�~�@��<p align=right>�բݡn�n�n <A href="../inkhorn/">��</A>';
PGDEC[4]='���u�g�S���P�]�w��<br>�E�u�g�s���G����<br>�E�u�g�s���G�C<br>�E�]�w���G�¿A�@��<br>�E�]�w���G�ۻP�y<p align=right>�բݡn�n�n <A href="../slash/">��</A>';
PGDEC[5]='���������@<br>�E�H���G�@��<br>�E�H���G�z�o<br>�E�H���G�ϥΤ�k<br>�E��O�G2000/12/29��2001/02/28<p align=right>�բݡn�n�n <A href="../pit/001/">��</A>';
PGDEC[6]='���u�g�S���P�]�w��<br>�E�u�g�s���GSword & Magic!!<br>�E�]�w���G�]�k<br>�E�]�w���G�䥦<br>�E�]�w���G�u�����̳]�w<p align=right>�բݡn�n�n <A href="../sm/">��</A>';
PGDEC[7]='���������G<br>�E�H���G���b�x�j<br>�E�H���G�L��<br>�E�H���G�զ�<br>�E��O�G2001/03/01��2001/04/30<p align=right>�բݡn�n�n <A href="../pit/002/">��</A>';
PGDEC[8]='���������T<br>�E���סG�C��/�ӷ~/�D�w<br>�E�H���G�߱��O��<br>�E�s�֡G�J��<br>�E��O�G2001�~�����<p align=right>�բݡn�n�n <A href="../pit/003/">��</A>';
PGDEC[9]='���������|<br>�E�H���G�B��<br>�E�H���G�x�_���Ѫ�<br>�E�s�֡G�Pı<br>�E��O�G2001�~�����<p align=right>�բݡn�n�n <A href="../pit/004/">��</A>';
PGDEC[10]='����������<br>�E���O�G����<br>�E��O�G2001�~�C���<br>�E��O�G2001�~�K���<br>�E��O�G2001�~�E���<p align=right>�բݡn�n�n <A href="../pit/005/">��</A>';
PGDEC[11]='����������<br>�E���O�G�L�D���@<br>�E���O�G�L�D���G<br>�E���O�G�L�D���T<br>�E���O�G�L�D���|<p align=right>�բݡn�n�n <A href="../pit/006/">��</A>';
PGDEC[12]='���������C<br>�E���O�G���ꤧ�@<br>�E���O�G���ꤧ�G<br>�E���O�G���ꤧ�T<br>�E���O�G���ꤧ�|<p align=right>�բݡn�n�n <A href="../pit/007/">��</A>';
PGDEC[13]='���������K<br>�E���O�G�@<br>�E���O�G�G<br>�E���O�G�T<br>�E���O�G�|<p align=right>�բݡn�n�n <A href="../pit/008/">��</A>';
PGDEC[14]='���������E<br>�E���O�G�P��@<br>�E���O�G�P��G<br>�E���O�G�P��T<br>�E���O�G�P��|<p align=right>�բݡn�n�n <A href="../pit/009/">��</A>';
PGDEC[15]='��Sweet Times<br>�E��v��<br> - ���ڳ̦n���B��<p align=right>�բݡn�n�n <A href="../sweettimes/">��</A>';
PGDEC[16]='���������Q<br>�E���O�G���򤧤@<br>�E���O�G���򤧤G<br>�E���O�G���򤧤T<br>�E���O�G���򤧥|<p align=right>�բݡn�n�n <A href="../pit/010/">��</A>';
PGDEC[17]='��MELODY<br>�E�q����<br><br><br><p align=right>�բݡn�n�n <A href="../melody/">��</A>';
PGDEC[18]='���������Q�@<br>�E��O����G�J��e...��h��<br><br><br><p align=right>�բݡn�n�n <A href="../pit/011/">��</A>';
PGDEC[19]='���������Q�G<br>�E��O�ð�G���C�K�E�Q��<br><br><br><p align=right>�բݡn�n�n <A href="../pit/012/">��</A>';
PGDEC[20]='���������Q�T<br>�E��O���|�G2003/11~2004/06<br><br><br><p align=right>�բݡn�n�n <A href="../pit/013/">��</A>';
PGDEC[21]='���ڪ���v�@�~�M������<br>�E����<br>�E�H��<br>�ECosplay';
AllPages=21;
LastP=1;

function MakeL(Nam,Cont,Vis) {
	if (IFIENS) document.write('<LAYER ID='+Nam+' visibility='+(Vis?'show':'hide')+'>'+Cont+'</LAYER>');
	else document.write('<DIV ID='+Nam+' style="width:1px;position:absolute;visibility:'+(Vis?'visible':'hidden')+'">'+Cont+'</DIV>');
}

function OnOffL(Nam,Vis) {
	if (IFIENS) document.layers[Nam].visibility=(Vis?'show':'hide');
	else document.all(Nam).style.visibility=(Vis?'visible':'hidden');
}

function MoveL(Nam,X,Y) {
	if (IFIENS) document.layers[Nam].moveToAbsolute(X,Y);
	else {
		document.all(Nam).style.top=Y;
		document.all(Nam).style.left=X;
	}
}

function ZIL(Nam,ZI) {
	if (IFIENS) document.layers[Nam].zIndex=ZI;
	else document.all(Nam).style.zIndex=ZI;
}

for (I=0;I<=AllPages;I++)
	MakeL('PG'+I,'<table width=230><tr><td>'+PGDEC[I]+'</td></tr></table>');

function ChPage(I) {
	OnOffL('PG'+LastP,0);
	LastP=I;
	if (IFIENS) document.layers["PGC"].document.images["PGV"].src="icon/"+I+".gif";
	else document.images["PGV"].src="icon/"+I+".gif";
	MoveL('PG'+LastP,405,150);
	ZIL('PG'+LastP,10);
	OnOffL('PG'+LastP,1);
}