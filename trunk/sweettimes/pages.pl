@PW = (0, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540);
@PH = (0, 720, 720, 720, 720, 720, 720, 720, 720, 720, 720);
$pages=@PW-1;

for ($i=1;$i<=$pages;$i++) {
	open(FH,">page".substr(100+$i,1).".html");
	select(FH);

	print "<HTML><TITLE>-=SWEET TIMES=- (Photo page: $i)</TITLE>";
	print "<STYLE><!--\nA {text-decoration: none;color: #000000}\nA:hover {color: #A040A0}\nTD {font-size: 14px;font-family: \"Arial\";color: #A00000;}\n--></STYLE>";
	print "<BODY BGCOLOR=#000000><CENTER>";
	PrtBOX("<img src=\"".substr(100+$i,1).".jpg\">",$PW[$i],$PH[$i], 10);
	print "<table width=600 cellpadding=20 cellspacing=0 border=0>";
	print "<tr><th>";
	PrtBOX("<A href=\".\">HOME/­º­¶</A>",90,35,2);
	if ($i>1) {
		print "</th><th>";
		PrtBOX("<A href=\"page".substr(99+$i,1).".html\">PREV/«e­¶</A>",90,35,2);
	}
	if ($i<$pages) {
		print "</th><th>";
		PrtBOX("<A href=\"page".substr(101+$i,1).".html\">NEXT/¦¸­¶</A>",90,35,2);
	}
	print "</th></tr></table>";
	print "</CENTER></BODY></HTML>";

	close(FH);
}

sub PrtBOX {
	$CNT=shift;
	$PW=shift;
	$PH=shift;
	$PD=shift;
	
	$PW+=$PD*2;
	$PH+=$PD*2;

	print "<table cellpadding=0 cellspacing=0 border=0>";
	print "<tr><td><img src=\"lu.gif\" width=10 height=10 border=0></td>";
	print "<td align=center><img src=\"u.gif\" width=$PW height=10 border=0></td>";
	print "<td><img src=\"ru.gif\" width=10 height=10 border=0></td></tr>";
	print "<tr><td><img src=\"l.gif\" width=10 height=$PH border=0></td>";
	print "<td><table bgcolor=#ffffff cellpadding=10 border=0 cellspacing=0 width=$PW height=$PH><tr><td>$CNT</td></tr></table></td>";
	print "<td><img src=\"r.gif\" width=10 height=$PH border=0></td></tr>";
	print "<tr><td><img src=\"ld.gif\" width=10 height=10 border=0></td>";
	print "<td align=center><img src=\"d.gif\" width=$PW height=10 border=0></td>";
	print "<td><img src=\"rd.gif\" width=10 height=10 border=0></td></tr>";
	print "</table></BODY></HTML>";
}