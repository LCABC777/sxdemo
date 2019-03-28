package com.tdh.service;

import com.tdh.dao.XfdjDAO;
import com.tdh.po.Jcdx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class XfdjService {
    @Autowired
    private XfdjDAO xfdjDAO;
    private Logger logger= LoggerFactory.getLogger(XfdjService.class);

    /**
     * 返回Jcdx的xml格式数据
     * @return
     */
    public String getJcdxXml() {
        StringBuilder s=new StringBuilder();
        List<Jcdx> list=xfdjDAO.getJcdx();
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
}
