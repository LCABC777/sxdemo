var mygrid;
$(function () {
    resizeHeight();
    $(window).resize(function(){ resizeHeight(); });
    //类型
    $('.chooseType').find('a[data-type]').click(function(){
        var type=$(this).attr('data-type');
        $(this).addClass('active').siblings().removeClass('active');
        $('.search_result').hide();
        $('.search_result[data-for="'+type+'"]').show();
    });
    //grid
    mygrid = new dhtmlXGridObject('jcdxGrid');
    mygrid.setImagePath('/sx-demo/static/plugg/dhtmlx/dhtmlxGrid/codebase/imgs/');
    mygrid.setHeader("选项,序号,姓名,性别,民族,出生日期,职务,干部管辖层级,工作单位");
    mygrid.setInitWidths("40,50,100,60,100,100,100,*,*");
    mygrid.setColTypes("ch,ro,ro,ro,ro,ro,ro,ro,ro");
    mygrid.setColAlign("center,center,center,center,center,center,center,center,center");
    mygrid.setSkin("tdh_colour");
    mygrid.init();
    mygrid.loadXML("/sx-demo/xfdj/getJcdx.do");
})

//重置div高度
function resizeHeight(){
    var resultH=$('.container').height()-$('.tdh_form_search').outerHeight();
    $('.search_result').height(resultH);
    $('.gridbox').height(resultH-$('.page').outerHeight());
}