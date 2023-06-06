export class BeachesListRequest {
  payload: {
    message: string;
    data: BeachesInfoList[];
  };
}


export class BeachesInfoList {

  category: string[];
  images: string[];
  language: string;
  location: {
    lat: number,
    lng: number,
  };

  name: string;
  tags: string[];
  thumbnail: string;
  type: string[];
  delete?: boolean;
  _id: string;
}

export class BeachModel {
  name: string;
  category: string[];
  location: {
    lat: string;
    lng: string;
  };
}
