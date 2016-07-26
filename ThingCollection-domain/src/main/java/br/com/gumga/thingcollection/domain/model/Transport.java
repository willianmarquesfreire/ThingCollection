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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Transport")
//@Indexed
@Audited
@Entity
public class Transport extends Movement {

	private Location origin;
	private Location destination;

	public Transport() {
	}

	public Location getOrigin() {
		return this.origin;
	}
	public void setOrigin(Location origin) {
		this.origin = origin;
	}

	public Location getDestination() {
		return this.destination;
	}
	public void setDestination(Location destination) {
		this.destination = destination;
	}
}