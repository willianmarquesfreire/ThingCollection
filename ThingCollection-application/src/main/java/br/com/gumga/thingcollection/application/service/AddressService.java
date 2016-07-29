package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.AddressRepository;
import br.com.gumga.thingcollection.domain.model.Address;


@Service
public class AddressService extends GumgaService<Address, Long> {

	private final AddressRepository repository;

	@Autowired
	public AddressService(AddressRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
