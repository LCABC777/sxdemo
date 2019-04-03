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
            var prefix = '#' + xfbh + 'zrr' + formId;
            //姓名
            var name = newGrid.cells(currentId,2).getValue();
            $(prefix + 'xm').val(name);
            //设置性别单选框
            var xb = newGrid.cells(currentId,3).getValue();
            //设置民族下拉选
            var mz = newGrid.cells(currentId,4).getValue();
            //设置csrq
            var csrq = newGrid.cells(currentId,5).getValue();
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

function addZrr(newFormId){
    addForm(newFormId,'addZrr.do','bfyrDiv','zrr')
}
function addDw(newFormId){
    addForm(newFormId,'addDw.do','bfyrDiv','dw')
}
function addSjsg(newFormId){
    addForm(newFormId,'addSjsg.do','bfyrDiv','sjsg')
}
function addFyr(newFormId){
    var xfbh = $('#xfbh').val();
    $('#formIdXx')
    $.ajax({
        type:"get",
        url:"addFyr.do",
        async:false,
        success:function(data){
            var obj = $(data);
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



var formId=0
function addForm(newFormId,requestUrl,div,formType) {
    $.ajax({
        type:"get",
        url:requestUrl,
        async:false,
        success:function(data){
            var obj=$(data);
            var xfbh = $('#xfbh').val();
            $('#'+div).append(obj);
            initFormByParent(obj);
            if(newFormId == null){
                formId = formId + 1;
                $('#'+formType).attr('id', xfbh + formType + formId);
                changeNameAndId(xfbh + formType + formId,formType);
            }else{
                $('#'+formType).attr('id',newFormId);
                changeNameAndId(newFormId,formType);
            }
        }
    })
}

//给表单取值
function getXfdjInfo(){
    var xfbh = $('#xfbh').val();
    $.ajax({
        type:"post",
        url:"getXfdjByXfbh.do",
        data:{
            "xfbh":xfbh,
        },
        //dataType:"json",
        success:function(data){
            //若data为null，则以该xfbh为主键的记录不存在
            if($.isEmptyObject(data)){
                alert("信访编号 " + xfbh + " 未被保存");
            }else{
                console.log(data);
                //给各个表单赋值
                giveJbxxForm(data[0][0]);
                giveZrrForm(data[1]);
                giveDwForm(data[2]);
                giveSjsgForm(data[3]);
                giveFyrForm(data[4]);
                giveSfz(data[5]);
                giveDwzz(data[6]);
                giveSjsgzz(data[7]);
            }
        },
        error:function(e){
            alert("表单赋值有误");
            console.log(e);
        }
    })
}

