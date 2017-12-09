<?php
$z[0]=Array("global","",354,375);
$z[0][4]['name']="cfg_mc";
$z[1]=Array("global","",668,694);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","(@me==\"\")? @me=\" class='active' \":@me=\"\";",918,1009);
$z[2][4]['name']="typeid";
$z[2][4]['runphp']="yes";
$z[3]=Array("channelartlist","\r\n            <li class='{dede:field.currentstyle/}'><a href=\"{dede:field name='typeurl'/}\" class=\"topa\">{dede:field name='typename'/}</a>\r\n              <ul {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->\r\n                GetOne(\$sql);\r\n                @me=is_array(\$row)?'class=\"drop-menu\"':'style=\"display:none\"';\r\n                {/dede:field}\r\n                > {dede:channel type='son' noself='yes'}\r\n                <li><a href=\"[field:typeurl/]\">[field:typename/]</a></li>\r\n                {/dede:channel}\r\n              </ul>\r\n            </li>\r\n            ",1065,1840);
$z[3][4]['typeid']="top";
$z[3][4]['currentstyle']="active";

?>