package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.MovementRepository;
import br.com.gumga.thingcollection.domain.model.Movement;


@Service
public class MovementService extends GumgaService<Movement, Long> {

	private final MovementRepository repository;

	@Autowired
	public MovementService(MovementRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
