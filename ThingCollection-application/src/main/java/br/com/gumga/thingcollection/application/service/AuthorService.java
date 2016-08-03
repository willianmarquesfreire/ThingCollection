package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.AuthorRepository;
import br.com.gumga.thingcollection.domain.model.Author;

import br.com.gumga.thingcollection.domain.model.Contact;
import br.com.gumga.thingcollection.domain.model.Address;

@Service
public class AuthorService extends GumgaService<Author, Long> {

	private final AuthorRepository repository;

	@Autowired
	public AuthorService(AuthorRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Author loadAuthorFat(Long id) {
		Author obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getContact());
		Hibernate.initialize(obj.getContact());
		Hibernate.initialize(obj.getAddress());
		
		
		return obj;
	}
}
