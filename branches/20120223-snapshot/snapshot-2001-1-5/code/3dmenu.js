D3A=0;
D3WL=1;
D3Way=-1;

D3CL=ZWinW()/2-100;
D3CT=ZWinH()/2-100;

for (i=0;i<16;i++) {
	MakeL('D3L'+i,'<img src="code/3d/p0.gif" width=99 height=49>',1);
}

function D3Wave() {
	D3A+=20;
	D3A%=360;
	D3WL+=D3Way;
	if (D3WL==60) D3Way=-1;
	if (D3WL>-1) {
		k=0;
		for (i=0;i<8;i++) {
			for (j=0;j<4-Math.abs(4-i);j++) {
				MoveL('D3L'+k,D3CL-j*99+(4-Math.abs(4-i))*50,D3CT+i*16+ZCos(D3A+i*60+j*90,D3WL));
				k++;
			}
		}
		setTimeout('D3Wave()',40);
	} else {
		D3Way=1;
		setTimeout('D3Wave()',2500);
	}
}

D3Wave();