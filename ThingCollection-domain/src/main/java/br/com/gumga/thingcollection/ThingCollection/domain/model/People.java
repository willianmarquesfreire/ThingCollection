/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gumga.thingcollection.ThingCollection.domain.model;

import java.util.Calendar;
import java.util.List;

/**
 *
 * @author willian
 */
public class People {
    
    private String name;
    private Calendar dateBirth;
    private List<Contact> contacts;

    public People(String name, Calendar dateBirth, List<Contact> contacts) {
        this.name = name;
        this.dateBirth = dateBirth;
        this.contacts = contacts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Calendar getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(Calendar dateBirth) {
        this.dateBirth = dateBirth;
    }

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
    
    
    
}
