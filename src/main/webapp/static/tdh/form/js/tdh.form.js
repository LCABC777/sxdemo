/*
 * setSelVal('#sel', json.ajly);	//下拉赋值
 * setRadioVal('#radio', true);		//单选赋值
 * setCheckVal('#check', true);		//多选赋值
 * selDisable('#saly',true);		//下拉禁用
 * checkDisable("#check",true);		//多选禁用
 * radioDisable("#radio",true);		//单选禁用
 * inputDisable("#text",true); 		//输入框禁用
 * 注：以上方法 第一个参数是jQuery对象或选择器，并非一定是id。
 * 
 * 下拉表单:
 * 例：<select class="inputSel" multiple="multiple"> 多选下拉
 * 例：<select class="inputSel" data-edit="true"> 可编辑下拉(输入显示匹配选项供选择)
 * 例：<select class="inputSel" data-edit="true" data-diy="true"> 可随意编辑下拉(输入的内容可自成选项供选择)
 */
var jq=jQuery;
var ir='inputRadio',
	ic='inputCheck',
	is='inputSel',
	isw='inputSwitch';
var r='radio',
	rc='radio_checked',
	rd='radio_disable',
	rcd='radio_checked_disable',
	c='checkbox',
	cc='checkbox_checked',
	cd='checkbox_disable',
	ccd='checkbox_checked_disable',
	w='select_box',
	d='select_showbox',
	l='select_option',
	sw='switch',
	swo='switch_on',
	swd='switch_disable',
	swod='switch_on_disable';
	
jq(function(){
	radioInit(jq('.inputRadio'));//单选框	
	checkboxInit(jq('.inputCheck'));//复选框
	selectInit(jq('.inputSel'));//下拉框
	switchInit(jq('.inputSwitch'));//开关
	
	jq('body,.Wdate').click(function(e){
	    if(!jq(e.target).parents('.select_box').length && !jq(e.target).parents('.select_option').length){
	    	jq('.select_box').removeClass('active');
			jq('.select_option').hide();
	    }
	});
	jq('input[readOnly]').keydown(function(e) {
		if(e.keyCode==8){
			e.preventDefault();
		}
	});
	jq('.formswitch').click(function(){
		$(this).toggleClass('formswitch_on');
	});
});

/**
 * 根据父元素对象初始化参数为form的jQuery对象
 * @param $dom
 */
function initFormByParent($dom){
	checkboxInit($dom.find('.inputCheck'));//复选框
	radioInit($dom.find('.inputRadio'));//单选框	
	selectInit($dom.find('.inputSel'));
}

/**
 * 根据 form ID 初始化
 * @param formId
 */
function initForm(formId){
	checkboxInit(jQuery('#'+formId+' .inputCheck'));//复选框
	radioInit(jQuery('#'+formId+' .inputRadio'));//单选框	
	selectInit(jQuery('#'+formId+' .inputSel'));
}

