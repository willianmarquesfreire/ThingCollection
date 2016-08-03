package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QPeople is a Querydsl query type for People
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QPeople extends EntityPathBase<People> {

    private static final long serialVersionUID = 189937852L;

    public static final QPeople people = new QPeople("people");

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final ListPath<Address, QAddress> address = this.<Address, QAddress>createList("address", Address.class, QAddress.class, PathInits.DIRECT2);

    public final ListPath<Contact, QContact> contact = this.<Contact, QContact>createList("contact", Contact.class, QContact.class, PathInits.DIRECT2);

    public final DateTimePath<java.util.Date> dateBirth = createDateTime("dateBirth", java.util.Date.class);

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public final StringPath website = createString("website");

    public QPeople(String variable) {
        super(People.class, forVariable(variable));
    }

    public QPeople(Path<? extends People> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPeople(PathMetadata<?> metadata) {
        super(People.class, metadata);
    }

}

