//v.3.6 build 130417

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
if(window.dhtmlxHierarchy){if(!dhtmlx.attaches)dhtmlx.attaches={};dhtmlx.attaches.attachPropertyGrid=function(){var c=this.attachGrid();new dhtmlXPropertyGrid(c);return c};var eXcell_tree_property=function(c){if(c)this.cell=c,this.grid=this.cell.parentNode.grid;this.isDisabled=function(){return!0};this.getValue=function(){return this.cell.parentNode.valTag.innerHTML}};eXcell_tree_property.prototype=new eXcell_tree;eXcell_tree.prototype.setValue=function(c){if(this.cell.parentNode.imgTag)return this.setLabel(c);
if(this.grid._tgc.imgURL==null||this.grid._tgc.imgURL!=this.grid.imgURL){var a={};a.imst="<img src='"+this.grid.imgURL;a.imsti="<img src='"+(this.grid.iconURL||this.grid.imgURL);a.imact="' align='absmiddle'  onclick='this."+(_isKHTML?"":"parentNode.")+"parentNode.parentNode.parentNode.parentNode.grid.doExpand(this);event.cancelBubble=true;' class='property_image'>";a.plus=a.imst+"plus.gif"+a.imact;a.minus=a.imst+"minus.gif"+a.imact;a.blank=a.imst+"blank.gif"+a.imact;a.start="<div style=' overflow:hidden; white-space : nowrap; height:"+
(_isIE?20:19)+"px;'>";a.itemim="<span "+(_isFF?"style='position:relative; top:2px;'":"")+"id='nodeval'>";a.close="</span><div class='property_space'></div></div>";this.grid._tgc=a}var a=this.grid._tgc,d=this.cell.parentNode.idd,b=this.grid._h2.get[d];if(this.grid.kidsXmlFile||this.grid._slowParse)b.has_kids=b.has_kids||this.cell.parentNode._attrs.xmlkids&&b.state!="minus",b._xml_await=!!b.has_kids;b.image=b.image||this.cell._attrs.image||"leaf.gif";b.label=c;var e=[a.start];b.has_kids?(e.push(a.plus),
b.state="plus"):e.push(a.imst+b.state+".gif"+a.imact+a.itemim);e.push(b.label);e.push(a.close);this.cell.innerHTML=e.join("");this.cell.style.paddingLeft="0px";this.cell.parentNode.imgTag=this.cell.childNodes[0].childNodes[0];this.cell.parentNode.valTag=this.cell.childNodes[0].childNodes[1];if(b.childs.length)this.grid.getRowById(this.cell.parentNode.idd)._attrs["class"]=" dhx_parent_row ",this.cell.nextSibling.style.borderLeft="1px solid #D4D0C8";if(_isKHTML)this.cell.vAlign="top";if(b.parent.id!=
0&&b.parent.state=="plus")this.grid._updateTGRState(b.parent,!1),this.cell.parentNode._skipInsert=!0;this.grid.callEvent("onCellChanged",[d,this.cell._cellIndex,c])}}
function eXcell_list(c){if(c)this.cell=c,this.grid=this.cell.parentNode.grid;this.edit=function(){this.cell.innerHTML="<select style='width:100%;' ></select>";this.obj=this.cell.firstChild;this.obj.onclick=function(a){(a||event).cancelBubble=!0};this.obj.onmousedown=function(a){(a||event).cancelBubble=!0};this.obj.onkeydown=function(a){var b=a||event;if(b.keyCode==9||b.keyCode==13)return globalActiveDHTMLGridObject.entBox.focus(),globalActiveDHTMLGridObject.doKey({keyCode:b.keyCode,shiftKey:b.shiftKey,
srcElement:"0"}),!1;b.cancelBubble=!0};var a=this;this.obj.onchange=function(){a.grid.editStop();a=null};for(var d=this.getAttribute("values").split(","),b=0;b<d.length;b++)this.obj.options[b]=new Option(d[b],d[b]);this.obj.value=this.cell._val;this.obj.focus()};this.getValue=function(){return this.cell._val};this.detach=function(){var a=this.obj.value,d=this.obj.selectedIndex;this.setValue(d==-1?"":this.obj.options[d].value);return a!=this.getValue()}}eXcell_list.prototype=new eXcell;
eXcell_list.prototype.setValue=function(c){this.cell._val=c;!c||c.toString()._dhx_trim()==""?(this.cell._clearCell=!0,this.setCValue("&nbsp","")):(this.cell._clearCell=!1,this.setCValue(this.grid._aplNF(c,this.cell._cellIndex)))};
function dhtmlXPropertyGrid(c){var a;a=c.objBox?c:new dhtmlXGridObject(c);a.setHeader("Name,Value");a.setColAlign("left,left");window.dhtmlxHierarchy?(a.setColTypes("tree_property,ro"),a.isTreeGrid=function(){return!0},a.enableSmartXMLParsing(!1)):a.setColTypes("ro,ro");a.setColSorting("na,na");a.setInitWidths("*,*");a.setNoHeader(!0);a.setSkin("property");a.i18n.validation_error="Value is incorrect";a.attachEvent("onRowSelect",function(a){this.editor||(this.selectCell(this.getRowIndex(a),1),this.editCell())});
a.attachEvent("onBeforeSelect",function(){return this._block_selection?!1:!0});a.attachEvent("onRowCreated",function(a,b){if(!this._h2||!this._h2.get[a].childs.length)b.childNodes[1].style.backgroundColor="white"});a.attachEvent("onEditCell",function(a,b,c,f,g){a==1&&this.editor&&this.editor.obj&&this.editor.obj.select&&this.editor.obj.select();if(a==2&&g!=f){var j=this.cells(b,1).getAttribute("validate"),h=!0;switch(j){case "int":h=parseFloat(f)==f}if(h)this._block_selection=!1,this.callEvent("onPropertyChanged",
[this.cells(b,0).getValue(),f,g]);else{alert(this.i18n.validation_error);this._block_selection=!0;var i=this;window.setTimeout(function(){i.selectCell(b,c);i.editCell()},1)}}return!0});a._key_events.k13_0_0=a._key_events.k9_0_0=a._key_events.k40_0_0;a.getProperties=function(){this.editStop(!0);var a={};this.forEachRow(function(b){a[this.cells(b,0).getValue()]=this.cells(b,1).getValue()});return a};a.setProperties=function(a){this.editStop();this.forEachRow(function(b){var c=this.cells(b,0).getValue();
typeof a[c]!="undefined"&&this.cells(b,1).setValue(a[c])});this.callEvent("onPropertyChanged",[])};return a};

//v.3.6 build 130417

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/