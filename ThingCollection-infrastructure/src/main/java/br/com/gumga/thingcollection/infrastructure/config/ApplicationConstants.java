package br.com.gumga.thingcollection.infrastructure.config;

import gumga.framework.core.GumgaValues;
import org.springframework.stereotype.Component;

@Component
public class ApplicationConstants implements GumgaValues {

    @Override
    public String getGumgaSecurityUrl() {
        return "http://192.168.25.250/security-api/publicoperations";
    }

    @Override
    public boolean isLogActive() {
        return true;
    }

}
