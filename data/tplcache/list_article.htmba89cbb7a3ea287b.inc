<?php
$z[0]=Array("field","",124,143);
$z[0][4]['name']="title";
$z[1]=Array("global","",144,170);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",211,240);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",280,338);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1038,1073);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1180,1199);
$z[5][4]['name']="title";
$z[6]=Array("field","",1338,1367);
$z[6][4]['name']="position";
$z[7]=Array("field","",1534,1563);
$z[7][4]['name']="typename";
$z[8]=Array("list","\r\n          <li class=\"clearfix\"> <a href=\"[field:arcurl/]\" title=\"[field:title/]\">\r\n            <div class=\"news-date\">\r\n              <div class=\"news-date1\">[field:pubdate function=\"MyDate('d',@me)\"/]</div>\r\n              <div class=\"news-date2\">[field:pubdate function=\"MyDate('Y/m',@me)\"/]</div>\r\n            </div>\r\n            <div class=\"news-bodys\">\r\n              <h3>[field:title/]</h3>\r\n              <p>​[field:description function=\"cn_substr(@me,500)\"/]...</p>\r\n            </div>\r\n            </a> </li>\r\n          ",1681,2250);
$z[8][4]['pagesize']="5";
$z[9]=Array("pagelist","",2332,2398);
$z[9][4]['listitem']="index,end,pre,next,pageno";
$z[9][4]['listsize']="1";
$z[10]=Array("include","",2487,2524);
$z[10][4]['filename']="footer.htm";

?>