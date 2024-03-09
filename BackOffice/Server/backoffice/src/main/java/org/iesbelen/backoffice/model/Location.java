package org.iesbelen.backoffice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(
        name = "company_id",
        nullable = false,
        foreignKey = @ForeignKey(name = "FK_company_location")
    )
    @JsonIgnore
    private Company company;
    
    private String country;
    
    private String address;
    
    private String postalCode;
}
