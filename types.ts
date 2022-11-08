export interface ILocation {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number
  }

  export interface ISelectionRange {
    startDate: Date,
    endDate: Date,
    key: 'selection'
}