package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.Location;

public interface LocationRepository extends GumgaCrudRepository<Location, Long> {
}