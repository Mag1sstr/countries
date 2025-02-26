export interface ICountries {
  name: {
    common: string;
    nativeName: {};
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  ccn3: string;
}

export interface IQuery {
  data: ICountries[] | undefined;
  error: {
    message: string | null;
  } | null;
}

export interface ICountryInfo extends ICountries {
  subregion?: string;
  tld: string;
  languages: string[];

  currencies: {};
  borders: string[];
}

export interface INative {
  common: string;
}
