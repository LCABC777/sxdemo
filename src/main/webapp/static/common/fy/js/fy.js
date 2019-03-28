var cxxturl = ""; //存放完整的load地址，包括当前查询条件
var imgpath  = "";
var _page_limit = "";
var _firstStart = "";

function setUrl(url){
	cxxturl = url;
}

function setImagePath(imgPath) {
	imgpath = imgPath;
}


function setCallbackFunction(fn){
	customCallbackFunction = fn;
}

var customCallbackFunction = function(){}



//start从0开始
function refsh(start){
   _page_limit = document.all.limit.value;
   
   if (start == 0 || start == 1) {
   	_firstStart = start;
   }
  
  document.getElementById("load").style.visibility = "visible";
  document.all.start.value = start;
  if (cxxturl.indexOf("?") >= 0) {
  	url = cxxturl + "&start=" + start + "&limit=" + document.all.limit.value;
  }else{
  	url = cxxturl + "?start=" + start + "&limit=" + document.all.limit.value;
  }
  //url = url +"&ect="+new Date().getTime();
  mygrid.clearAll();
  mygrid.loadXML(url,loadCallBack);
}
//点击数字显示全部，或者在自己的页面里覆写此方法
function showAllList (obj){
  if (!obj.innerHTML || obj.innerHTML=='0') return;
  //alert(document.getElementById("totalnum").style.color);
  if (document.getElementById("totalnum").style.color!='#226de1') return;
  //alert(obj.value);
  //if(parseInt(document.getElementById("totalnum").value) > 1000) {
  //	alert("如需查看所有数据，请导出到excel表格查看");
  //}
  
  document.getElementById("load").style.visibility = "visible";
  alert("只能显示500条，并且按照500条来重新分页");
  document.all.limit.value = "500";
  document.all.start.value = "1";
  _page_limit = document.all.limit.value;
  mygrid.clearAll();
  if(cxxturl.indexOf("?") <0){
  	 url = cxxturl +"?start=0&limit=500";
  }else{
  	 url = cxxturl +"&start=0&limit=500";
  }
  mygrid.loadXML(url,loadCallBack);
}
function sy_onclick(){
  var start=document.all.start.value;
  var RowCount=  document.all.totalnum.innerHTML * 1;
  var pagerows= document.all.limit.value * 1;
  var begin= start* 1;
  var PageCount=Math.ceil(RowCount / pagerows);
  var curPage=0;
  
  if(start == "1") curPage=1;
  else{
    curPage= Math.floor(begin / pagerows) +1;
  }
  if(curPage>PageCount) curPage   =   PageCount;   
    if(PageCount == 1){
      return; 
    }else{
      if(curPage > 1){
        refsh(parseInt(_firstStart)) ;         
      }else{
        return;   
      }
   }
}
 
function left_onclick(){
  var start=document.all.start.value;
  var RowCount=  document.all.totalnum.innerHTML * 1;
  var pagerows= document.all.limit.value * 1;
  var begin= start* 1;
  var PageCount=Math.ceil(RowCount / pagerows);
  var curPage=0;
   if(start == "1") 
     curPage=1;
   else{
     curPage= Math.floor(begin / pagerows)+1;
   }  
   if(curPage>PageCount)   curPage   =   PageCount;   
     if(PageCount == 1){
       return; 
     }else{
       if(curPage > 1){
         refsh((curPage-2)*pagerows+parseInt(_firstStart));
       }else{
         return;       
       }
     }
}

function right_onclick(){
  var start=document.all.start.value;
  var RowCount=  document.all.totalnum.innerHTML * 1;
  var pagerows= document.all.limit.value * 1;
  var begin= start* 1;
  var PageCount=Math.ceil(RowCount / pagerows);
  var curPage=0;
  if(start == "1") curPage=1;
  else{
    curPage= Math.floor(begin / pagerows) +1;
  }  
  if(curPage>PageCount) curPage   =   PageCount;   
    if(PageCount == 1){
      return; 
    }else{
     if(curPage >= PageCount){
        return; 
     }else{
       refsh(curPage*pagerows+parseInt(_firstStart));
     }
    }
}

