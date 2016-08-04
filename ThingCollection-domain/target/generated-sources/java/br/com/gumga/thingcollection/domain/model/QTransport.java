package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QTransport is a Querydsl query type for Transport
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QTransport extends EntityPathBase<Transport> {

    private static final long serialVersionUID = 622962140L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTransport transport = new QTransport("transport");

    public final QMovement _super;

    public final QLocation destination;

    //inherited
    public final NumberPath<Long> id;

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi;

    public final QLocation origin;

    //inherited
    public final DatePath<java.util.Date> outputDate;

    // inherited
    public final QThing thing;

    //inherited
    public final NumberPath<Integer> version;

    public QTransport(String variable) {
        this(Transport.class, forVariable(variable), INITS);
    }

    public QTransport(Path<? extends Transport> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QTransport(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QTransport(PathMetadata<?> metadata, PathInits inits) {
        this(Transport.class, metadata, inits);
    }

    public QTransport(Class<? extends Transport> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QMovement(type, metadata, inits);
        this.destination = inits.isInitialized("destination") ? new QLocation(forProperty("destination")) : null;
        this.id = _super.id;
        this.oi = _super.oi;
        this.origin = inits.isInitialized("origin") ? new QLocation(forProperty("origin")) : null;
        this.outputDate = _super.outputDate;
        this.thing = _super.thing;
        this.version = _super.version;
    }

}

