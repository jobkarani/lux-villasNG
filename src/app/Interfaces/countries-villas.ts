export interface CountriesVillas {
    id: number;
    name: string;
    villa: Villa[]; 
}

  export interface Villa {
    id: number;
    name: string;
    country: CountriesVillas;
  }