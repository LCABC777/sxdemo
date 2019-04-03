package com.tdh.util;

import com.tdh.po.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;
import java.util.*;

/**
 * 封装了一些常用工具类
 * @author lc
 *
 */
public class CommonUtils {
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
			if (name.indexOf("xm") > -1) {
				formId = name.substring(5,name.indexOf("xm"));
				formIdList.add(formId);
			}else if (name.indexOf("dwmc") > -1) {
				formId = name.substring(5,name.indexOf("dwmc"));
				formIdList.add(formId);
			}else if (name.indexOf("sjsgmc") > -1) {
				formId = name.substring(5,name.indexOf("sjsgmc"));
				formIdList.add(formId); 
			}
		}
		//根据主键，查找对应的属性，并生成对象
		for (String idStr : formIdList) {
			names = request.getParameterNames();
			while (names.hasMoreElements()) {
				String name =names.nextElement();
				//将属性名、属性值存入map，将zj主键存入list
				if (name.indexOf(idStr) > -1) {
					attrMap.put(name.substring(idStr.length() + 5),request.getParameter(name));
					if (name.indexOf("zjzl") > -1) {
						String zjEnd = name.substring("zjzl".length() + idStr.length() + 5);
						zjIdList.add(zjEnd);
					}
				}
			}
			//创建对象并存入formObj
			if (idStr.indexOf("zrr") > -1) {
				Zrr zrrForm = (Zrr) init(attrMap, "com.tdh.po.Zrr");
				zrrForm.setId(idStr);
				formObj.add(zrrForm);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.indexOf("dw") > -1) {
				Dw dwForm = (Dw) init(attrMap, "com.tdh.po.Dw");
				dwForm.setId(idStr);
				formObj.add(dwForm);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.indexOf("sjsg") > -1) {
				Sjsg sjsgForm = (Sjsg) init(attrMap, "com.tdh.po.Sjsg");
				sjsgForm.setId(idStr);
				formObj.add(sjsgForm);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}else if (idStr.indexOf("fyr") > -1) {
				Fyr fyrForm = (Fyr) init(attrMap, "com.tdh.po.Fyr");
				fyrForm.setId(idStr);
				formObj.add(fyrForm);
				initZjxx(zjIdList, attrMap, idStr, formObj);
			}
			attrMap.clear();
			zjIdList.clear();
		}
		System.out.println(formObj.toString());
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
	
	/**   
	 * @Title: listToJcdx   
	 * @Description: 根据list创建jcdx对象
	 * @param list
	 * @return Jcdx
	 */  
	public static Jcdx listToJcdx(List<Object> list){
		Jcdx jcdx = new Jcdx();
		jcdx.setXh(Integer.parseInt( (String) list.get(0)));
		jcdx.setDx((String)list.get(1));
		jcdx.setXm((String)list.get(2));
		jcdx.setXb((String)list.get(3));
		jcdx.setMz((String)list.get(4));
		jcdx.setCsrq((String)list.get(5));
		jcdx.setZw((String)list.get(6));
		jcdx.setGbgxcj((String)list.get(7));
		jcdx.setGzdw((String)list.get(8));
		return jcdx;
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