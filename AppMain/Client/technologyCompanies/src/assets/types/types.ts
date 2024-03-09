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

export interface CountryInfo {
    features: Feature[];
    type:     string;
}

export interface Feature {
    geometry:   Geometry;
    type:       FeatureType;
    properties: Properties;
}

export interface Geometry {
    coordinates: number[];
    type:        GeometryType;
}

export enum GeometryType {
    Point = "Point",
}

export interface Properties {
    osm_type:    OsmType;
    osm_id:      number;
    extent?:     number[];
    country:     string;
    osm_key:     string;
    countrycode: string;
    osm_value:   string;
    name:        string;
    type:        string;
    city?:       City;
    postcode?:   string;
    locality?:   string;
    street?:     string;
    district?:   string;
    county?:     string;
    state?:      string;
}

export enum City {
    Berlin = "Berlin",
}

export enum OsmType {
    N = "N",
    R = "R",
    W = "W",
}

export enum FeatureType {
    Feature = "Feature",
}

