jQuery.cookie=function(e,b,a){if(arguments.length>1&&String(b)!=="[object Object]"){a=jQuery.extend({},a);if(b===null||b===void 0)a.expires=-1;if(typeof a.expires==="number"){var d=a.expires,c=a.expires=new Date;c.setDate(c.getDate()+d)}b=String(b);return document.cookie=[encodeURIComponent(e),"=",a.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b||{};c=a.raw?function(a){return a}:decodeURIComponent;return(d=RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(d[1]):null};
/*
jQuery deparam is an extraction of the deparam method from Ben Alman's jQuery BBQ
http://benalman.com/projects/jquery-bbq-plugin/
*/
(function ($) {
$.deparam = function (params, coerce) {
  var obj = {},
      coerce_types = { 'true': !0, 'false': !1, 'null': null };
    
  // Iterate over all name=value pairs.
  $.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
    var param = v.split('='),
        key = decodeURIComponent(param[0]),
        val,
        cur = obj,
        i = 0,
          
        // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
        // into its component parts.
        keys = key.split(']['),
        keys_last = keys.length - 1;
      
    // If the first keys part contains [ and the last ends with ], then []
    // are correctly balanced.
    if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
      // Remove the trailing ] from the last keys part.
      keys[keys_last] = keys[keys_last].replace(/\]$/, '');
        
      // Split first keys part into two parts on the [ and add them back onto
      // the beginning of the keys array.
      keys = keys.shift().split('[').concat(keys);
        
      keys_last = keys.length - 1;
    } else {
      // Basic 'foo' style key.
      keys_last = 0;
    }
      
    // Are we dealing with a name=value pair, or just a name?
    if (param.length === 2) {
      val = decodeURIComponent(param[1]);
        
      // Coerce values.
      if (coerce) {
        val = val && !isNaN(val)              ? +val              // number
            : val === 'undefined'             ? undefined         // undefined
            : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
            : val;                                                // string
      }
        
      if ( keys_last ) {
        // Complex key, build deep object structure based on a few rules:
        // * The 'cur' pointer starts at the object top-level.
        // * [] = array push (n is set to array length), [n] = array if n is 
        //   numeric, otherwise object.
        // * If at the last keys part, set the value.
        // * For each keys part, if the current level is undefined create an
        //   object or array based on the type of the next keys part.
        // * Move the 'cur' pointer to the next level.
        // * Rinse & repeat.
        for (; i <= keys_last; i++) {
          key = keys[i] === '' ? cur.length : keys[i];
          cur = cur[key] = i < keys_last
            ? cur[key] || (keys[i+1] && isNaN(keys[i+1]) ? {} : [])
            : val;
        }
          
      } else {
        // Simple key, even simpler rules, since only scalars and shallow
        // arrays are allowed.
          
        if ($.isArray(obj[key])) {
          // val is already an array, so push on the next value.
          obj[key].push( val );
            
        } else if (obj[key] !== undefined) {
          // val isn't an array, but since a second value has been specified,
          // convert val into an array.
          obj[key] = [obj[key], val];
            
        } else {
          // val is a scalar.
          obj[key] = val;
        }
      }
        
    } else if (key) {
      // No value was defined, so set something meaningful.
      obj[key] = coerce
        ? undefined
        : '';
    }
  });
    
  return obj;
};
})(window.Zepto || window.jQuery);
//顶部Banner幻灯片
$(function(){
	var banner_main = $('.banner_main');
	
	var banner_main1 = banner_main.find('ul');
	var banner_page1 = $('.banner_page');
	
	var banner2 = new Banner(banner_main1, banner_page1);
	
	banner2.auto();
	banner2.hand();
	
   var banner_main1 = $('.noticeBox');
	
	var banner_main2 = banner_main1.find('ul');
	var banner_page2 = $('.tab_page');
	
	var banntab = new Banner(banner_main2, banner_page2);
	
	banntab.auto();
	banntab.hand();
//h5页面幻灯片	
	var banner_main5 = $('.banner_main5');
	
	var banner_main6 = banner_main5.find('ul');
	var banner_page5 = $('.banner_page5');
	
	var banner5 = new Banner(banner_main6, banner_page5);
	
	banner5.auto();
	banner5.hand();		

	
	function init(){
		var w_width = $(window).width();
		
//			banner_main.height(function(){
//				return w_width / 4.2;
//			});			
	}
	
	init();
	
	$(window).resize(function(){
		init();
	});
	
	
	$('.loginPlat').click(function(){
		$('.login').click();
	});
	// 顶部广告条关闭
	$(".topAd .close").click(function(){
		$(".topAd").hide();
	});
});

