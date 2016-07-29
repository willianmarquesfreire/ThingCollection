package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.Book;

public interface BookRepository extends GumgaCrudRepository<Book, Long> {
}