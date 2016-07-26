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
public class Address {
    
    private String publicPlace;
    private String district;
    private String complement;
    private String number;
    private String zipCode;
    private String state;
    private String country;

    public Address(String publicPlace, String district, String complement, String number, String zipCode, String state, String country) {
        this.publicPlace = publicPlace;
        this.district = district;
        this.complement = complement;
        this.number = number;
        this.zipCode = zipCode;
        this.state = state;
        this.country = country;
    }

    public String getPublicPlace() {
        return publicPlace;
    }

    public void setPublicPlace(String publicPlace) {
        this.publicPlace = publicPlace;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    
    
    
}
