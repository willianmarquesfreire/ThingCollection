/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gumga.thingcollection.ThingCollection.domain.model;

/**
 *
 * @author willian
 */
public class Contact {
    
    private String description;
    private String phone;

    public Contact(String description, String phone) {
        this.description = description;
        this.phone = phone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    
    
}