//单选框
function radioInit(obj){	
	var radioBoxs=ifdom(obj);
	radioBoxs.each(function(){
		var o=jq(this),name=o.attr('name'),cAttr=o.attr('checked'),dAttr=o.attr('disabled'),checked,disabled;
		if(cAttr){
			checked=rc;
            jq('.'+ir+'[name="'+name+'"]').siblings('.'+r).removeClass(rc); 
            jq('.'+ir+'[name="'+name+'"]').siblings('.'+ir+'[name="'+name+'"]').removeAttr('checked'); 
			if(dAttr){ disabled=rcd; }else{ disabled=''; }
		}else{
			checked='';
			if(dAttr){ disabled=rd;}else{disabled='';}
		}
		var spanBox=jq('<span class="'+r+' '+checked+' '+disabled+'" name="'+name+'"></span>');
		o.next('.'+r).remove(); 
		o.after(spanBox);
		radioEvent(o.parent());
	});
}
function radioEvent(obj){
	obj.click(function(){
		var spanBox=jq(this).find('.'+r),radioBox=jq(this).find('.'+ir),name=radioBox.attr('name');
		if(radioBox.attr('disabled')){ 
			return; 
		}else{
			if(spanBox.hasClass(rc)){
				return;
			}else{
                jq('.'+ir+'[name="'+name+'"]').removeAttr('checked').next('.'+r).removeClass(rc);
				spanBox.addClass(rc);
				radioBox.attr('checked', 'checked');   // 单选按钮的选中  会让其他同name的checkbox取消选中。
                jq('.inputCheck[name="'+name+'"]').next('.checkbox_checked').removeClass('checkbox_checked');
			}
		}
		if(radioBox.attr("onchange")){
			radioBox.trigger('change');
		}else{
			radioBox.trigger('click');
		}
		return false;
	});
}
//复选框
function checkboxInit(obj)
{
	var checkBoxs=ifdom(obj);
	checkBoxs.each(function(){
		var o=jq(this),name=o.attr('name'),cAttr=o.attr('checked'),dAttr=o.attr('disabled'),checked,disabled;
		if(cAttr){
			checked=cc;
			if(dAttr){ disabled=ccd; }else{ disabled=''; }
		}else{
			checked='';
			if(dAttr){ disabled=cd; }else{ disabled=''; }
		}
		var spanBox=jq('<span class="'+c+' '+checked+' '+disabled+'" name="'+name+'"></span>');
		o.next('.'+c).remove(); 
		o.after(spanBox);
		checkBoxEvent(o.parent());
	});
}
function checkBoxEvent(obj){
	obj.click(function(e){
		var spanBox=jq(this).find('.'+c);
		var checkBox=jq(this).find('.'+ic);
		if(checkBox.attr('disabled')){ 
			return; 
		}else{
			if(spanBox.hasClass(cc)){
				spanBox.removeClass(cc);
				checkBox.removeAttr('checked');
			}else{
				spanBox.addClass(cc);
				checkBox.attr('checked', 'checked');
			}
		} 
		checkBox.trigger('change');
		return false;
	});
}
//下拉框
function selectInit(obj)
{
	var selects=ifdom(obj);
	selects.each(function(){
		var $sel=jq(this),
			className=$sel.attr('class'),
			$selPrev=$sel.prev('.'+w),
			disabled=$sel.attr('disabled')=='disabled'?'sel_disabled':'',
			readonly=$sel.attr('disabled')=='disabled'?'readonly':'',
			edit=$sel.attr('data-edit'),
			$wrap=jq('<div class="'+w+' '+disabled+'">'+
					'<div class="'+d+'"></div>'+
					'</div>');
		$selPrev.remove(),jq('.'+l+'[data-sel="'+$sel.attr('id')+'"]').remove(),$sel.before($wrap);
		if(className.length>10){
			className=className.replace(is+' ','');
			$wrap.addClass(className);
		}
		if($sel[0].style.width){$wrap.css('width',$sel[0].style.width);}
		if(edit){
			$wrap.find('.'+d).html('<input class="select_input" type="text" '+readonly+' >');
		}
		var options=$sel.find('option'),
			selected_option=options.filter(':selected'),
			val=[],txt=[];
		for(var i=0;i<selected_option.length;i++) 
		{ 
			val.push(selected_option.eq(i).attr('value'));
			txt.push(selected_option.eq(i).text());
		} 
		if(val.join(',')==''){
			if(edit){
				$wrap.find('.'+d).children().addClass('sel_tip').val('');
				if(txt.join(',')!=''){
					$wrap.find('.'+d).children().attr('placeholder',txt.join(','));
				}
			}else{
				$wrap.find('.'+d).addClass('sel_tip').text(txt.join(','));
			}	
		}else{
			if(edit){  
				$wrap.find('.'+d).children().val(txt.join(','));
			}else{  
				$wrap.find('.'+d).text(txt.join(','));  
			}
		}
		selectEvent($sel);
	});
}
function selectEvent($sel){
	var $wrap=$sel.prev(),
		$div=$wrap.find('.'+d),
		$input=$div.find('input'),
		$list=jq('.'+l+'[data-sel="'+$wrap.attr('data-index')+'"]'),
		mul=$sel.attr('multiple');
	$div.click(function(){
		if($sel.attr('disabled')){
			return;
		}else{
			if($wrap.hasClass('active')){
				hideList($wrap,$list);
				//$input.blur();
			}else{
				if(!$wrap.attr('data-index')){
					$wrap.attr('data-index',inputUuid());
					createOptions($sel);
					$list=jq('.'+l+'[data-sel="'+$wrap.attr('data-index')+'"]');
				}
				$list.children().removeClass('sel_hide');
				showList($wrap,$div,$list);
			}
		}
	});
	$div.children().on('focus',function(){
		$(this).removeClass('sel_tip');
	}).on('keyup',function(e){
		if(jq(this).attr('readonly')){
			return false;
		}
		if(e.keyCode){
			var hiddens = 0,
				inputVal= jq(this).val(),
				search = inputVal.toLowerCase();
			if(mul){
				var checkedVal = '';
				if(search.indexOf(',')>0){
					searchVal=inputVal.substring(inputVal.lastIndexOf(',')+1);
					search=searchVal.toLowerCase();
					checkedVal=inputVal.substring(0,inputVal.lastIndexOf(','));
				}
				search=jq.trim(search);
				if(!search){
					if(!$sel.find('option[value=""]').length) {
						$sel.append(jq('<option value=""></option>'));
					}
					if(checkedVal!=''){
						var vals=checkedVal.split(','),trueVals=[],selectedIndex;
			    		for(var len=0;len<vals.length;len++){
			                if(vals[len]){
			        			$list.find('li').each(function(){
			        				if(jq(this).text()==vals[len] && jq(this).hasClass('selected')){
			        					trueVals.push(vals[len]);
			        				}
			        			});
			                }
			    		}
			    		jq(this).val(trueVals.join(',')+',');
					}
			    }
				$list.find('li.sel_visible').removeClass('sel_hide');
				var addli=jq('<li class="sel_none">无匹配项</li>');
				hiddens = $list.find('li.sel_visible').filter(function (i, li) { 
					return jQuery(li).text().toLowerCase().indexOf(search) < 0; 
				}).addClass('sel_hide').length;
				if ($list.find('li.sel_visible').length == hiddens){
					if(!$list.find('.sel_none').length){
						$list.append(addli);
					}
				}else{
					$list.show();
					jq('.sel_none').remove();
				}
				setListHeight($div,$list);
			}else{
				search=jq.trim(search);
				if(!search){
					if(!$sel.find('option[value=""]').length) {
						$sel.append(jq('<option value=""></option>'));
					}
			    }	
				$list.find('li.sel_visible').removeClass('sel_hide');
				var addli=jq('<li class="sel_none">无匹配项</li>');
				hiddens = $list.find('li.sel_visible').filter(function (i, li) { 
					return jQuery(li).text().toLowerCase().indexOf(search) < 0; 
				}).addClass('sel_hide').length;
				if ($list.find('li.sel_visible').length == hiddens){
					if(!$list.find('.sel_none').length){
						if($sel.attr('data-diy')!='true'){
							$list.append(addli);
						}else{
							$list.find('li').removeClass('selected');
							$list.hide();
							if(!$sel.find('.addOption').length) {
								$sel.append(jq('<option class="addOption"></option>'));
							}
							$sel.find('.addOption').attr('value',inputVal).text(inputVal);
							$sel.val(inputVal);
						}
					}
				}else{
					$list.show();
					jq('.sel_none').remove();
				}
				setListHeight($div,$list);
			}
		}
	}).on('blur',function(){
		if(jq(this).attr('readonly')){
			return false;
		}
		if($sel.attr('data-diy')!='true'){
			$list.hide();
			$list.find('li.sel_visible').removeClass('sel_hide');
			jq('.sel_none').remove();
			var vals=[],txts=[];
			$sel.find('option:selected').each(function(){
				vals.push($(this).attr('value'));
				txts.push($(this).text());
			});
			if(vals==''){
				jq(this).addClass('sel_tip').val('').attr('placeholder',txts.join(',')); 
			}else{
				jq(this).removeClass('sel_tip').val(txts.join(',')); 
			}
		}
		$sel.trigger('change');
	});
}
function createOptions($sel){
	var $wrap=$sel.prev(),
		options=$sel.find('option').not('.addOption'),
		multiple=$sel.attr('multiple')=='multiple'?'sel_multiple':'',
		$list=jq('<ul class="'+l+' '+multiple+'" data-sel="'+$wrap.attr('data-index')+'" style="width:'+$wrap.outerWidth()+'px;z-index:99999999;"></ul>').appendTo('body');
	var liHtml='';
	for(var n=0;n<options.length;n++){
		var selected=options.eq(n).is(':selected')?'selected':'',
			visible=options.eq(n).attr('disabled')?'':'sel_visible',
			tip=options.eq(n).attr('value')==''?'sel_tip':'';
		liHtml+='<li class="'+visible+' '+tip+' '+selected+'" data-value="'+options.eq(n).attr("value")+'">'+options.eq(n).text()+'</li>';
	}
	$list.html(liHtml);
	var $li=$list.children('.sel_visible');
	$li.on('mousedown',function(event){
		event.preventDefault();
		if($sel.attr('multiple')){
			jq(this).toggleClass('selected');
			var val=[],
				lied=$list.find('.selected');
			for(var i=0;i<lied.length;i++){
				val.push(lied.eq(i).attr('data-value'));
			}
			setSelVal($sel,val.join(','));
		}else{
			var val=jq(this).attr('data-value');
			setSelVal($sel,val);
			hideList($wrap,$list);
		}
	});
	$li.on('mouseover',function(e){
		jq(this).addClass('hover');
		var txtW=jq(this).text().length*parseInt(jq(this).css('font-size'));
		if(txtW>jq(this).width()){
			var xx=e.pageX+20;
			var yy=e.pageY+5;
			jq('body').append('<span class="tips" style="font-size:12px;padding:0 5px; border:1px solid #dee5ef; background-color: #f7faff; position:absolute; top:'+yy+'px; left:'+xx+'px; z-index:99999999;">'+jq(this).text()+'</span>');
		}
	}).on('mouseout',function(){
		jq(this).removeClass('hover');
		jq('.tips').remove();
	});
}
function showList($wrap,$div,$list){
	jq('.select_box').removeClass('active');
	jq('.select_option').hide();
	if($list.find('li.sel_visible').length > 0) {
		$wrap.addClass('active');
		$list.show();
		setListHeight($div,$list);
	}
}
function hideList($wrap,$list){
	$wrap.removeClass('active');
	$list.hide();
}

