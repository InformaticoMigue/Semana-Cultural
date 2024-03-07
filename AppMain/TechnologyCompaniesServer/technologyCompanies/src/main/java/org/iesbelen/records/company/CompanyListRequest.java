package org.iesbelen.records.company;

import org.iesbelen.model.Company;

import java.util.List;

public record CompanyListRequest(List<Company> companies) {
}
