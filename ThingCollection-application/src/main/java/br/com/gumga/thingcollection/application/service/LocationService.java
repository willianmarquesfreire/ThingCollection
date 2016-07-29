package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.LocationRepository;
import br.com.gumga.thingcollection.domain.model.Location;


@Service
public class LocationService extends GumgaService<Location, Long> {

	private final LocationRepository repository;

	@Autowired
	public LocationService(LocationRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
