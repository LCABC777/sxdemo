package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * 监察对象实体类
 */

public class Jcdx {
    //多选(0表示非多选,1表示多选)
    private String dx;
    //序号
    private int xh;
    //姓名
    private String xm;
    //性别
    private String xb;
    //民族
    private String mz;
    //出生日期
    private String csrq;
    //职务
    private String zw;
    //干部管辖层级
    private String gbgxcj;
    //工作单位
    private String gzdw;

    @Basic
    @Column(name = "dx")
    public String getDx() {
        return dx;
    }

    public void setDx(String dx) {
        this.dx = dx;
    }

    @Id
    @Column(name = "xh")
    public int getXh() {
        return xh;
    }

    public void setXh(int xh) {
        this.xh = xh;
    }

    @Basic
    @Column(name = "xm")
    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm;
    }

    @Basic
    @Column(name = "xb")
    public String getXb() {
        return xb;
    }

    public void setXb(String xb) {
        this.xb = xb;
    }

    @Basic
    @Column(name = "mz")
    public String getMz() {
        return mz;
    }

    public void setMz(String mz) {
        this.mz = mz;
    }

    @Basic
    @Column(name = "csrq")
    public String getCsrq() {
        return csrq;
    }

    public void setCsrq(String csrq) {
        this.csrq = csrq;
    }

    @Basic
    @Column(name = "zw")
    public String getZw() {
        return zw;
    }

    public void setZw(String zw) {
        this.zw = zw;
    }

    @Basic
    @Column(name = "gbgxcj")
    public String getGbgxcj() {
        return gbgxcj;
    }

    public void setGbgxcj(String gbgxcj) {
        this.gbgxcj = gbgxcj;
    }

    @Basic
    @Column(name = "gzdw")
    public String getGzdw() {
        return gzdw;
    }

    public void setGzdw(String gzdw) {
        this.gzdw = gzdw;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Jcdx jcdx = (Jcdx) o;

        if (xh != jcdx.xh) return false;
        if (dx != null ? !dx.equals(jcdx.dx) : jcdx.dx != null) return false;
        if (xm != null ? !xm.equals(jcdx.xm) : jcdx.xm != null) return false;
        if (xb != null ? !xb.equals(jcdx.xb) : jcdx.xb != null) return false;
        if (mz != null ? !mz.equals(jcdx.mz) : jcdx.mz != null) return false;
        if (csrq != null ? !csrq.equals(jcdx.csrq) : jcdx.csrq != null) return false;
        if (zw != null ? !zw.equals(jcdx.zw) : jcdx.zw != null) return false;
        if (gbgxcj != null ? !gbgxcj.equals(jcdx.gbgxcj) : jcdx.gbgxcj != null) return false;
        if (gzdw != null ? !gzdw.equals(jcdx.gzdw) : jcdx.gzdw != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = dx != null ? dx.hashCode() : 0;
        result = 31 * result + xh;
        result = 31 * result + (xm != null ? xm.hashCode() : 0);
        result = 31 * result + (xb != null ? xb.hashCode() : 0);
        result = 31 * result + (mz != null ? mz.hashCode() : 0);
        result = 31 * result + (csrq != null ? csrq.hashCode() : 0);
        result = 31 * result + (zw != null ? zw.hashCode() : 0);
        result = 31 * result + (gbgxcj != null ? gbgxcj.hashCode() : 0);
        result = 31 * result + (gzdw != null ? gzdw.hashCode() : 0);
        return result;
    }
}
