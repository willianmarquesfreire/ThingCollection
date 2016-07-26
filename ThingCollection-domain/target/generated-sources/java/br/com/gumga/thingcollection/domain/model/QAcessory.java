package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QAcessory is a Querydsl query type for Acessory
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QAcessory extends EntityPathBase<Acessory> {

    private static final long serialVersionUID = -289008416L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAcessory acessory = new QAcessory("acessory");

    public final QThing _super;

    public final NumberPath<Integer> amount = createNumber("amount", Integer.class);

    // inherited
    public final QLocation currentLocation;

    public final StringPath description = createString("description");

    //inherited
    public final NumberPath<Long> id;

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi;

    //inherited
    public final NumberPath<Integer> version;

    public QAcessory(String variable) {
        this(Acessory.class, forVariable(variable), INITS);
    }

    public QAcessory(Path<? extends Acessory> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QAcessory(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QAcessory(PathMetadata<?> metadata, PathInits inits) {
        this(Acessory.class, metadata, inits);
    }

    public QAcessory(Class<? extends Acessory> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QThing(type, metadata, inits);
        this.currentLocation = _super.currentLocation;
        this.id = _super.id;
        this.oi = _super.oi;
        this.version = _super.version;
    }

}

