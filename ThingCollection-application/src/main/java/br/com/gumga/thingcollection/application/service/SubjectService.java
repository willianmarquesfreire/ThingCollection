package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.SubjectRepository;
import br.com.gumga.thingcollection.domain.model.Subject;


@Service
public class SubjectService extends GumgaService<Subject, Long> {

	private final SubjectRepository repository;

	@Autowired
	public SubjectService(SubjectRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
