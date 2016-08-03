package br.com.gumga.thingcollection.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;
import com.mysema.query.types.path.PathInits;


/**
 * QBook is a Querydsl query type for Book
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QBook extends EntityPathBase<Book> {

    private static final long serialVersionUID = -111941546L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBook book = new QBook("book");

    public final QThing _super;

    public final ListPath<Author, QAuthor> author = this.<Author, QAuthor>createList("author", Author.class, QAuthor.class, PathInits.DIRECT2);

    // inherited
    public final QLocation currentLocation;

    //inherited
    public final StringPath description;

    public final StringPath editionNumber = createString("editionNumber");

    //inherited
    public final NumberPath<Long> id;

    public final StringPath isbn = createString("isbn");

    //inherited
    public final ComparablePath<gumga.framework.domain.domains.GumgaOi> oi;

    public final NumberPath<Integer> pages = createNumber("pages", Integer.class);

    public final DateTimePath<java.util.Date> publicationYear = createDateTime("publicationYear", java.util.Date.class);

    public final QPublishingHouse publishingHouse;

    public final ListPath<Subject, QSubject> subjects = this.<Subject, QSubject>createList("subjects", Subject.class, QSubject.class, PathInits.DIRECT2);

    public final StringPath title = createString("title");

    //inherited
    public final NumberPath<Integer> version;

    public QBook(String variable) {
        this(Book.class, forVariable(variable), INITS);
    }

    public QBook(Path<? extends Book> path) {
        this(path.getType(), path.getMetadata(), path.getMetadata().isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QBook(PathMetadata<?> metadata) {
        this(metadata, metadata.isRoot() ? INITS : PathInits.DEFAULT);
    }

    public QBook(PathMetadata<?> metadata, PathInits inits) {
        this(Book.class, metadata, inits);
    }

    public QBook(Class<? extends Book> type, PathMetadata<?> metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QThing(type, metadata, inits);
        this.currentLocation = _super.currentLocation;
        this.description = _super.description;
        this.id = _super.id;
        this.oi = _super.oi;
        this.publishingHouse = inits.isInitialized("publishingHouse") ? new QPublishingHouse(forProperty("publishingHouse")) : null;
        this.version = _super.version;
    }

}

