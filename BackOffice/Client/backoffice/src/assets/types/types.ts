export type Company = {
    id:              number;
    name:            string;
    phone:           string;
    email:           string;
    website:         string;
    creationDate:    Date;
    numberEmployees: number;
    annualIncome:    number;
    countryOfOrigin: string;
    customers:       Customer[];
    solutions:        Solution[];
    locations:       Location[];
}

export type Customer = {
    id:       number;
    name:     string;
    projects: Project[];
}

export type Project = {
    id:          number;
    name:        string;
    description: string;
    startDate:   Date;
    endDate:     Date | null;
    customerId: number;
    companyId: number;
}

export type Location = {
    id:         number;
    country:    string;
    address:    string;
    postalCode: string;
}

export type Solution = {
    id:   number;
    name: string;
}
