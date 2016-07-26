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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Address")
//@Indexed
@Audited
@Entity
public class Address extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String description;
	@Columns(columns = {
	@Column(name = "address_zip_code"),
	@Column(name = "address_premisse_type"),
	@Column(name = "address_premisse"),
	@Column(name = "address_number"),
	@Column(name = "address_information"),
	@Column(name = "address_neighbourhood"),
	@Column(name = "address_localization"),
	@Column(name = "address_state"),
	@Column(name = "address_country")
	})
	private GumgaAddress address;

	public Address() {
	}

	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public GumgaAddress getAddress() {
		return this.address;
	}
	public void setAddress(GumgaAddress address) {
		this.address = address;
	}
}