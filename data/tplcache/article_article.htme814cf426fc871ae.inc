<?php
$z[0]=Array("field","",124,143);
$z[0][4]['name']="title";
$z[1]=Array("global","",144,170);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",211,233);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",273,324);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1024,1059);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1166,1185);
$z[5][4]['name']="title";
$z[6]=Array("field","",1324,1353);
$z[6][4]['name']="position";
$z[7]=Array("field","",1539,1558);
$z[7][4]['name']="title";
$z[8]=Array("field","",1620,1640);
$z[8][4]['name']="writer";
$z[9]=Array("field","",1673,1693);
$z[9][4]['name']="source";
$z[10]=Array("field","",1732,1788);
$z[10][4]['name']="pubdate";
$z[10][4]['function']="MyDate('Y-m-d H:i',@me)";
$z[11]=Array("field","",1837,1864);
$z[11][4]['name']="phpurl";
$z[12]=Array("field","",1888,1911);
$z[12][4]['name']="id";
$z[13]=Array("field","",1916,1940);
$z[13][4]['name']="mid";
$z[14]=Array("field","",2033,2051);
$z[14][4]['name']="body";
$z[15]=Array("prenext","",2144,2169);
$z[15][4]['get']="pre";
$z[16]=Array("prenext","",2223,2249);
$z[16][4]['get']="next";
$z[17]=Array("type"," <a class=\"button border-main\" href=\"[field:typelink/]\">更多&gt;&gt;</a>",2531,2639);
$z[17][4]['typeid']="2";
$z[18]=Array("arclist","\r\n          <li class=\"clearfix\"> <a href=\"[field:arcurl/]\" title=\"[field:title/]\">\r\n            <div class=\"news-date\">\r\n              <div class=\"news-date1\">[field:pubdate function=\"MyDate('d',@me)\"/]</div>\r\n              <div class=\"news-date2\">[field:pubdate function=\"MyDate('Y/m',@me)\"/]</div>\r\n            </div>\r\n            <div class=\"news-bodys\">\r\n              <h3>[field:title/]</h3>\r\n              <p>&#8203;[field:description function=\"cn_substr(@me,160)\"/]...</p>\r\n            </div>\r\n            </a> </li>\r\n          ",2777,3397);
$z[18][4]['typeid']="2";
$z[18][4]['limit']="0,3";
$z[18][4]['titlelen']="50";
$z[18][4]['orderby']="pubdate";
$z[19]=Array("arclist","\r\n          <li class=\"clearfix\"> <a href=\"[field:arcurl/]\" title=\"[field:title/]\">\r\n            <div class=\"news-date\">\r\n              <div class=\"news-date1\">[field:pubdate function=\"MyDate('d',@me)\"/]</div>\r\n              <div class=\"news-date2\">[field:pubdate function=\"MyDate('Y/m',@me)\"/]</div>\r\n            </div>\r\n            <div class=\"news-bodys\">\r\n              <h3>[field:title/]</h3>\r\n              <p>&#8203;[field:description function=\"cn_substr(@me,160)\"/]...</p>\r\n            </div>\r\n            </a> </li>\r\n          ",3516,4136);
$z[19][4]['typeid']="2";
$z[19][4]['limit']="4,3";
$z[19][4]['titlelen']="50";
$z[19][4]['orderby']="pubdate";
$z[20]=Array("include","",4259,4296);
$z[20][4]['filename']="footer.htm";

?>