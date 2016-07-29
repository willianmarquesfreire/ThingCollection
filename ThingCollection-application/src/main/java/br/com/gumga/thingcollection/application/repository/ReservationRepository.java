package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.Reservation;

public interface ReservationRepository extends GumgaCrudRepository<Reservation, Long> {
}