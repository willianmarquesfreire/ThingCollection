package br.com.gumga.thingcollection.application.service;

import gumga.framework.core.GumgaValues;
import org.springframework.stereotype.Component;

public class ApplicationConstantsForTest implements GumgaValues {

    @Override
    public String getGumgaSecurityUrl() {
        return "http://192.168.25.250/security-api/publicoperations";
        //return "http://gumga.servehttp.com/security-api/publicoperations";
    }

    @Override
    public boolean isLogActive() {
        return true;
    }

}
