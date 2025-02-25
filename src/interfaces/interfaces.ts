export interface ICountries {
  name: {
    common: string;
  };
  flags: {
    png: string;
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
