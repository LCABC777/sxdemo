package com.tdh.controller;
import com.tdh.service.XfdjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author 李超
 * @description 信访登记控制类
 */
@Controller
@RequestMapping("/xfdj")
public class XfdjController {
    @Autowired
    private XfdjService xfdjService;
    /**
     * @description 主页面
     * @return
     */
   @RequestMapping("/main.do")
    public String toXfdjMain(){
    return "xfdj";
    }

   @RequestMapping(value = "/getJcdx.do",produces = "application/xml;charset=utf-8")
   @ResponseBody
    public String getJcdx(){
        return xfdjService.getJcdxXml();
   }

   @RequestMapping("/toJcdxPage.do")
    public String toJcdxPage(){
        return "jcdx_page";
   }

   @RequestMapping("/addZrr.do")
    public String addZrr(){
       return "xfdj_zrr";
   }

    @RequestMapping("/addDw.do")
    public String addDw(){
        return "xfdj_dw";
    }

    @RequestMapping("/addSjsg.do")
    public String addSjsg(){
       return "xfdj_sjsg";
   }

    @RequestMapping("/addFyr.do")
    public String addFyr()
    {
        return "xfdj_fyr";
    }

    @RequestMapping("/saveXfdj.do")
    @ResponseBody
    public String saveXfdj(HttpServletRequest request){
       try{
           xfdjService.saveXfdj(request);
       }
       catch (Exception e){
           return "error";
       }
       return "success";
    }

    @RequestMapping(value = "/getXfdjByXfbh.do")//,produces = "application/xml;charset=utf-8")
    @ResponseBody
    public  List<List<Object>> getXfdjByXfbh(String xfbh){
       List<List<Object>> lists=xfdjService.getXfdjByXfbh(xfbh);
       return lists;
    }
}
