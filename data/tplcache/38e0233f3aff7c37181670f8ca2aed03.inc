<li class='{dede:field.currentstyle/}'><a href="{dede:field name='typeurl'/}" class="topa">{dede:field name='typename'/}</a>
              <ul {dede:field name=typeid runphp="yes"}
global $dsql;
$sql = "SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 ";
$row = $dsql->
                GetOne($sql);
                @me=is_array($row)?'class="drop-menu"':'style="display:none"';
                {/dede:field}
                > {dede:channel type='son' noself='yes'}
                <li><a href="[field:typeurl/]">[field:typename/]</a></li>
                {/dede:channel}
              </ul>
            </li>