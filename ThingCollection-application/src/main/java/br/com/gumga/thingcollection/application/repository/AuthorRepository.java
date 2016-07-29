package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.Author;

public interface AuthorRepository extends GumgaCrudRepository<Author, Long> {
}