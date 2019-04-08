package com.tdh.service;

import com.tdh.dao.XfdjDao;
import com.tdh.po.Jbxx;
import com.tdh.po.Jcdx;
import com.tdh.util.GetXfdjObject;
import com.tdh.util.XfdjUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

@Service
public class XfdjService {
    @Autowired
    private XfdjDao xfdjDao;
    private Logger logger= LoggerFactory.getLogger(XfdjService.class);

    /**
     * 返回Jcdx的xml格式数据
     * @return
     */
    public String getJcdxXml() {
        StringBuilder s=new StringBuilder();
        List<Jcdx> list=xfdjDao.getJcdx();
        s.append("<?xml version='1.0' encoding='UTF-8'?><rows>");
        for (Jcdx jcdx:list){
            s.append("<row><cell>").append(jcdx.getDx().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getXh()).append("</cell>");
            s.append("<cell>").append(jcdx.getXm().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getXb().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getMz().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getCsrq().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getZw().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getGbgxcj().trim()).append("</cell>");
            s.append("<cell>").append(jcdx.getGzdw().trim()).append("</cell></row>");
        }
        s.append("</rows>");
        return s.toString();
    }

    /**
     * 通过信访编号获取信访案件信息
     * 信访案件信息由自然人(zrr)，单位(dw)，事件事故(sjsg)，反映人(fyr)及各自证件组成
     * @return
     */
    public List<List<Object>> getXfdjByXfbh(String xfbh){
        List<List<Object>> lists=new ArrayList<List<Object>>();
        Jbxx jbxx=xfdjDao.getJbxxByXfbh(xfbh);
        List<Object> list=new ArrayList<Object>();
        list.add(jbxx);
        lists.add(list);
        lists.add(xfdjDao.getXfdj(xfbh,"Zrr","zrr"));
        lists.add(xfdjDao.getXfdj(xfbh,"Dw","dw"));
        lists.add(xfdjDao.getXfdj(xfbh,"Sjsg","sjsg"));
        lists.add(xfdjDao.getXfdj(xfbh,"Fyr","fyr"));
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","zrr"));
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","dw"));
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","sjsg"));
        return lists;
    }


    @Transactional
    public void saveXfdj(HttpServletRequest request) throws Exception {
        //若对象不存在，则保存，存在则修改。
        String jbxxHideId = request.getParameter("jbxx_jbxxHideId");
        logger.info("service jbxxHideId--->" + jbxxHideId);
        //jbxxHideId存的是用户打算删除的记录的主键，判断是否有删除
        if (jbxxHideId != null) {
            String[] formIds = jbxxHideId.split(",");
            String[] types= {"zrr","dw","sjsg","fyr","zj"};//实体类类型
            for (String formId : formIds) {
                for(String type:types){
                    if (formId.contains(type)){//若主键包含自然人,单位,事件事故,反映人，证件，等则根据id和实体类型删除
                        String tableType= XfdjUtil.toUpperCaseFirstOne(type);
                        String className="com.tdh.po."+tableType;
                        Object o=getObj(className,formId);
                        xfdjDao.deleteByObject(o);
                    }
                }
            }
        }
        //获取基本信息对象
        Jbxx jbxxForm = GetXfdjObject.getJbxxFormObj(request);
        logger.info("JbxxForm--->" + jbxxForm);
        xfdjDao.saveForm(jbxxForm);
        //获得除了基本信息外所有对象
        List<Object> objList = GetXfdjObject.getFormObj(request);
        logger.info("新增或修改的实体类列表--->" + objList);
        for (Object object : objList) {
            xfdjDao.saveForm(object);
            logger.info("service objList Object--->" + object);
        }
    }

    /**
     *根据类名和主键生成对象
     * @param className 类名
     * @param id 主键
     * @return
     * @throws ClassNotFoundException
     * @throws IllegalAccessException
     * @throws InstantiationException
     * @throws NoSuchMethodException
     * @throws InvocationTargetException
     */
    private static Object getObj(String className,String id) throws ClassNotFoundException, IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
        Class clazz=Class.forName(className);
        Object o=clazz.newInstance();
        Method method=clazz.getMethod("setId",String.class);
        method.invoke(o,id);
        return o;
    }
}