function setListHeight($div,$list){
	var optionHeight=$list.find('li.sel_visible').height(),
		optionLength=$list.find('li.sel_visible').not('.sel_hide').length,
		listHeight=optionHeight*optionLength,
		maxSize=$div.parent().siblings('select').attr('data-size');
	var maxHeight;
	if(!maxSize){
		maxHeight=200;
	}else{
		maxHeight=maxSize*optionHeight;
	}
	if(listHeight>maxHeight)
	{
		$list.css('height',maxHeight+'px');
	}else{
		$list.css('height','auto');
	}
	var eventType = 'mousewheel';
	if (document.mozHidden !== undefined) {
	    eventType = 'DOMMouseScroll';
	}
	jq(document).not($list).on(eventType, function(event) {
		hideList($div.parent(),$list);
	});
	$list.on(eventType, function(event) {
		event.stopPropagation();
	    var scrollTop = this.scrollTop,
	        scrollHeight = this.scrollHeight,
	        height = this.clientHeight;
	
	    var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        
	
	    if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
	        this.scrollTop = delta > 0? 0: scrollHeight;
	        event.preventDefault();
	        return false;
	    }        
	});
    var parentHeight = jq(window).height();
    if(!parentHeight){
        parentHeight = jq(document).height();
    }
	var topHeight=$div.offset().top-jq(window).scrollTop()+$list.height()+$div.outerHeight();   //计算出 list 的底部离window顶部高度
    var botHeight=($div.offset().top-jq(window).scrollTop()) - $list.height();          //计算下拉框顶部离window顶部距离 与 list之差
	$list.css('left',$div.offset().left-1)
	if(topHeight>parentHeight){    //高度超出父元素总高度（window） 则显示在上方
        if(botHeight>0){
		    $list.css('top',$div.offset().top-$list.height());
            //$list.css('top',-$list.height()-11);  // 此行替换上行 可调整下拉选择框的位置是紧挨文字or紧挨边框
        }else{
            //上方高度不够 需要重新计算list高度
            if((parentHeight-topHeight) >= botHeight){   //下方高度比上方大 则显示在下方
                $list.css('height', $list.height() + (parentHeight - topHeight));   //计算差值 调低list高度
                $list.css('top',$div.offset().top+$div.outerHeight());
                //$list.css('top',$div.outerHeight()+9);
            }else{  //上方高度比下方大
                $list.css('height', $list.height() + botHeight);    //计算差值 调低list高度
                $list.css('top',$div.offset().top-$list.height());
                //$list.css('top',-$list.height()-11);
            }
        }
	}else{
		$list.css('top',$div.offset().top+$div.outerHeight());
	}
}

