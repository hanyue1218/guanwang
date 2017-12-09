/**
 * Created by Administrator on 2017/4/19.
 */
function goTop() {
	$('html,body').animate({ 'scrollTop': 0 }, 300);
}
$(function() {
	var cW = $('.container').width(),
		caseW = $('.case-item').width(),
		caseH = caseW * 335 / 480;
	$('.case-item').height(caseH);
})