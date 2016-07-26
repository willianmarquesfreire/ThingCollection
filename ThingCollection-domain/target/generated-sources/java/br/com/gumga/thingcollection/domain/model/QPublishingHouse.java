package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QPublishingHouse is a Querydsl query type for PublishingHouse
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QPublishingHouse extends EntityPathBase<PublishingHouse> {

    private static final long serialVersionUID = -849045792L;

    public static final QPublishingHouse publishingHouse = new QPublishingHouse("publishingHouse");

    public final gumga.framework.domain.QGumgaModel _super = new gumga.framework.domain.QGumgaModel(this);

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi = _super.oi;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public final StringPath website = createString("website");

    public QPublishingHouse(String variable) {
        super(PublishingHouse.class, forVariable(variable));
    }

    public QPublishingHouse(Path<? extends PublishingHouse> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPublishingHouse(PathMetadata<?> metadata) {
        super(PublishingHouse.class, metadata);
    }

}

