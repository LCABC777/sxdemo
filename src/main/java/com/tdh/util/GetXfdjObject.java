package com.tdh.util;

import com.tdh.po.*;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;


/**
 * 根据请过传过来的序列化参数返回实体对象
 * @author lc
 */
public class GetXfdjObject {
	/*
	 * 根据name后缀得到某个表有几个
	 * @param strings
	 * @return
	 */
	public static List<Object> getFormObj(HttpServletRequest request) throws Exception{
		//存放所有对象的list
		List<Object> formObj = new ArrayList<Object>();
		//存放所有属性值的map
		Map<String, String> attrMap = new HashMap<String, String>();
		//存放所有表单主键的list
		List<String>  formIdList = new ArrayList<String>();
		//存放证件主键的list
		List<String> zjIdList = new ArrayList<String>();

		Enumeration<String> names = request.getParameterNames();
		//得到同一类表的所有主键
		String formId = "";
		while (names.hasMoreElements()) {
			String name = names.nextElement();
			if (name.contains("xm")) {
				formId = name.substring(5,name.indexOf("xm"));
				formIdList.add(formId);
			}else if (name.contains("dwmc")) {
				formId = name.substring(5,name.indexOf("dwmc"));
				formIdList.add(formId);
			}else if (name.contains("sjsgmc")) {
				formId = name.substring(5,name.indexOf("sjsgmc"));
				formIdList.add(formId);
			}
		}
		//根据主键，查找对应的属性，并生成对象
		for (String idStr : formIdList) {
			names = request.getParameterNames();
			while (names.hasMoreElements()) {
				String name =  names.nextElement();
				//将属性名、属性值存入map，将zj主键存入list
				if (name.contains(idStr)) {
					attrMap.put(name.substring(idStr.length() + 5),request.getParameter(name));
					if (name.contains("zjzl")) {
						String zjEnd = name.substring("zjzl".length() + idStr.length() + 5);
						zjIdList.add(zjEnd);
					}
				}
			}
			//创建对象并存入formObj
			if (idStr.contains("zrr")) {
				Zrr zrr = (Zrr) init(attrMap, "com.tdh.po.Zrr");
				zrr.setId(idStr);
				formObj.add(zrr);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.contains("dw")) {
				Dw dw = (Dw) init(attrMap, "com.tdh.po.Dw");
				dw.setId(idStr);
				formObj.add(dw);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.contains("sjsg")) {
				Sjsg sjsg = (Sjsg) init(attrMap, "com.tdh.po.Sjsg");
				sjsg.setId(idStr);
				formObj.add(sjsg);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.contains("fyr")) {
				Fyr fyr = (Fyr) init(attrMap, "com.tdh.po.Fyr");
				fyr.setId(idStr);
				formObj.add(fyr);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}
			attrMap.clear();
			zjIdList.clear();
		}
		return formObj;
	}

	/*
	 * 去除序列化 生成 的前缀
	 * @param request
	 * @param suff 	前缀
	 * @return 	Map<String,String>
	 */
	public static Map<String,String> requestToMap(HttpServletRequest request, String suff){
		Enumeration<String> names = request.getParameterNames();
		Map<String, String> map = new HashMap<String, String>();
		while (names.hasMoreElements()) {
			String name = names.nextElement();
			if("".equals(suff)){
				map.put(name, request.getParameter(name));
			}else if(name.startsWith(suff)){
				map.put(name.replace(suff, ""), request.getParameter(name));
			}
		}
		return map;
	}

	/*
	 * 根据jbxx字符串初始化jbxxForm对象
	 * @param request
	 * @throws Exception
	 */
	public static Jbxx getJbxxFormObj(HttpServletRequest request) throws Exception{
		//创建map并初始化
		Map<String, String> map = requestToMap(request, "jbxx_");
		return (Jbxx)init(map, "com.tdh.po.Jbxx");
	}

	/*
	 * 根据存放属性名、属性值的map和类名，生成对应的对象。
	 * @param map 	存放属性名和对应的属性值
	 * @param 		className  类名
	 * @return		Object
	 * @throws 		Exception
	 */
	public static Object init(Map<String, String> map,String className) throws Exception{
		//加载类
		Class<?> cls = Class.forName(className);
		//创建对象
		Object obj = cls.newInstance();
		Method[] ary = cls.getDeclaredMethods();
		for (Method method : ary) {
			String methodName = method.getName();
			//执行所有set方法
			if (methodName.startsWith("set")) {
				String endName = methodName.substring(3);
				endName = strLowFirst(endName);
				String key = map.get(endName);
				if (key != null) {
					method.invoke(obj, key);
				}else {
					method.invoke(obj, "");
				}
			}
		}
		return obj;
	}

	/*
	 * 将字符串的第一个字符小写
	 * @param key 	 第一个字符大写的字符串
	 * @return 		String
	 */
	public static String strLowFirst(String key){
		String first = key.substring(0,1).toLowerCase();
		return first+key.substring(1);
	}

	/*
	 * 创建zjxx对象
	 * @param zjIdList	存放zjId的list
	 * @param attrMap	存放属性名和属性值的map
	 * @param idStr		form表单主键
	 * @param formObj	存放对象的list
	 */
	public static void initZjxx(List<String> zjIdList,Map<String, String> attrMap,String idStr,List<Object> formObj){
		for (String zjId : zjIdList) {
			String zjzl = attrMap.get("zjzl"+zjId);
			String zjhm = attrMap.get("zjhm"+zjId);
			String qtzzmc = attrMap.get("qtzjmc"+zjId);
			Zjxx zjxx = new Zjxx();
			zjxx.setZjzl(zjzl);
			zjxx.setZjhm(zjhm);
			zjxx.setQtzzmc(qtzzmc);
			zjxx.setId(idStr + "zj" + zjId);
			formObj.add(zjxx);
		}
	}


	/*
	 * 若字符串为null，则返回空字符串
	 * @param String
	 * @return String
	 */
	public static String trim(String str) {
		if (str == null || "null".equals(str)) {
			str = "";
		}
		return str.trim();
	}
}