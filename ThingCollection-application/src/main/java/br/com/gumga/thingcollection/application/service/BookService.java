package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.BookRepository;
import br.com.gumga.thingcollection.domain.model.Book;


@Service
public class BookService extends GumgaService<Book, Long> {

	private final BookRepository repository;

	@Autowired
	public BookService(BookRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
