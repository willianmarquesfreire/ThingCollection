package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QLoan is a Querydsl query type for Loan
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QLoan extends EntityPathBase<Loan> {

    private static final long serialVersionUID = -111644067L;

    public static final QLoan loan = new QLoan("loan");

    public final QMovement _super = new QMovement(this);

    public final DatePath<java.util.Calendar> devolutionDate = createDate("devolutionDate", java.util.Calendar.class);

    //inherited
    public final NumberPath<Long> id = _super.id;

    public final DatePath<java.util.Date> limit = createDate("limit", java.util.Date.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    //inherited
    public final DatePath<java.util.Date> outputDate = _super.outputDate;

    //inherited
    public final ListPath<Thing, QThing> thing = _super.thing;

    //inherited
    public final NumberPath<Integer> version = _super.version;

    public QLoan(String variable) {
        super(Loan.class, forVariable(variable));
    }

    public QLoan(Path<? extends Loan> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLoan(PathMetadata<?> metadata) {
        super(Loan.class, metadata);
    }

}

