package com.tdh.service;

import com.tdh.dao.XfdjDao;
import com.tdh.po.Jbxx;
import com.tdh.po.Jcdx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
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
     * 信访案件信息由自然人(zrr)，单位(dw)，事件事故(sjsg)及各自证件组成
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
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","zrr"));
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","dw"));
        lists.add(xfdjDao.getXfdj(xfbh,"Zjxx","sjsg"));
        return lists;
    }
}
