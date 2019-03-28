;(function($) {
	var table = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
            data: '',
            dataType:'',
	    	fixed:false,
	    	fixedAlign:'',
	    	fixedNumber:'',
	    	sort:false,
	    	openAll:false,
	    	height:0
        },
        this.options = $.extend({}, this.defaults, opt)
    }
	table.prototype = {
		cell: function(){
			this.$element.empty();
        	if(this.options.fixed){ 
        		this.$element.siblings('.statis_table_fixed').find('.statis_table_body').empty();
        	}
			if(this.options.data.length){ this.init(this.options.data); }
			if(this.options.sort){ this.sort(); }
		},
        init: function(data) {
        	this.$element.empty();
        	var dataType=this.options.dataType,
        		obj=$('<table></table>').appendTo(this.$element),
        		col=this.$element.siblings('.statis_table_header').find('.statis_setWidth'),
        		openAll=this.options.openAll;
        	var _this=this;
        	obj.append(col.clone());
            $.each(data,function(index,item){
            	var tr = $('<tr>'),open,children,total;
			    $.each(item,function(name,val){
			    	if(name=="id"){
			    		return;
			    	}else if(name=="open"){
			    		open = val; return open;
			    	}else if(name=="z_children"){
			    		children = val; return children;
			    	}else if(name=="total"){
			    		total = val; tr.attr('data-total',val); return total;
			    	}else if(name=="lock"){
			    		return;
			    	}else{
                        if (typeof val === 'object') {
                            tr.append('<td title="' + val.text + '" style="cursor:pointer" onclick="' + (val.onclick ? val.onclick : '') + '">' +val.text +'</td>')
                        } else {
                            tr.append('<td title="' + val + '">' + val + '</td>');
                        }
			    	}
			    });
			    obj.append(tr);
			    if(openAll){open=true;}
            	if(dataType=="multirow"){
            		tr.addClass('statis_ev');
            		tr.find('td').eq(0).css('text-align', 'left').attr('colspan','3');
            		if(total){ tr.find('td').eq(0).attr('colspan','2'); }
            		if(children){
            			var arrowTd=tr.find('td').eq(0).addClass('statis_arrow');
            			if(open){
            				_this.creatNodes(arrowTd,children,1);
            			}
            			arrowTd.click(function(){
            				_this.creatNodes($(this),children,1);
            			});
            		}
            	}
			});
			var tTrs=obj.find('tr[data-total]');
			if(tTrs.length){
				obj.find('tr[data-total]').eq(0).prepend('<td rowspan="'+tTrs.length+'">'+tTrs.attr('data-total')+'</td>');
			}
			_this.scroll();
			if(this.options.fixed){ _this.addFixed(); }
			obj.find('td').click(function(){
				$(this).parent('tr').addClass('statis_active').siblings().removeClass('statis_active');
			});
			
      	},
      	creatNodes: function(obj,nodes,num){
      		var _this=this;
  			var ptr=obj.parent(),
  				ptrNext=ptr.next(),
  				e=ptr.attr('class'),
  				o=e=='statis_ev'?'statis_odd':'statis_ev',
  				cur=obj.parent().index()+1,
        		openAll=_this.options.openAll;
			if(obj.hasClass('statis_arrow_up')){
				obj.removeClass('statis_arrow_up');
				var nodeLength=nodes.length;
				for(var i=0;i<nodes.length;i++){
					if(ptr.nextAll('.'+o).eq(i).children().eq(0).hasClass('statis_arrow_up')){
						nodeLength+=nodes[i].z_children.length;
					}
				}
				_this.$element.find('tr').slice(cur, cur+nodeLength).remove();
				
			}else{
				obj.addClass('statis_arrow_up');
				//nodes.sort(function(a,b){return 1-2});
				//nodes.sort(function(a,b){return b.id-a.id});
				var ctrHtml=$('<div></div>');
				$.each(nodes,function(index,odd){
					var tr = $('<tr class="'+o+'">'),open,children,total;
				    $.each(odd,function(name,val){
				    	if(name=="id"){
				    		return;
				    	}else if(name=="open"){
				    		open = val; return open;
				    	}else if(name=="z_children"){
				    		children = val;
				        	return children;
				    	}else if(name=="lock"){
			    			return;
			    		}else{
				    	   if (typeof val === 'object') {
                            tr.append('<td title="' + val.text + '" style="cursor:pointer" onclick="' + (val.onclick ? val.onclick : '') + '">' +val.text +'</td>')
                           } else {
                            tr.append('<td title="' + val + '">' + val + '</td>');
                           }
				    	}
				    });
				    //ptr.after(tr);
				    if(ptrNext.length){
				    	ptrNext.before(tr);
				    }else{
				    	ptr.parents('table').append(tr);
				   	}
        			tr.find('td').eq(0).css({'text-align': 'left','text-indent': num*14+'px'}).attr('colspan','3');
				    if(openAll){open=true;}
				    if(children){
						var arrowTd=tr.find('td').eq(0).addClass('statis_arrow');
            			if(open){
            				_this.creatNodes(arrowTd,children,num+1);
            			}
						arrowTd.click(function(){
            				_this.creatNodes($(this),children,num+1);
            		});
					}
				});
			}
			_this.scroll();
      	},
	    scroll:function(){
	    	var _this=this;
	    	var height=_this.options.height,
	    		eleHeader= _this.$element.siblings('.statis_table_header').children();
	    	setbodyH();
	    	function setbodyH(){
	    		if(_this.$element.children().height()>height){
		    		eleHeader.addClass('statis_mpr')
		    	}else{
		    		eleHeader.removeClass('statis_mpr');
		    	}
    			_this.$element.css({
    				width:'100%',
    				height:height
    			});
	    	}
	        _this.$element.scroll(function() {
				$(this).siblings('.statis_table_header').scrollLeft($(this).scrollLeft());
			});
	    },
	    addFixed:function(){
	    	var _this=this;
	    	var fixed=_this.options.fixed,
				fixedAlign=_this.options.fixedAlign,
				fixedNumber=_this.options.fixedNumber;
			var fixedBox=_this.$element.siblings('.statis_table_fixed'),
				fixedHeader=fixedBox.find('.statis_table_header'),
				fixedBody=fixedBox.find('.statis_table_body'),
				eleHeader= _this.$element.siblings('.statis_table_header').children();
			var fixedDom=_this.$element.children().clone();
			fixedDom.find('tr').each(function(){
				$(this).children().eq(fixedNumber-1).nextAll().remove();
			});
			fixedBody.empty().append(fixedDom);
			setfixedH();
			function setfixedH(){
				if(_this.$element.children().width()>_this.$element.width()){
					fixedBody.height(_this.$element.height()-17);
				}else{
					fixedBody.height(_this.$element.height());
				}
			}
			_this.$element.scroll(function() {
				fixedBody.scrollTop($(this).scrollTop());
			});
			
	   	},
	   	sort:function(){
	   		var _this=this;
	   		var data=_this.options.data,
	   			header= _this.$element.siblings('.statis_table_header');
	   		header.find('.statis_sort').removeClass('statis_sort_asc statis_sort_desc');
	   		header.find('.statis_sort').unbind('click').click(function(){
	   			if(data.length){
	   				var data1=[],data2=[];
	   				for(var i=0;i<data.length;i++){
	   					if(data[i].lock){ data2.push(data[i]); }else{ data1.push(data[i]); }
	   				}
			  		var index=$(this).attr('data-index');
			  		var str=[];
			  		$.each(data1[0],function(name,val){
			  			if(name=="id"){return;}else{str.push(name);}
			  		});
	                var sortKey=str[index];
	                header.find('.statis_sort').not(this).removeClass('statis_sort_asc statis_sort_desc');
	                if ($(this).hasClass('statis_sort_asc')) {
	                    $(this).removeClass('statis_sort_asc').addClass('statis_sort_desc');
	                    data1.sort(function (a, b) {
	                    	if(!a.lock){
	                        	var a1 = typeof a[sortKey] === 'object' ? (a[sortKey].text || '') : a[sortKey];
	                        	var b1 = typeof b[sortKey] === 'object' ? (b[sortKey].text || '') : b[sortKey];
	                        	return b1 - a1;
	                       }
	                    });
	                } else {
	                    $(this).addClass('statis_sort_asc').removeClass('statis_sort_desc');
	                    data1.sort(function (a, b) {
	                    	if(!a.lock){
		                        var a1 = typeof a[sortKey] === 'object' ? (a[sortKey].text || '') : a[sortKey];
		                        var b1 = typeof b[sortKey] === 'object' ? (b[sortKey].text || '') : b[sortKey];
		                        return a1 - b1 ;
	                       	}
	                    });
	                }
	                $.merge(data1,data2);
			  		_this.init(data1);
			  	}
		  	});
	   	}
    }
	$.fn.statistics = function(options) {
        var newTable = new table(this, options);
        return newTable.cell();
    }
})(jQuery);