function toSendPage(){
  var start=document.all.start.value;
  var toPage=document.all.toPage.value;
  if(toPage==""){
	  alert("请输入需要跳转的页码！");
	  return;
  }
  if(toPage=="0"){
	  alert("请输入正确的页码！");
	  return;
  }
  toPage = toPage*1;
  var RowCount=  document.all.totalnum.innerHTML * 1;
  var pagerows= document.all.limit.value * 1;
  var begin= start* 1;
  var PageCount=Math.ceil(RowCount / pagerows);
  var curPage=0;
  if(PageCount==0) return;
  if(toPage>PageCount){
	  alert("超过最大页"+PageCount);
	  return;
  }
  curPage= toPage-1;
  if(curPage>PageCount) curPage   =   PageCount;   
    if(PageCount == 1){
      return; 
    }else{
     if(curPage >= PageCount){
        return; 
     }else{
       refsh(curPage*pagerows+parseInt(_firstStart));
     }
  }
}

function wy_onclick(){

  var start=document.all.start.value;
  var RowCount=  document.all.totalnum.innerHTML * 1;
  var pagerows= document.all.limit.value * 1;
  var begin= start* 1;
  var PageCount=Math.ceil(RowCount / pagerows);
   var curPage=0;
  if(start == "1")
    curPage=1;
  else{
    curPage= Math.floor(begin / pagerows) + 1;
  }    
  if(curPage>PageCount)   curPage   =   PageCount;   
    if(PageCount == 1){
      return; 
    }else{
      if(curPage >= PageCount){
        return; 
      }else{
        refsh((PageCount-1)*pagerows+parseInt(_firstStart) );
       }
    }
}


function loadCallBack(){
  document.all.totalnum.innerHTML=mygrid.getUserData("","totalnumber");
  afterload();
  customCallbackFunction();
}

function afterload() {
	//分页图片地址
	var sy = "";
	var left = "";
	var right = "";
	var wy = "";
  var start = document.all.start.value;//本页第一条记录
  var limit = document.all.limit.value;
  var total = document.all.totalnum.innerHTML;
  if (total == null || total == "") total = "0";
  if (start == null || start == "") start = "1";
  if (limit == null || limit == "") limit = "40";
  var rowCount = parseInt(total);//总记录数
  var pageRows = parseInt(limit);//每页最多记录数
  var pageCount = Math.ceil(rowCount/pageRows);//总页数
  var curPage = 0;//当前页号
  if (start == "1") {
    curPage = 1;
  } else {
    curPage = Math.floor(parseInt(start) / pageRows) + 1;
  }
  if (curPage > pageCount) {
    curPage = pageCount;
  }
  if (limit=="999999" || rowCount == 0 || pageCount == 1) {
	    sy = imgpath +"/resources/webapp/common/fy/images/left1a.png";
	    left = imgpath +"/resources/webapp/common/fy/images/left2a.png";
	    right = imgpath +"/resources/webapp/common/fy/images/right1a.png";
	    wy = imgpath +"/resources/webapp/common/fy/images/right2a.png";
	  } else {
	    if (curPage > 1) {
	      sy = imgpath +"/resources/webapp/common/fy/images/left1b.png";
	      left = imgpath +"/resources/webapp/common/fy/images/left2b.png";
	    } else {
	      sy = imgpath +"/resources/webapp/common/fy/images/left1a.png";
	      left =imgpath +"/resources/webapp/common/fy/images/left2a.png";
	    }
	    if (curPage >= pageCount) {
	      right = imgpath +"/resources/webapp/common/fy/images/right1a.png";
	      wy = imgpath +"/resources/webapp/common/fy/images/right2a.png";
	    } else {
	      right = imgpath +"/resources/webapp/common/fy/images/right1b.png";
	      wy = imgpath +"/resources/webapp/common/fy/images/right2b.png";
	    }
	  }

  document.getElementById("sy").src=sy; 
  document.getElementById("left").src=left;
  document.getElementById("right").src=right;
  document.getElementById("wy").src=wy;
  document.getElementById("curPage").innerHTML =curPage;
  if (limit == "999999") {
  document.getElementById("PageCount").innerHTML ="";
  } else {
  document.getElementById("PageCount").innerHTML =pageCount;
  }
  document.getElementById("load").style.visibility = "hidden";
  document.all.limit.value = _page_limit;
}