package org.iesbelen.records.customer;

import org.iesbelen.dto.CustomerDTO;

import java.util.List;

public record CustomerListRequestDto(List<CustomerDTO> customers) {
}
