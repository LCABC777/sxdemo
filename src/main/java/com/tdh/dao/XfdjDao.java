package com.tdh.dao;

import com.tdh.po.Jbxx;
import com.tdh.po.Jcdx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class XfdjDao {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    private final Logger logger=LoggerFactory.getLogger(XfdjDao.class);

    /**
     * 获取监察对象表中数据
     * @return
     */
    public List<Jcdx> getJcdx() {
        return hibernateTemplate.find("from Jcdx");
    }

    /**
     * 根据信访编号返回基本信息
     * @param xhbh
     * @return
     */
    public Jbxx getJbxxByXfbh(String xhbh){
        return hibernateTemplate.get(Jbxx.class,xhbh);
    }

    /**
     * 根据信访编号和信访中的实体类型获取信访基本信息
     * @param xfbh
     * @param type
     * @return
     */
    public List<Object> getXfdj(String xfbh,String table,String type){
        List<Object> list=hibernateTemplate.find("from "+table+" where id like '"+xfbh+type+"%'");
        return list;
    }
}
