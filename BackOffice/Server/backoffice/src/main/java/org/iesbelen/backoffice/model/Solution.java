package org.iesbelen.backoffice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Service")
public class Solution {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    private long id;
    
    private String name;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToMany(mappedBy = "solutions")
    @JsonIgnore
    private List<Company> companies;

}
