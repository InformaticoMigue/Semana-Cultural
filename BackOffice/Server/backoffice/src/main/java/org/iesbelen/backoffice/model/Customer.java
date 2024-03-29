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
@Table(name = "Customer")
public class Customer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private long id;

    private String name;

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Project> projects;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(
            name = "company_id", 
            nullable = false, 
            foreignKey = @ForeignKey(name = "FK_customer_company")
        )
    @JsonIgnore
    private Company company;
}
