package com.tdh.po;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 基本信息实体类
 */

public class Jbxx implements Serializable {
    //信访编号
    private String xfbh;
    //条形码
    private String txm;
    //信访日期
    private String xfrq;
    //信访类别
    private String xflb;
    //信访来源
    private String xfly;
    //信访方式
    private String xffs;
    //行为涉及
    private String xwsj;
    //身份涉及
    private String sfsj;
    //紧急程度
    private String jjcd;
    //其他特征
    private String qttz;
    //问题描述
    private String wtms;
    //问题关键字
    private String wtgjz;
    //问题属地
    private String wtsd;
    //信访人数
    private String xfrs;
    //登记人
    private String djr;
    //登记时间
    private String djsj;
    //表单id号
    private String formIdNum;
    //证件id号
    private String zjIdNum;

    @Id
    @Column(name = "xfbh")
    public String getXfbh() {
        return xfbh;
    }

    public void setXfbh(String xfbh) {
        this.xfbh = xfbh;
    }

    @Basic
    @Column(name = "txm")
    public String getTxm() {
        return txm;
    }

    public void setTxm(String txm) {
        this.txm = txm;
    }

    @Basic
    @Column(name = "xfrq")
    public String getXfrq() {
        return xfrq;
    }

    public void setXfrq(String xfrq) {
        this.xfrq = xfrq;
    }

    @Basic
    @Column(name = "xflb")
    public String getXflb() {
        return xflb;
    }

    public void setXflb(String xflb) {
        this.xflb = xflb;
    }

    @Basic
    @Column(name = "xfly")
    public String getXfly() {
        return xfly;
    }

    public void setXfly(String xfly) {
        this.xfly = xfly;
    }

    @Basic
    @Column(name = "xffs")
    public String getXffs() {
        return xffs;
    }

    public void setXffs(String xffs) {
        this.xffs = xffs;
    }

    @Basic
    @Column(name = "xwsj")
    public String getXwsj() {
        return xwsj;
    }

    public void setXwsj(String xwsj) {
        this.xwsj = xwsj;
    }

    @Basic
    @Column(name = "sfsj")
    public String getSfsj() {
        return sfsj;
    }

    public void setSfsj(String sfsj) {
        this.sfsj = sfsj;
    }

    @Basic
    @Column(name = "jjcd")
    public String getJjcd() {
        return jjcd;
    }

    public void setJjcd(String jjcd) {
        this.jjcd = jjcd;
    }

    @Basic
    @Column(name = "qttz")
    public String getQttz() {
        return qttz;
    }

    public void setQttz(String qttz) {
        this.qttz = qttz;
    }

    @Basic
    @Column(name = "wtms")
    public String getWtms() {
        return wtms;
    }

    public void setWtms(String wtms) {
        this.wtms = wtms;
    }

    @Basic
    @Column(name = "wtgjz")
    public String getWtgjz() {
        return wtgjz;
    }

    public void setWtgjz(String wtgjz) {
        this.wtgjz = wtgjz;
    }

    @Basic
    @Column(name = "wtsd")
    public String getWtsd() {
        return wtsd;
    }

    public void setWtsd(String wtsd) {
        this.wtsd = wtsd;
    }

    @Basic
    @Column(name = "xfrs")
    public String getXfrs() {
        return xfrs;
    }

    public void setXfrs(String xfrs) {
        this.xfrs = xfrs;
    }

    @Basic
    @Column(name = "djr")
    public String getDjr() {
        return djr;
    }

    public void setDjr(String djr) {
        this.djr = djr;
    }

    @Basic
    @Column(name = "djsj")
    public String getDjsj() {
        return djsj;
    }

    public void setDjsj(String djsj) {
        this.djsj = djsj;
    }

    @Basic
    @Column(name = "formIdNum")
    public String getFormIdNum() {
        return formIdNum;
    }

    public void setFormIdNum(String formIdNum) {
        this.formIdNum = formIdNum;
    }

    @Basic
    @Column(name = "zjIdNum")
    public String getZjIdNum() {
        return zjIdNum;
    }

