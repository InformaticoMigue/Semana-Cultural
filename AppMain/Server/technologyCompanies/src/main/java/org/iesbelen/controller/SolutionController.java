package org.iesbelen.controller;
import java.util.List;
import java.util.Optional;
import org.iesbelen.model.Solution;
import org.iesbelen.records.solution.SolutionListRequest;
import org.iesbelen.service.solution.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("solutions")
public class SolutionController {
    
    @Autowired
    SolutionService solutionService; 
    
    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Solution> list(){
        return (solutionService.getAll());
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Solution> one(@PathVariable long id){
        return this.solutionService.find(id);
    }

}
