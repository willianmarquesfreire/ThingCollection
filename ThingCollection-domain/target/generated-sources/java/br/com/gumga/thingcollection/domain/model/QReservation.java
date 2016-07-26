package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QReservation is a Querydsl query type for Reservation
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QReservation extends EntityPathBase<Reservation> {

    private static final long serialVersionUID = 1816334783L;

    public static final QReservation reservation = new QReservation("reservation");

    public final QMovement _super = new QMovement(this);

    public final DateTimePath<java.util.Date> expirationDate = createDateTime("expirationDate", java.util.Date.class);

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    //inherited
    public final DateTimePath<java.util.Date> outputDate = _super.outputDate;

    //inherited
    public final NumberPath<Integer> version = _super.version;

    public QReservation(String variable) {
        super(Reservation.class, forVariable(variable));
    }

    public QReservation(Path<? extends Reservation> path) {
        super(path.getType(), path.getMetadata());
    }

    public QReservation(PathMetadata<?> metadata) {
        super(Reservation.class, metadata);
    }

}

