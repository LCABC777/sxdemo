package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 证件信息实体类
 */

public class Zjxx implements Serializable {
    //证件id
    private String id;
    //
    private String zjzl;
    private String zjhm;
    private String qtzzmc;

    @Override
    public String toString() {
        return "Zjxx{" +
                "id='" + id + '\'' +
                ", zjzl='" + zjzl + '\'' +
                ", zjhm='" + zjhm + '\'' +
                ", qtzzmc='" + qtzzmc + '\'' +
                '}';
    }

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "zjzl")
    public String getZjzl() {
        return zjzl;
    }

    public void setZjzl(String zjzl) {
        this.zjzl = zjzl;
    }

    @Basic
    @Column(name = "zjhm")
    public String getZjhm() {
        return zjhm;
    }

    public void setZjhm(String zjhm) {
        this.zjhm = zjhm;
    }

    @Basic
    @Column(name = "qtzzmc")
    public String getQtzzmc() {
        return qtzzmc;
    }

    public void setQtzzmc(String qtzzmc) {
        this.qtzzmc = qtzzmc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Zjxx zjxx = (Zjxx) o;

        if (id != null ? !id.equals(zjxx.id) : zjxx.id != null) return false;
        if (zjzl != null ? !zjzl.equals(zjxx.zjzl) : zjxx.zjzl != null) return false;
        if (zjhm != null ? !zjhm.equals(zjxx.zjhm) : zjxx.zjhm != null) return false;
        if (qtzzmc != null ? !qtzzmc.equals(zjxx.qtzzmc) : zjxx.qtzzmc != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (zjzl != null ? zjzl.hashCode() : 0);
        result = 31 * result + (zjhm != null ? zjhm.hashCode() : 0);
        result = 31 * result + (qtzzmc != null ? qtzzmc.hashCode() : 0);
        return result;
    }
}
