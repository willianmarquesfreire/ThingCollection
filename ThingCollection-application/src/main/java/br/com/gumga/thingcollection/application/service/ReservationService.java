package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.ReservationRepository;
import br.com.gumga.thingcollection.domain.model.Reservation;


@Service
public class ReservationService extends GumgaService<Reservation, Long> {

	private final ReservationRepository repository;

	@Autowired
	public ReservationService(ReservationRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
