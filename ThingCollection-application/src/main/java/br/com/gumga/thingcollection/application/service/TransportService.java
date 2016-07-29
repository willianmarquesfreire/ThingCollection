package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.TransportRepository;
import br.com.gumga.thingcollection.domain.model.Transport;


@Service
public class TransportService extends GumgaService<Transport, Long> {

	private final TransportRepository repository;

	@Autowired
	public TransportService(TransportRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
