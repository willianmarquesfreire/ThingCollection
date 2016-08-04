package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QReservation is a Querydsl query type for Reservation
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QReservation extends EntityPathBase<Reservation> {

    private static final long serialVersionUID = 1816334783L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReservation reservation = new QReservation("reservation");

    public final QMovement _super;

    public final DatePath<java.util.Date> expirationDate = createDate("expirationDate", java.util.Date.class);

    //inherited
    public final NumberPath<Long> id;

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi;

    //inherited
    public final DatePath<java.util.Date> outputDate;

    // inherited
    public final QThing thing;

    //inherited
    public final NumberPath<Integer> version;

    public QReservation(String variable) {
        this(Reservation.class, forVariable(variable), INITS);
    }

    public QReservation(Path<? extends Reservation> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QReservation(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QReservation(PathMetadata<?> metadata, PathInits inits) {
        this(Reservation.class, metadata, inits);
    }

    public QReservation(Class<? extends Reservation> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QMovement(type, metadata, inits);
        this.id = _super.id;
        this.oi = _super.oi;
        this.outputDate = _super.outputDate;
        this.thing = _super.thing;
        this.version = _super.version;
    }

}

