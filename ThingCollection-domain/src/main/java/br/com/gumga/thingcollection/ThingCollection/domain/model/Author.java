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
public class Author extends People{
    
    private String genery;

    public Author(String genery, String name, Calendar dateBirth, List<Contact> contacts) {
        super(name, dateBirth, contacts);
        this.genery = genery;
    }

    public String getGenery() {
        return genery;
    }

    public void setGenery(String genery) {
        this.genery = genery;
    }
    
    
    
}