//开关
function switchInit(obj){
	var switchBoxs=ifdom(obj);
	switchBoxs.each(function(){
		var o=jq(this),name=o.attr('name'),txtstr=o.attr('data-text'),cAttr=o.attr('checked'),dAttr=o.attr('disabled'),checked,disabled;
		var txtarry=txtstr.split('/'), valtxt;
		if(cAttr){
			checked=swo; 
			valtxt=txtarry[1];
			if(dAttr){ disabled=swod; }else{ disabled=''; }
		}else{
			checked='';
			valtxt=txtarry[0];
			if(dAttr){ disabled=swd;}else{disabled='';}
		}
		var switchBox=jq('<span class="'+sw+' '+checked+' '+disabled+'" name="'+name+'" data-text="'+txtstr+'"><em>'+valtxt+'</em></span>');
		o.next('.'+sw).remove(); 
		o.after(switchBox);
		switchEvent(o.next());
	});
}
function switchEvent(obj){
	obj.click(function(e){
		var switchBox=jq(this),
			checkBox=switchBox.prev(),
			txtarry=checkBox.attr('data-text').split('/');
		if(checkBox.attr('disabled')){ 
			return; 
		}else{
			if(switchBox.hasClass(swo)){
				switchBox.removeClass(swo).find('em').text(txtarry[0]);
				checkBox.removeAttr('checked');
			}else{
				switchBox.addClass(swo).find('em').text(txtarry[1]);
				checkBox.attr('checked', 'checked');
			}
		} 
		checkBox.trigger('change');
		return false;
	});
}
//判断dom是元素还是对象
function ifdom(obj){
	var domObj;
	if(typeof(obj) != "object"){ domObj = jq(obj); }else{ domObj=obj; }
	return domObj;
}
//动态设置单选框选中
function setRadioVal(obj,value){
	var radioBox=ifdom(obj),
		spanBox=radioBox.next(),
		name=radioBox.attr('name'),
		otherRadio=jq('input[type="radio"][name="'+name+'"]').not(radioBox),
		otherSpan=otherRadio.next();
	if(value==true){
		spanBox.addClass(rc);
		otherRadio.attr('checked',false);
		otherSpan.removeClass(rc);
	}else{
		spanBox.removeClass(rc);
	}
    radioBox.attr('checked',value);
}
//单选框不可用
function radioDisable(obj,value){
	var radioBox=ifdom(obj),
		spanBox=radioBox.next(),
		cAttr=radioBox.attr('checked');
	radioBox.attr('disabled',value);
	if(value==true){
		if(cAttr){ spanBox.addClass(rcd); }else{ spanBox.addClass(rd); }
	}else{
		if(cAttr){ spanBox.removeClass(rcd); }else{ spanBox.removeClass(rd); }
	}
}
//动态设置复选框选中
function setCheckVal(obj,value){
	var checkBox=ifdom(obj),
		spanBox=checkBox.next();
	checkBox.attr('checked',value);
	if(value==true){ spanBox.addClass(cc); }else{ spanBox.removeClass(cc); }
}
//复选框不可用
function checkDisable(obj,value){
	var checkBox=ifdom(obj),
		spanBox=checkBox.next(),
		cAttr=checkBox.attr('checked');
	checkBox.attr('disabled',value);
	if(value==true){
		if(cAttr){ spanBox.addClass(ccd); }else{ spanBox.addClass(cd); }
	}else{
		if(cAttr){ spanBox.removeClass(ccd); }else{ spanBox.removeClass(cd); }
	}
}
//动态设置选中下拉框值
function setSelVal(obj,value,triggerChange){
	var selObj=ifdom(obj);
	if(selObj.attr('multiple')){
	   	var selDiv=selObj.prev(),
	   		selList=jq('.select_option[data-sel="'+selDiv.attr("data-index")+'"]');
        if(!value){
            selObj.find('option').attr('selected',false);
            selList.find('li').removeClass('selected');
            selObj.val('');
            if(selObj.attr('data-edit')){
    			selDiv.find('.select_input').addClass('sel_tip').val('');
    		}else{
    			selDiv.find('.select_showbox').addClass('sel_tip').text('');
    		}
        }else{
            var vals=value.split(',');
    		var strs = [],selectedIndex;
    		selObj.find('option').attr('selected',false);
    		selList.find('li').removeClass('selected');
    		for(var len=0;len<vals.length;len++){
                if(vals[len]){
        			selObj.find('option').each(function(){
        				if(jq(this).attr('value')==vals[len]){
        					selectedIndex=jq(this).index();
        					strs.push(jq(this).text());
        				}
        			});
        			selObj.find('option').eq(selectedIndex).attr('selected',true);
        			selList.find('li').eq(selectedIndex).addClass('selected');
                }
    		}
    		if(selObj.attr('data-edit')){
    			selDiv.find('.select_input').removeClass('sel_tip').val(strs.join(','));
    		}else{
    			selDiv.find('.select_showbox').removeClass('sel_tip').text(strs.join(','));
    		}
        }
	}else{
		selObj.val(value);
		var selDiv=selObj.prev(),
			selList=jq('.select_option[data-sel="'+selDiv.attr("data-index")+'"]'),
			val=selObj.find('option:selected').val()
			txt=selObj.find('option:selected').text(),
			selectedIndex=selObj.find('option:selected').index();
		if(selObj.attr('data-edit')){
			selDiv.find('.select_input').val(txt);
			if(!value){
				selDiv.find('.select_input').addClass('sel_tip').val('');
				if(txt!=''){
					selDiv.find('.select_input').attr('placeholder',txt);
				}
			}else{
				selDiv.find('.select_input').removeClass('sel_tip');
			}
		}else{
			selDiv.find('.select_showbox').text(txt);
			if(!value){
				selDiv.find('.select_showbox').addClass('sel_tip');
			}else{
				selDiv.find('.select_showbox').removeClass('sel_tip');
			}
		}
		selList.find('li').removeClass('selected');
		selList.find('li').eq(selectedIndex).addClass('selected');
		if(selObj.attr('data-diy') && val!=value){
			selObj.find('option').attr('selected',false);
			selList.find('li').removeClass('selected');
			if(!selObj.find('.addOption').length) {
				selObj.append(jq('<option class="addOption"></option>'));
			}
			selObj.find('.addOption').attr('value',value).text(value);
			selObj.val(value);
			selDiv.find('.select_input').val(value);
		}
	}
	if(triggerChange !=false){
		selObj.trigger('change');
	}
}
// 设置输入框禁用(text) 需要把td加背景色
function inputDisable(obj, value){
	var selObj=ifdom(obj);
	selObj.attr('disabled',value);
	var selDiv=selObj.parentsUntil('td');
	if(value==true){
		selDiv.addClass('disablecolor');
        selObj.addClass('disablecolor');
	}else{
		selDiv.removeClass('disablecolor');
        selObj.removeClass('disablecolor');
	}
}

