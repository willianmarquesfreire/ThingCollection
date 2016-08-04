package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QLoan is a Querydsl query type for Loan
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QLoan extends EntityPathBase<Loan> {

    private static final long serialVersionUID = -111644067L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QLoan loan = new QLoan("loan");

    public final QMovement _super;

    public final DatePath<java.util.Calendar> devolutionDate = createDate("devolutionDate", java.util.Calendar.class);

    //inherited
    public final NumberPath<Long> id;

    public final DatePath<java.util.Date> limitDate = createDate("limitDate", java.util.Date.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi;

    //inherited
    public final DatePath<java.util.Date> outputDate;

    // inherited
    public final QThing thing;

    //inherited
    public final NumberPath<Integer> version;

    public QLoan(String variable) {
        this(Loan.class, forVariable(variable), INITS);
    }

    public QLoan(Path<? extends Loan> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QLoan(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QLoan(PathMetadata<?> metadata, PathInits inits) {
        this(Loan.class, metadata, inits);
    }

    public QLoan(Class<? extends Loan> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QMovement(type, metadata, inits);
        this.id = _super.id;
        this.oi = _super.oi;
        this.outputDate = _super.outputDate;
        this.thing = _super.thing;
        this.version = _super.version;
    }

}

