$(function () {
    //编辑更多信息
    $(document).on("click",".tdh_btn_view",function(){
        var tr = $(this).parents('.xfdj_box').find('tr.tr_hide');
        if(tr.length){
            tr.toggle();
            if(tr.css('display')=='none'){
                $(this).html('<i class="tdh_icon icon_edit"></i>展开更多信息');
            }else{
                $(this).html('<i class="tdh_icon icon_edit"></i>隐藏更多信息');
            }
        }
    })
})

//选择监察对象
function showJcdx() {
    layer.open({
        type: 2,
        title: '从监察对象中选择',
        area: ['1020px', '614px'],
        btn: '确定',
        content: 'toJcdxPage.do',
        yes: function(index,layero){
            var newGrid = $(layero).find("iframe")[0].contentWindow.mygrid;
            var xfbh = $('#xfbh').val();
            var currentId = newGrid.getSelectedId();
            if (currentId!=null){
                addZrr();
            }
            var name = newGrid.cells(currentId,2).getValue();
            var prefix = '#' + xfbh + 'zrr' + formId;
            $(prefix + 'xm').val(name);
            //设置性别单选框
            var xb = newGrid.cells(currentId,3).getValue();
            //设置民族下拉选
            var mz = newGrid.cells(currentId,4).getValue();
            //设置csrq
            var csrq = newGrid.cells(currentId,5).getValue();
            //出生日期
            $(prefix + 'csrq').val(csrq);
            //设置职务
            var zw = newGrid.cells(currentId,6).getValue();
            //设置干部管辖层级
            var gbgxcj = newGrid.cells(currentId,7).getValue();
            //设置工作单位
            var dw = newGrid.cells(currentId,8).getValue();
            //特殊按钮赋值
            if("男" == xb){
                setRadioVal(prefix + 'nan', true);
            }else{
                setRadioVal(prefix + 'nv', true);
            }
            setSelVal($(prefix + 'mz'),mz);
            setSelVal($(prefix + 'zw'),zw);
            setSelVal(prefix + 'gbgxcj', gbgxcj);
            $(prefix + 'gzdw').val(dw);
            layer.close(index);
        }
    });
}

//添加自然人
var formId=0
function addZrr(currentId) {
    var xfbh = $('#xfbh').val();
    $.ajax({
        type: "get",
        url: "addZrr.do",
        async: false,
        success: function (data) {
            var obj=$(data);
            $('#bfyrDiv').append(obj);
            //给dom对象,初始化表单
            initFormByParent(obj);
            if (currentId == null) {
                formId = formId + 1;
                $('#zrr').attr('id', xfbh + 'zrr' + formId);
                changeNameAndId(xfbh + 'zrr' + formId, 'sfz');
            } else {
                $('#zrr').attr('id', currentId);
                changeNameAndId(currentId, 'sfz');
            }
        }
    })
}

//添加单位
function addDw(currentId){
    var xfbh = $('#xfbh').val();
    $.ajax({
        type:"get",
        url:"addDw.do",
        async:false,
        success:function(data){
            var obj=$(data);
            $('#bfyrDiv').append(obj);
            initFormByParent(obj);
            if(currentId == null){
                formId = formId + 1;
                $('#dw').attr('id', xfbh + 'dw' + formId);
                changeNameAndId(xfbh + 'dw' + formId,'dwzj');
            }else{
                $('#dw').attr('id', currentId);
                changeNameAndId(currentId,'dwzj');
            }
        }
    })
}

//添加事件事故
function addSjsg(newFormId){
    var xfbh = $('#xfbh').val();
    $.ajax({
        type:"GET",
        url:"addSjsg.do",
        async:false,
        success:function(data){
            var obj=$(data);
            $('#bfyrDiv').append(obj);
            initFormByParent(obj);
            if(newFormId == null){
                formId = formId + 1;
                $('#sjsg').attr('id', xfbh + 'sjsg' + formId);
                changeNameAndId(xfbh + 'sjsg' + formId,'sjzj');
            }else{
                $('#sjsg').attr('id', newFormId);
                changeNameAndId(newFormId,'sjzj');
            }
        }
    })
}

//添加反映人
function addFyr(newFormId){
    var xfbh = $('#xfbh').val();
    $.ajax({
        type:"get",
        url:"addFyr.do",
        async:false,
        success:function(data){
            var obj=$(data);
            $('#fyrDiv').append(obj);
            initFormByParent(obj);
            if(newFormId == null){
                formId = formId + 1;
                $('#fyr').attr('id', xfbh + 'fyr' + formId);
                changeNameAndId(xfbh + 'fyr' + formId,'');
            }else{
                $('#fyr').attr('id',newFormId);
                changeNameAndId(newFormId,'');
            }
        }
    })
}

function addForm(newFormId,requestUrl,formType) {
    $.ajax({
        type:"get",
        url:requestUrl,
        async:false,
        success:function(data){
            var xfbh = $('#xfbh').val();
            $('#'+formType+'Div').append($(data));
            initFormByParent($(data));
            if(newFormId == null){
                formId = formId + 1;
                $('#'+formType).attr('id', xfbh + formType + formId);
                changeNameAndId(xfbh + formType + formId,'');
            }else{
                $('#'+formType).attr('id',newFormId);
                changeNameAndId(newFormId,'');
            }
        }
    })
}