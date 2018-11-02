/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.cesar.validador.nom.front;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author corozcor
 */
@Controller
public class SpringController {
    
    @RequestMapping(value = "/2016", method = RequestMethod.GET)
    public String nom2016(){
        return "Nom2016JSP";
    }
    
}
