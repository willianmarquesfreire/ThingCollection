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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Location")
//@Indexed
@Audited
@Entity
public class Location extends GumgaModel<Long> {

    @Version
    private Integer version;
    private String name;
    @Columns(columns = {
        @Column(name = "gps_latitude"),
        @Column(name = "gps_longitude")
    })
    private GumgaGeoLocation gps;

    public Location() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GumgaGeoLocation getGps() {
        return this.gps;
    }

    public void setGps(GumgaGeoLocation gps) {
        this.gps = gps;
    }
}
