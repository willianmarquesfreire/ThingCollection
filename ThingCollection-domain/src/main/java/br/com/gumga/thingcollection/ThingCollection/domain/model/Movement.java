/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gumga.thingcollection.ThingCollection.domain.model;

import java.util.Calendar;

/**
 *
 * @author willian
 */
public class Movement {
    
    private Calendar outputDate;
    private Calendar devolutionDate;
    private Calendar limit;
    private Thing thing;
    private People people;

    public Movement(Calendar outputDate, Calendar devolutionDate, Calendar limit, Thing thing, People people) {
        this.outputDate = outputDate;
        this.devolutionDate = devolutionDate;
        this.limit = limit;
        this.thing = thing;
        this.people = people;
    }

    public Calendar getOutputDate() {
        return outputDate;
    }

    public void setOutputDate(Calendar outputDate) {
        this.outputDate = outputDate;
    }

    public Calendar getDevolutionDate() {
        return devolutionDate;
    }

    public void setDevolutionDate(Calendar devolutionDate) {
        this.devolutionDate = devolutionDate;
    }

    public Calendar getLimit() {
        return limit;
    }

    public void setLimit(Calendar limit) {
        this.limit = limit;
    }

    public Thing getThing() {
        return thing;
    }

    public void setThing(Thing thing) {
        this.thing = thing;
    }

    public People getPeople() {
        return people;
    }

    public void setPeople(People people) {
        this.people = people;
    }
    
    
    
}
