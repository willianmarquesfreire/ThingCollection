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

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final DateTimePath<java.util.Calendar> devolutionDate = createDateTime("devolutionDate", java.util.Calendar.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final DateTimePath<java.util.Date> limit = createDateTime("limit", java.util.Date.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

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

