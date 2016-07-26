package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QThing is a Querydsl query type for Thing
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QThing extends EntityPathBase<Thing> {

    private static final long serialVersionUID = 841188641L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QThing thing = new QThing("thing");

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final QLocation currentLocation;

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QThing(String variable) {
        this(Thing.class, forVariable(variable), INITS);
    }

    public QThing(Path<? extends Thing> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QThing(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QThing(PathMetadata<?> metadata, PathInits inits) {
        this(Thing.class, metadata, inits);
    }

    public QThing(Class<? extends Thing> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this.currentLocation = inits.isInitialized("currentLocation") ? new QLocation(forProperty("currentLocation")) : null;
    }

}