function Banner(banner_main, banner_page){
	this.banner_main = banner_main;
	this.banner_page = banner_page;
	
	this.banner_main_li = this.banner_main.find('li');
	this.banner_page_li = this.banner_page.find('li');
	
	
	this.bannerLiLength = this.banner_main_li.length; 
	
	this.currentIndex = 0;
	var _this = this;
	
	this.banner_main.css({
		'width': function(){
			return _this.bannerLiLength * 100 + '%'; 
		}
	});
	
	this.bannerWidth = this.banner_main.width();
	this.banner_main_li.css({
		'width': function(){
			return _this.bannerWidth / _this.bannerLiLength;
		}
	});
	
	this.banner_page.css({
		'width': function(){
			return (12+_this.bannerLiLength*18)+"px";
		},
		'margin-left':function(){
			return -(12+_this.bannerLiLength*18)/2+"px";
		}
	});

	
	this.banner_page_li.eq(_this.currentIndex).addClass('cur');

	this.timer;
	this.bannerStop;
	
	$(window).resize(function(){
		_this.bannerWidth = _this.banner_main.width();
	});
}
	
//	function Banner(banner_main, banner_page){
//		this.banner_main = banner_main;
//		this.banner_page = banner_page;
//		
//		this.banner_main_li = this.banner_main.find('li');
//		this.banner_page_li = this.banner_page.find('li');
//		
//		this.bannerWidth = this.banner_main.width();
//		this.bannerLiLength = this.banner_main_li.length; 
//		
//		this.currentIndex = 0;
//		
//		var _this = this;
//		
//		this.banner_page_li.eq(_this.currentIndex).addClass('cur');
//
//		this.timer;
//		this.bannerStop;
//		
//		$(window).resize(function(){
//			_this.bannerWidth = _this.banner_main.width();
//		});
//	}
	// 自动轮播
	Banner.prototype.auto = function(){
		var _this = this;
		this.timer = setInterval(function() {
			
			if(_this.bannerStop) {
				clearInterval(_this.timer);
				return;
			}
			
			_this.currentIndex ++;

			if(_this.currentIndex == _this.bannerLiLength) _this.currentIndex = 0;

			_this.banner_page_li.removeClass('cur').eq(_this.currentIndex).addClass('cur');

			_this.banner_main.animate({
				'left': '-=' + '100%'
			}, function() {
				if(!_this.currentIndex) {
					$(this).css('left', 0);
					_this.banner_main_li.first().css('left', 0);
					_this.banner_main_li.eq(1).css('left', 'auto');
				} else if(_this.currentIndex == _this.bannerLiLength - 1) {
					_this.banner_main_li.first().css('left', _this.bannerWidth);
					_this.banner_main_li.eq(1).css('left', _this.bannerWidth);
				}
			});
		}, 5000);
	}
	// 手动轮播
	Banner.prototype.hand = function(){
		var _this = this;
		this.banner_page_li.hover(function() {
			_this.bannerStop = true;
			clearInterval(_this.timer);

			if($(this).is('.cur')) return;
			_this.banner_page_li.filter('.cur').removeClass('cur');
			$(this).addClass('cur');

			var index = $(this).index();

			if(index == 0 || index == 1) {
				_this.banner_main_li.first().css('left', 0);
				_this.banner_main_li.eq(1).css('left', 'auto');
			}

			_this.currentIndex = index;

			_this.banner_main.stop().animate({
				'left': '-' + index * 100 + '%'
			}, function() {
				if(_this.currentIndex >= _this.bannerLiLength - 1) {
					_this.banner_main_li.first().css('left', _this.bannerWidth);
					_this.banner_main_li.eq(1).css('left', _this.bannerWidth);
				} 		
			});

		}, function(){
			_this.bannerStop = false;
			_this.auto();
		});
	}

