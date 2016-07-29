package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.PublishingHouseRepository;
import br.com.gumga.thingcollection.domain.model.PublishingHouse;


@Service
public class PublishingHouseService extends GumgaService<PublishingHouse, Long> {

	private final PublishingHouseRepository repository;

	@Autowired
	public PublishingHouseService(PublishingHouseRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
