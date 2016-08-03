package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QMovement is a Querydsl query type for Movement
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QMovement extends EntityPathBase<Movement> {

    private static final long serialVersionUID = 1683566492L;

    public static final QMovement movement = new QMovement("movement");

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final DatePath<java.util.Date> outputDate = createDate("outputDate", java.util.Date.class);

    public final ListPath<Thing, QThing> thing = this.<Thing, QThing>createList("thing", Thing.class, QThing.class, PathInits.DIRECT2);

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QMovement(String variable) {
        super(Movement.class, forVariable(variable));
    }

    public QMovement(Path<? extends Movement> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMovement(PathMetadata<?> metadata) {
        super(Movement.class, metadata);
    }

}

