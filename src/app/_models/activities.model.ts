export class ActivitiesListRequest {
  payload: {
    message: string;
    data: ActivitiesInfoList[];
  };
}


export class ActivitiesInfoList {

  name: string;
  category: string[];
  openhours?: {
    open: number;
    close: number;
  };
  location: {
    lat: string;
    lng: string;
  };
  language: string;
  thumbnail: string;
  type: string[];
  telephone: string;
  address: string;
  email: string;
  website: string;
  images: string[];
}

export class ActivitiesModel {
  name: string;
  category: string[];
  location: {
    lat: string;
    lng: string;
  };
}
