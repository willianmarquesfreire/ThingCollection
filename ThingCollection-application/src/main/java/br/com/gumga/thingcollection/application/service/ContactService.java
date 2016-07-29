package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.ContactRepository;
import br.com.gumga.thingcollection.domain.model.Contact;


@Service
public class ContactService extends GumgaService<Contact, Long> {

	private final ContactRepository repository;

	@Autowired
	public ContactService(ContactRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
