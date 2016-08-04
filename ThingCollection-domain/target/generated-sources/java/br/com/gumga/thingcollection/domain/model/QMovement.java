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

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMovement movement = new QMovement("movement");

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final DatePath<java.util.Date> outputDate = createDate("outputDate", java.util.Date.class);

    public final QThing thing;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QMovement(String variable) {
        this(Movement.class, forVariable(variable), INITS);
    }

    public QMovement(Path<? extends Movement> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QMovement(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QMovement(PathMetadata<?> metadata, PathInits inits) {
        this(Movement.class, metadata, inits);
    }

    public QMovement(Class<? extends Movement> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this.thing = inits.isInitialized("thing") ? new QThing(forProperty("thing"), inits.get("thing")) : null;
    }

}