    public void setZjIdNum(String zjIdNum) {
        this.zjIdNum = zjIdNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Jbxx jbxx = (Jbxx) o;

        if (xfbh != null ? !xfbh.equals(jbxx.xfbh) : jbxx.xfbh != null) return false;
        if (txm != null ? !txm.equals(jbxx.txm) : jbxx.txm != null) return false;
        if (xfrq != null ? !xfrq.equals(jbxx.xfrq) : jbxx.xfrq != null) return false;
        if (xflb != null ? !xflb.equals(jbxx.xflb) : jbxx.xflb != null) return false;
        if (xfly != null ? !xfly.equals(jbxx.xfly) : jbxx.xfly != null) return false;
        if (xffs != null ? !xffs.equals(jbxx.xffs) : jbxx.xffs != null) return false;
        if (xwsj != null ? !xwsj.equals(jbxx.xwsj) : jbxx.xwsj != null) return false;
        if (sfsj != null ? !sfsj.equals(jbxx.sfsj) : jbxx.sfsj != null) return false;
        if (jjcd != null ? !jjcd.equals(jbxx.jjcd) : jbxx.jjcd != null) return false;
        if (qttz != null ? !qttz.equals(jbxx.qttz) : jbxx.qttz != null) return false;
        if (wtms != null ? !wtms.equals(jbxx.wtms) : jbxx.wtms != null) return false;
        if (wtgjz != null ? !wtgjz.equals(jbxx.wtgjz) : jbxx.wtgjz != null) return false;
        if (wtsd != null ? !wtsd.equals(jbxx.wtsd) : jbxx.wtsd != null) return false;
        if (xfrs != null ? !xfrs.equals(jbxx.xfrs) : jbxx.xfrs != null) return false;
        if (djr != null ? !djr.equals(jbxx.djr) : jbxx.djr != null) return false;
        if (djsj != null ? !djsj.equals(jbxx.djsj) : jbxx.djsj != null) return false;
        if (formIdNum != null ? !formIdNum.equals(jbxx.formIdNum) : jbxx.formIdNum != null) return false;
        if (zjIdNum != null ? !zjIdNum.equals(jbxx.zjIdNum) : jbxx.zjIdNum != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = xfbh != null ? xfbh.hashCode() : 0;
        result = 31 * result + (txm != null ? txm.hashCode() : 0);
        result = 31 * result + (xfrq != null ? xfrq.hashCode() : 0);
        result = 31 * result + (xflb != null ? xflb.hashCode() : 0);
        result = 31 * result + (xfly != null ? xfly.hashCode() : 0);
        result = 31 * result + (xffs != null ? xffs.hashCode() : 0);
        result = 31 * result + (xwsj != null ? xwsj.hashCode() : 0);
        result = 31 * result + (sfsj != null ? sfsj.hashCode() : 0);
        result = 31 * result + (jjcd != null ? jjcd.hashCode() : 0);
        result = 31 * result + (qttz != null ? qttz.hashCode() : 0);
        result = 31 * result + (wtms != null ? wtms.hashCode() : 0);
        result = 31 * result + (wtgjz != null ? wtgjz.hashCode() : 0);
        result = 31 * result + (wtsd != null ? wtsd.hashCode() : 0);
        result = 31 * result + (xfrs != null ? xfrs.hashCode() : 0);
        result = 31 * result + (djr != null ? djr.hashCode() : 0);
        result = 31 * result + (djsj != null ? djsj.hashCode() : 0);
        result = 31 * result + (formIdNum != null ? formIdNum.hashCode() : 0);
        result = 31 * result + (zjIdNum != null ? zjIdNum.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Jbxx{" +
                "xfbh='" + xfbh + '\'' +
                ", txm='" + txm + '\'' +
                ", xfrq='" + xfrq + '\'' +
                ", xflb='" + xflb + '\'' +
                ", xfly='" + xfly + '\'' +
                ", xffs='" + xffs + '\'' +
                ", xwsj='" + xwsj + '\'' +
                ", sfsj='" + sfsj + '\'' +
                ", jjcd='" + jjcd + '\'' +
                ", qttz='" + qttz + '\'' +
                ", wtms='" + wtms + '\'' +
                ", wtgjz='" + wtgjz + '\'' +
                ", wtsd='" + wtsd + '\'' +
                ", xfrs='" + xfrs + '\'' +
                ", djr='" + djr + '\'' +
                ", djsj='" + djsj + '\'' +
                ", formIdNum='" + formIdNum + '\'' +
                ", zjIdNum='" + zjIdNum + '\'' +
                '}';
    }
}
