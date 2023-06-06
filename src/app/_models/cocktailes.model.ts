export class CocktailsListRequest {
  payload: {
    message: string;
    data: CocktailesInfoList[];
  };
}


export class CocktailesInfoList {
  name: string;
  short: string;
  thumbnail: string;
  images: string[];
  openhours: string[];
  telephone: string;
  location: {
    lat: string;
    let: string;
  };
}

export class CocktailModel {
  name: string;
  category: string[];
  location: {
    lat: string;
    lng: string;
  };
}
