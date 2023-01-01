import { Time } from '@angular/common';

export interface Villa {
  id: number;
  name: string;
  country:number;
  country_name: string;
  price: number;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  heading: string;
  description: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  check_in: Time;
  check_out: Time;
  complimentary1: string;
  complimentary2: string;
  is_available: boolean;
}
