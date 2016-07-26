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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Emprestimo")
//@Indexed
@Audited
@Entity
public class Loan extends GumgaModel<Long> {

    @Version
    private Integer version;
	private Date limit;
	private Calendar devolutionDate;

	public Loan() {
	}

	public Date getLimit() {
		return this.limit;
	}
	public void setLimit(Date limit) {
		this.limit = limit;
	}

	public Calendar getDevolutionDate() {
		return this.devolutionDate;
	}
	public void setDevolutionDate(Calendar devolutionDate) {
		this.devolutionDate = devolutionDate;
	}
}