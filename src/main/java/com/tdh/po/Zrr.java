package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 自然人
 */

public class Zrr implements Serializable {
    //自然人id
    private String id;
    //姓名
    private String xm;
    //人员特征
    private String rytz;
    //干部管辖层级
    private String gbgxcj;
    //政协委员层级
    private String zxwycj;
    //人大代表层级
    private String rddbcj;
    //纪检委员层级
    private String jwwycj;
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
    @Column(name = "xm")
    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm;
    }

    @Basic
    @Column(name = "rytz")
    public String getRytz() {
        return rytz;
    }

    public void setRytz(String rytz) {
        this.rytz = rytz;
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
    @Column(name = "zxwycj")
    public String getZxwycj() {
        return zxwycj;
    }

    public void setZxwycj(String zxwycj) {
        this.zxwycj = zxwycj;
    }

    @Basic
    @Column(name = "rddbcj")
    public String getRddbcj() {
        return rddbcj;
    }

    public void setRddbcj(String rddbcj) {
        this.rddbcj = rddbcj;
    }

    @Basic
    @Column(name = "jwwycj")
    public String getJwwycj() {
        return jwwycj;
    }

    public void setJwwycj(String jwwycj) {
        this.jwwycj = jwwycj;
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

        Zrr zrr = (Zrr) o;

        if (id != null ? !id.equals(zrr.id) : zrr.id != null) return false;
        if (xm != null ? !xm.equals(zrr.xm) : zrr.xm != null) return false;
        if (rytz != null ? !rytz.equals(zrr.rytz) : zrr.rytz != null) return false;
        if (gbgxcj != null ? !gbgxcj.equals(zrr.gbgxcj) : zrr.gbgxcj != null) return false;
        if (zxwycj != null ? !zxwycj.equals(zrr.zxwycj) : zrr.zxwycj != null) return false;
        if (rddbcj != null ? !rddbcj.equals(zrr.rddbcj) : zrr.rddbcj != null) return false;
        if (jwwycj != null ? !jwwycj.equals(zrr.jwwycj) : zrr.jwwycj != null) return false;
        if (gzdw != null ? !gzdw.equals(zrr.gzdw) : zrr.gzdw != null) return false;
        if (dwfl != null ? !dwfl.equals(zrr.dwfl) : zrr.dwfl != null) return false;
        if (hyfl != null ? !hyfl.equals(zrr.hyfl) : zrr.hyfl != null) return false;
        if (gzdwdz != null ? !gzdwdz.equals(zrr.gzdwdz) : zrr.gzdwdz != null) return false;
        if (zw != null ? !zw.equals(zrr.zw) : zrr.zw != null) return false;
        if (xzjb != null ? !xzjb.equals(zrr.xzjb) : zrr.xzjb != null) return false;
        if (zzmm != null ? !zzmm.equals(zrr.zzmm) : zrr.zzmm != null) return false;
        if (mz != null ? !mz.equals(zrr.mz) : zrr.mz != null) return false;
        if (csrq != null ? !csrq.equals(zrr.csrq) : zrr.csrq != null) return false;
        if (xb != null ? !xb.equals(zrr.xb) : zrr.xb != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (xm != null ? xm.hashCode() : 0);
        result = 31 * result + (rytz != null ? rytz.hashCode() : 0);
        result = 31 * result + (gbgxcj != null ? gbgxcj.hashCode() : 0);
        result = 31 * result + (zxwycj != null ? zxwycj.hashCode() : 0);
        result = 31 * result + (rddbcj != null ? rddbcj.hashCode() : 0);
        result = 31 * result + (jwwycj != null ? jwwycj.hashCode() : 0);
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

    @Override
    public String toString() {
        return "Zrr{" +
                "id='" + id + '\'' +
                ", xm='" + xm + '\'' +
                ", rytz='" + rytz + '\'' +
                ", gbgxcj='" + gbgxcj + '\'' +
                ", zxwycj='" + zxwycj + '\'' +
                ", rddbcj='" + rddbcj + '\'' +
                ", jwwycj='" + jwwycj + '\'' +
                ", gzdw='" + gzdw + '\'' +
                ", dwfl='" + dwfl + '\'' +
                ", hyfl='" + hyfl + '\'' +
                ", gzdwdz='" + gzdwdz + '\'' +
                ", zw='" + zw + '\'' +
                ", xzjb='" + xzjb + '\'' +
                ", zzmm='" + zzmm + '\'' +
                ", mz='" + mz + '\'' +
                ", csrq='" + csrq + '\'' +
                ", xb='" + xb + '\'' +
                '}';
    }
}
