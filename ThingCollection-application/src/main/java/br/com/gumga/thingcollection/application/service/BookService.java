package br.com.gumga.thingcollection.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.thingcollection.application.repository.BookRepository;
import br.com.gumga.thingcollection.domain.model.Book;

import br.com.gumga.thingcollection.domain.model.Author;
import br.com.gumga.thingcollection.domain.model.Subject;

@Service
public class BookService extends GumgaService<Book, Long> {

	private final BookRepository repository;

	@Autowired
	public BookService(BookRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Book loadBookFat(Long id) {
		Book obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getAuthor());
		Hibernate.initialize(obj.getAuthor());
		Hibernate.initialize(obj.getSubjects());
		
		
		return obj;
	}
}
