enum LocationType {
  City,
  Region,
  State,
  Province,
  Country,
  Continent,
}

class LattLong {
  constructor(lattitude: number, longitude: number) {
    this.lattitude = lattitude;
    this.longitude = longitude;
  }

  lattitude: number;
  longitude: number;
}

export interface Location {
  title: string;
  locationType: LocationType;
  lattLong: LattLong;
  woeid: number;
  distance?: number;
}
