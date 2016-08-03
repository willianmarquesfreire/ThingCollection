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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Movement")
//@Indexed
@Audited
@Entity
public class Movement extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date outputDate;
    @OneToMany
    private List<Thing> thing;

    public Movement() {
    }

    public Date getOutputDate() {
        return this.outputDate;
    }

    public void setOutputDate(Date outputDate) {
        this.outputDate = outputDate;
    }

    public List<Thing> getThing() {
        return thing;
    }

    public void setThing(List<Thing> thing) {
        this.thing = thing;
    }
    
}
