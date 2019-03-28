/*
 * 新建form表单时，修改所有组件的name
 */
function changeNameAndId(formId,name){
    $('#' + formId + ' input[class="inputText"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        $(this).attr('name',newId);
    });
    $('#' + formId + ' input[class="inputText necessary"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        $(this).attr('name',newId);
    });
    $('#' + formId + ' select[class="inputSel"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        $(this).attr('name',newId);
    });
    $('#' + formId + ' select[class="inputSel necessary"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        $(this).attr('name',newId);
    });
    $('#' + formId + ' input[class="inputCheck"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        var oldName = $(this).attr("name");
        $(this).attr('name',formId + oldName);
    });
    $('#' + formId + ' input[class="Wdate inputText"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        var oldName = $(this).attr("name");
        $(this).attr('name',formId + oldName);
    });
    //修改多选框span
    $('#' + formId + ' span[name="' + name + 'Check"]').each(function(){
        var oldName = $(this).attr("name");
        var newName = formId + oldName;
        $(this).attr('name',newName);
    });
    $('#' + formId + ' input[class="inputRadio"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        var oldName = $(this).attr("name");
        $(this).attr('name',formId + oldName);
    });
    $('#' + formId + ' input[class="inputRadio necessary"]').each(function(){
        var newId = formId + $(this).attr("id");
        $(this).attr('id',newId);
        var oldName = $(this).attr("name");
        $(this).attr('name',formId + oldName);
    });
    //修改性别单选框span
    $('#' + formId + ' span[name="xb"]').each(function(){
        $(this).attr('name',formId + 'xb');
    });
    //修改署名单选框span
    $('#' + formId + ' span[name="sm"]').each(function(){
        $(this).attr('name',formId + 'sm');
    });
}

/*
 * 判断form表单存在数量
 */
function checkNum(nameHide){
    var num = $('input[name="' + nameHide + '"]').length;
    return num;
}