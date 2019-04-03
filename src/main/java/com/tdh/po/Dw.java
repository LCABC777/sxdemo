package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 单位实体类
 */

public class Dw implements Serializable {
    //单位id
    private String id;
    //单位名称
    private String dwmc;
    //单位分类
    private String dwfl;
    //行业分类
    private String hyfl;
    //法定代表人
    private String fddbr;
    //单位性质
    private String dwxz;
    //代表人证件种类
    private String dbrzjzl;
    //代表人证件号码
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
    @Column(name = "dwmc")
    public String getDwmc() {
        return dwmc;
    }

    public void setDwmc(String dwmc) {
        this.dwmc = dwmc;
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

        Dw dw = (Dw) o;

        if (id != null ? !id.equals(dw.id) : dw.id != null) return false;
        if (dwmc != null ? !dwmc.equals(dw.dwmc) : dw.dwmc != null) return false;
        if (dwfl != null ? !dwfl.equals(dw.dwfl) : dw.dwfl != null) return false;
        if (hyfl != null ? !hyfl.equals(dw.hyfl) : dw.hyfl != null) return false;
        if (fddbr != null ? !fddbr.equals(dw.fddbr) : dw.fddbr != null) return false;
        if (dwxz != null ? !dwxz.equals(dw.dwxz) : dw.dwxz != null) return false;
        if (dbrzjzl != null ? !dbrzjzl.equals(dw.dbrzjzl) : dw.dbrzjzl != null) return false;
        if (dbrzjhm != null ? !dbrzjhm.equals(dw.dbrzjhm) : dw.dbrzjhm != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (dwmc != null ? dwmc.hashCode() : 0);
        result = 31 * result + (dwfl != null ? dwfl.hashCode() : 0);
        result = 31 * result + (hyfl != null ? hyfl.hashCode() : 0);
        result = 31 * result + (fddbr != null ? fddbr.hashCode() : 0);
        result = 31 * result + (dwxz != null ? dwxz.hashCode() : 0);
        result = 31 * result + (dbrzjzl != null ? dbrzjzl.hashCode() : 0);
        result = 31 * result + (dbrzjhm != null ? dbrzjhm.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Dw{" +
                "id='" + id + '\'' +
                ", dwmc='" + dwmc + '\'' +
                ", dwfl='" + dwfl + '\'' +
                ", hyfl='" + hyfl + '\'' +
                ", fddbr='" + fddbr + '\'' +
                ", dwxz='" + dwxz + '\'' +
                ", dbrzjzl='" + dbrzjzl + '\'' +
                ", dbrzjhm='" + dbrzjhm + '\'' +
                '}';
    }
}