//弹出二维码动画
$(function() {
	$(".tabBox .item li .tabImg").live("mouseenter", function() {
		$(this).closest("li").find(".qrcode").animate({
			'left': 0
		}, 300);
	});
	$(".tabBox .item li").live("mouseleave", function() {
		$(this).find(".qrcode").animate({
			'left': 321
		}, 300);
	});
	$(".indexNav span").bind("click", function() {
		$(".dropBox").toggle();
	});
	$(".sinawb").live("mouseenter", function() {
		$(".weibo").fadeIn();
	});
	$(".sinawb").live("mouseleave", function() {
		$(".weibo").fadeOut();
	});
	$(".officewx").live("mouseenter", function() {
		$(".flowerwx").fadeIn();
	});
	$(".officewx").live("mouseleave", function() {
		$(".flowerwx").fadeOut();
	});
	$(".message").bind("mouseenter", function() {
		var $msg = $(this);
		var index = $msg.closest("li").index();
		$(".recommend .i_qf").eq(index).show();
	});
	$(".message").bind("mouseleave", function() {
		var $msg = $(this);
		var index = $msg.closest("li").index();
		$(".recommend .i_qf").eq(index).hide();
	});
	//点击退出按钮动画
	$(".topBar .txt").bind("click", function() {
		$(".topBar .txt").toggleClass("hover1");
	});

	$(".online_layer .float_qq ").bind("click", function() {
		if ($(this).is('.active')) {
			$(this).removeClass('active');
			$(".online_layer").animate({
				'right': 0
			});
		} else {
			$(this).addClass('active');
			$(".online_layer").animate({
				'right': -109
			});
		}
	});

	$(".dingzhi_online_layer .trigger").bind("click", function() {
		if ($(this).is('.active')) {
			$(this).removeClass('active');
			$(".dingzhi_online_layer").animate({
				'right': -120
			});
		} else {
			$(this).addClass('active');
			$(".dingzhi_online_layer").animate({
				'right': 0
			});
		}
	});
});

$(function() {
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$(".back-to-top").fadeIn(1500);
		} else {
			$(".back-to-top").fadeOut(1500);
		}
	});
	
	//当点击跳转链接后，回到页面顶部位置
	$(".back-to-top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	
	// 点击创建即将上线的新游戏的按钮事件
	$(".setNewGame").on("click",function(){
		alert("创建活动失败，请联系客服处理。");
		return;
	});
});

$(function() {
	if (document.referrer) {
		var referrer_array = ["baidu", "135editor", "toutiao", "sogou", "so.com"];
		var from_referrer = $.cookie("from_referrer") || "";
		// 从链接中拿取来源信息
		if (!from_referrer) {
			for (var i = 0; i < referrer_array.length; i ++) {
				if (document.referrer.indexOf(referrer_array[i]) != -1) {
					from_referrer = referrer_array[i];
					// 如果是百度来源，则完善关键词等信息
					// utm_source：渠道来源
					// utm:关键词
					// utm_campaign:投放计划编号
					// utm_medium：post （默认，保留）
					var search = document.location.search.substr(1);
					var params = $.deparam(search);
					var utm_source = params["utm_source"] || from_referrer;
					utm_source = utm_source.replace(".", "_");
					var utm = params["utm"] || "";
					var utm_campaign = params["utm_campaign"] || "";
					var utm_medium = params["utm_medium"] || "";
					from_referrer = utm_source + "." + utm + "." + utm_campaign + "." + utm_medium;
					break;
				}
			}
		}
		// 若无投放，直接读取来源链接作为记录信息
		if (!from_referrer){
			// 如果是空的from_referrer，则此时记录直接来源
			from_referrer = "direct" + ".";
			from_referrer = from_referrer + document.referrer.substr(0, 50).replace(/\./g,"_") + "." + ".";
		}
		if (from_referrer) {
			// 二十四小时过期
			$.cookie("from_referrer", from_referrer, {path: '/', expires: 30});
		}
	}
});

//最新游戏展示改造
$(function(){
	var li = $('.gameNav li');
	for(var i = 0 ; i < li.length ;i++){
		var nav = $('.gameNav')
		li[i].onclick =(function(i){
			 return function(){
			 	//文字样式改变
                 $('.gameNav li').removeClass('active');
                 $('.gameNav li').eq(i).addClass('active');

				 //游戏出现
                 $('.gamelistWrap .gamelist').fadeOut(200);
				var getul = $('.gamelistWrap .gamelist').eq(i).delay(200).fadeIn();
			};
		})(i);
	}

})