//下拉框不可用
function selDisable(obj,value){
	var selObj=ifdom(obj);
	selObj.attr('disabled',value);
	var selDiv=selObj.prev();
	if(value==true){
		selDiv.addClass('sel_disabled');
		selObj.parent().addClass('disablecolor');
        if(selObj.attr('data-edit')){
            selDiv.find('.select_input').attr('readonly','readonly'); 
        } 
	}else{
		selDiv.removeClass('sel_disabled');
		selObj.parent().removeClass('disablecolor');
        if(selObj.attr('data-edit')){ 
            selDiv.find('.select_input').removeAttr('readonly'); 
        } 
	}
}
//开关不可用
function swichDisable(obj,value){
	var checkBox=ifdom(obj),
		switchBox=checkBox.next(),
		cAttr=checkBox.attr('checked'),
		txtarry=checkBox.attr('data-text').split('/');
	checkBox.attr('disabled',value);
	if(value==true){
		if(cAttr){ 
			switchBox.addClass(swod);
			switchBox.find('em').text(txtarry[1]);
		}else{ 
			switchBox.addClass(swd);
			switchBox.find('em').text(txtarry[0]);
		}
	}else{
		if(cAttr){ 
			switchBox.removeClass(swod); 
			switchBox.find('em').text(txtarry[1]);
		}else{ 
			switchBox.removeClass(swd); 
			switchBox.find('em').text(txtarry[0]);
		}
	}
}
//动态设置开关状态
function setSwichVal(obj,value){
	var checkBox=ifdom(obj),
		switchBox=checkBox.next(),
		txtarry=checkBox.attr('data-text').split('/');
	checkBox.attr('checked',value);
	if(value==true){ 
		switchBox.addClass(swo).find('em').text(txtarry[1]); 
	}else{ 
		switchBox.removeClass(swo).find('em').text(txtarry[0]);
	}
}
function inputUuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}