package br.com.gumga.thingcollection.application.service;

import br.com.gumga.thingcollection.domain.model.Book;
import br.com.gumga.thingcollection.domain.model.Subject;
import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import static org.mockito.Mockito.mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 * @author willian
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfigForTest.class})
public class BookServiceTest {

    @Autowired
    private BookService bookService;
    @Autowired
    private SubjectService subjectService;

    public BookServiceTest() {

    }

    @Before
    public void setUp() {
        Subject assunto1 = new Subject();
        assunto1.setDescription("terror");
        Subject assunto2 = new Subject();
        assunto2.setDescription("drama");
        subjectService.save(assunto1);
        subjectService.save(assunto2);

        Book b = new Book();
        b.setTitle("O meu livro");
        b.setSubjects(new ArrayList<>());
        b.getSubjects().add(assunto1);
        b.getSubjects().add(assunto2);
        b = bookService.save(b);
        
                

    }

    @Test
    public void verificaSeAInjecaoFuncionou() {
        assertNotNull(bookService);
    }

    @Test
    public void loadBookFatTest() {
        Book livroDoBanco = bookService.loadBookFat(1l);
        assertEquals(2, livroDoBanco.getSubjects().size());
    }

}
