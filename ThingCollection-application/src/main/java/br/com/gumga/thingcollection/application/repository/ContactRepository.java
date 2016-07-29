package br.com.gumga.thingcollection.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.thingcollection.domain.model.Contact;

public interface ContactRepository extends GumgaCrudRepository<Contact, Long> {
}