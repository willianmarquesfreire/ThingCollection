package br.com.gumga.thingcollection.api;

import br.com.gumga.thingcollection.application.service.BookService;
import br.com.gumga.thingcollection.domain.model.Book;
import com.wordnik.swagger.annotations.ApiOperation;
import gumga.framework.annotations.GumgaSwagger;
import gumga.framework.application.GumgaService;
import gumga.framework.presentation.GumgaAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import gumga.framework.presentation.RestResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.validation.BindingResult;
import gumga.framework.application.GumgaTempFileService;
import gumga.framework.domain.domains.GumgaImage;
import gumga.framework.presentation.GumgaAPI;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/book")
public class BookAPI extends GumgaAPI<Book, Long> {
    
    @Autowired
    private BookService bookService;

    @Autowired
    public BookAPI(GumgaService<Book, Long> service) {    
        super(service);
    }

    @Override
    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Book load(@PathVariable Long id) {
        System.out.println("aquuuuuuuuuuuuuuuu");
        return ((BookService) service).loadBookFat(id);
    }
    
    
    
    
    
    @RequestMapping(value = "/bookid/{id}")
    public Book returnBook(@PathVariable long id) {
        return bookService.loadBookFat(id);
    }
    
    


}
