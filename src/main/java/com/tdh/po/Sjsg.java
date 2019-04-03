package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 事件事故实体类
 */

public class Sjsg implements Serializable {
    //事件id
    private String id;
    //事件事故名称
    private String sjsgmc;
    //事件事故地点
    private String sjsgdd;
    //责任单位名称
    private String zrdwmc;
    //责任单位分类
    private String zrdwfl;
    //行业分类
    private String hyfl;
    //法定代表人
    private String fddbr;
    //单位性质
    private String dwxz;
    //代办人证件种类
    private String dbrzjzl;
    //代办人证件号码
    private String dbrzjhm;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sjsgmc")
    public String getSjsgmc() {
        return sjsgmc;
    }

    public void setSjsgmc(String sjsgmc) {
        this.sjsgmc = sjsgmc;
    }

    @Basic
    @Column(name = "sjsgdd")
    public String getSjsgdd() {
        return sjsgdd;
    }

    public void setSjsgdd(String sjsgdd) {
        this.sjsgdd = sjsgdd;
    }

    @Basic
    @Column(name = "zrdwmc")
    public String getZrdwmc() {
        return zrdwmc;
    }

    public void setZrdwmc(String zrdwmc) {
        this.zrdwmc = zrdwmc;
    }

    @Basic
    @Column(name = "zrdwfl")
    public String getZrdwfl() {
        return zrdwfl;
    }

    public void setZrdwfl(String zrdwfl) {
        this.zrdwfl = zrdwfl;
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
    @Column(name = "fddbr")
    public String getFddbr() {
        return fddbr;
    }

    public void setFddbr(String fddbr) {
        this.fddbr = fddbr;
    }

    @Basic
    @Column(name = "dwxz")
    public String getDwxz() {
        return dwxz;
    }

    public void setDwxz(String dwxz) {
        this.dwxz = dwxz;
    }

    @Basic
    @Column(name = "dbrzjzl")
    public String getDbrzjzl() {
        return dbrzjzl;
    }

    public void setDbrzjzl(String dbrzjzl) {
        this.dbrzjzl = dbrzjzl;
    }

    @Basic
    @Column(name = "dbrzjhm")
    public String getDbrzjhm() {
        return dbrzjhm;
    }

    public void setDbrzjhm(String dbrzjhm) {
        this.dbrzjhm = dbrzjhm;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Sjsg sjsg = (Sjsg) o;

        if (id != null ? !id.equals(sjsg.id) : sjsg.id != null) return false;
        if (sjsgmc != null ? !sjsgmc.equals(sjsg.sjsgmc) : sjsg.sjsgmc != null) return false;
        if (sjsgdd != null ? !sjsgdd.equals(sjsg.sjsgdd) : sjsg.sjsgdd != null) return false;
        if (zrdwmc != null ? !zrdwmc.equals(sjsg.zrdwmc) : sjsg.zrdwmc != null) return false;
        if (zrdwfl != null ? !zrdwfl.equals(sjsg.zrdwfl) : sjsg.zrdwfl != null) return false;
        if (hyfl != null ? !hyfl.equals(sjsg.hyfl) : sjsg.hyfl != null) return false;
        if (fddbr != null ? !fddbr.equals(sjsg.fddbr) : sjsg.fddbr != null) return false;
        if (dwxz != null ? !dwxz.equals(sjsg.dwxz) : sjsg.dwxz != null) return false;
        if (dbrzjzl != null ? !dbrzjzl.equals(sjsg.dbrzjzl) : sjsg.dbrzjzl != null) return false;
        if (dbrzjhm != null ? !dbrzjhm.equals(sjsg.dbrzjhm) : sjsg.dbrzjhm != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (sjsgmc != null ? sjsgmc.hashCode() : 0);
        result = 31 * result + (sjsgdd != null ? sjsgdd.hashCode() : 0);
        result = 31 * result + (zrdwmc != null ? zrdwmc.hashCode() : 0);
        result = 31 * result + (zrdwfl != null ? zrdwfl.hashCode() : 0);
        result = 31 * result + (hyfl != null ? hyfl.hashCode() : 0);
        result = 31 * result + (fddbr != null ? fddbr.hashCode() : 0);
        result = 31 * result + (dwxz != null ? dwxz.hashCode() : 0);
        result = 31 * result + (dbrzjzl != null ? dbrzjzl.hashCode() : 0);
        result = 31 * result + (dbrzjhm != null ? dbrzjhm.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Sjsg{" +
                "id='" + id + '\'' +
                ", sjsgmc='" + sjsgmc + '\'' +
                ", sjsgdd='" + sjsgdd + '\'' +
                ", zrdwmc='" + zrdwmc + '\'' +
                ", zrdwfl='" + zrdwfl + '\'' +
                ", hyfl='" + hyfl + '\'' +
                ", fddbr='" + fddbr + '\'' +
                ", dwxz='" + dwxz + '\'' +
                ", dbrzjzl='" + dbrzjzl + '\'' +
                ", dbrzjhm='" + dbrzjhm + '\'' +
                '}';
    }
}
