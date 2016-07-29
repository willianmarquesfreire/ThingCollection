package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.People;

public interface PeopleRepository extends GumgaCrudRepository<People, Long> {
}