/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gumga.thingcollection.ThingCollection.domain.model;

import java.util.List;

/**
 *
 * @author willian
 */
public class Book {
    
    private String title;
    private String isbn;
    private int pages;
    private int publicationYear;
    private int editionNumber;
    private List<Author> authors;

    public Book(String title, String isbn, int pages, int publicationYear, int editionNumber, List<Author> authors) {
        this.title = title;
        this.isbn = isbn;
        this.pages = pages;
        this.publicationYear = publicationYear;
        this.editionNumber = editionNumber;
        this.authors = authors;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }

    public int getEditionNumber() {
        return editionNumber;
    }

    public void setEditionNumber(int editionNumber) {
        this.editionNumber = editionNumber;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }
    
    
    
    
}
