package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.ThingRepository;
import br.com.gumga.thingcollection.domain.model.Thing;


@Service
public class ThingService extends GumgaService<Thing, Long> {

	private final ThingRepository repository;

	@Autowired
	public ThingService(ThingRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
