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
public class PublishingHouse {
    
    private String name;
    private String email;
    private String website;
    private Contact contact;

    public PublishingHouse(String name, String email, String website, Contact contact) {
        this.name = name;
        this.email = email;
        this.website = website;
        this.contact = contact;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }
    
    
    
}
