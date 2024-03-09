package org.iesbelen.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private long id;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
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
