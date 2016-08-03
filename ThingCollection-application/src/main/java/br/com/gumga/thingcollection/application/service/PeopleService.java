package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.PeopleRepository;
import br.com.gumga.thingcollection.domain.model.People;

import br.com.gumga.thingcollection.domain.model.Contact;
import br.com.gumga.thingcollection.domain.model.Address;

@Service
public class PeopleService extends GumgaService<People, Long> {

	private final PeopleRepository repository;

	@Autowired
	public PeopleService(PeopleRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public People loadPeopleFat(Long id) {
		People obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getContact());
		Hibernate.initialize(obj.getContact());
		Hibernate.initialize(obj.getAddress());
		
		
		return obj;
	}
}
