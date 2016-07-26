package br.com.gumga.thingcollection.domain.model;
import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Book")
//@Indexed
@Audited
@Entity
public class Book extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String title;
	private String isbn;
	private int pages;
	private Date publicationYear;
	private String editionNumber;

	public Book() {
	}

	public String getTitle() {
		return this.title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public String getIsbn() {
		return this.isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public int getPages() {
		return this.pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}

	public Date getPublicationYear() {
		return this.publicationYear;
	}
	public void setPublicationYear(Date publicationYear) {
		this.publicationYear = publicationYear;
	}

	public String getEditionNumber() {
		return this.editionNumber;
	}
	public void setEditionNumber(String editionNumber) {
		this.editionNumber = editionNumber;
	}
}