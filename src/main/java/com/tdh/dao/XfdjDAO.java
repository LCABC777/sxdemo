package com.tdh.dao;

import com.tdh.po.Jcdx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class XfdjDAO {
    @Autowired
    private HibernateTemplate hibernateTemplate;
    private final Logger logger=LoggerFactory.getLogger(XfdjDAO.class);

    public List<Jcdx> getJcdx() {
        return hibernateTemplate.find("from Jcdx");
    }
}
