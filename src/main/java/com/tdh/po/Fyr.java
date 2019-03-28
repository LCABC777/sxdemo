package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 反映人实体类
 */

public class Fyr implements Serializable {
    //反映人id
    private String id;
    //是否署名
    private String sfsm;
    //联系方式
    private String lxfs;
    //姓名
    private String xm;
    //工作单位
    private String gzdw;
    //单位分类
    private String dwfl;
    //行业分类
    private String hyfl;
    //工作单位地址
    private String gzdwdz;
    //职务
    private String zw;
    //行政级别
    private String xzjb;
    //政治面貌
    private String zzmm;
    //民族
    private String mz;
    //出生日期
    private String csrq;
    //性别
    private String xb;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sfsm")
    public String getSfsm() {
        return sfsm;
    }

    public void setSfsm(String sfsm) {
        this.sfsm = sfsm;
    }

    @Basic
    @Column(name = "lxfs")
    public String getLxfs() {
        return lxfs;
    }

    public void setLxfs(String lxfs) {
        this.lxfs = lxfs;
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
    @Column(name = "gzdw")
    public String getGzdw() {
        return gzdw;
    }

    public void setGzdw(String gzdw) {
        this.gzdw = gzdw;
    }

    @Basic
    @Column(name = "dwfl")
    public String getDwfl() {
        return dwfl;
    }

    public void setDwfl(String dwfl) {
        this.dwfl = dwfl;
    }

    @Basic
    @Column(name = "hyfl")
    public String getHyfl() {
        return hyfl;
    }

    public void setHyfl(String hyfl) {
        this.hyfl = hyfl;
    }

    @Basic
    @Column(name = "gzdwdz")
    public String getGzdwdz() {
        return gzdwdz;
    }

    public void setGzdwdz(String gzdwdz) {
        this.gzdwdz = gzdwdz;
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
    @Column(name = "xzjb")
    public String getXzjb() {
        return xzjb;
    }

    public void setXzjb(String xzjb) {
        this.xzjb = xzjb;
    }

    @Basic
    @Column(name = "zzmm")
    public String getZzmm() {
        return zzmm;
    }

    public void setZzmm(String zzmm) {
        this.zzmm = zzmm;
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
    @Column(name = "xb")
    public String getXb() {
        return xb;
    }

    public void setXb(String xb) {
        this.xb = xb;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Fyr fyr = (Fyr) o;

        if (id != null ? !id.equals(fyr.id) : fyr.id != null) return false;
        if (sfsm != null ? !sfsm.equals(fyr.sfsm) : fyr.sfsm != null) return false;
        if (lxfs != null ? !lxfs.equals(fyr.lxfs) : fyr.lxfs != null) return false;
        if (xm != null ? !xm.equals(fyr.xm) : fyr.xm != null) return false;
        if (gzdw != null ? !gzdw.equals(fyr.gzdw) : fyr.gzdw != null) return false;
        if (dwfl != null ? !dwfl.equals(fyr.dwfl) : fyr.dwfl != null) return false;
        if (hyfl != null ? !hyfl.equals(fyr.hyfl) : fyr.hyfl != null) return false;
        if (gzdwdz != null ? !gzdwdz.equals(fyr.gzdwdz) : fyr.gzdwdz != null) return false;
        if (zw != null ? !zw.equals(fyr.zw) : fyr.zw != null) return false;
        if (xzjb != null ? !xzjb.equals(fyr.xzjb) : fyr.xzjb != null) return false;
        if (zzmm != null ? !zzmm.equals(fyr.zzmm) : fyr.zzmm != null) return false;
        if (mz != null ? !mz.equals(fyr.mz) : fyr.mz != null) return false;
        if (csrq != null ? !csrq.equals(fyr.csrq) : fyr.csrq != null) return false;
        if (xb != null ? !xb.equals(fyr.xb) : fyr.xb != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (sfsm != null ? sfsm.hashCode() : 0);
        result = 31 * result + (lxfs != null ? lxfs.hashCode() : 0);
        result = 31 * result + (xm != null ? xm.hashCode() : 0);
        result = 31 * result + (gzdw != null ? gzdw.hashCode() : 0);
        result = 31 * result + (dwfl != null ? dwfl.hashCode() : 0);
        result = 31 * result + (hyfl != null ? hyfl.hashCode() : 0);
        result = 31 * result + (gzdwdz != null ? gzdwdz.hashCode() : 0);
        result = 31 * result + (zw != null ? zw.hashCode() : 0);
        result = 31 * result + (xzjb != null ? xzjb.hashCode() : 0);
        result = 31 * result + (zzmm != null ? zzmm.hashCode() : 0);
        result = 31 * result + (mz != null ? mz.hashCode() : 0);
        result = 31 * result + (csrq != null ? csrq.hashCode() : 0);
        result = 31 * result + (xb != null ? xb.hashCode() : 0);
        return result;
    }
}
