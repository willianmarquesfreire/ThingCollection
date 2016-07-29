package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.AcessoryRepository;
import br.com.gumga.thingcollection.domain.model.Acessory;


@Service
public class AcessoryService extends GumgaService<Acessory, Long> {

	private final AcessoryRepository repository;

	@Autowired
	public AcessoryService(AcessoryRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
