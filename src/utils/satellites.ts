
export interface SatelliteGroup {
    "@context": string
    "@id": string
    "@type": string
    totalItems: number
    member: Satellite[]
    parameters: SatelliteParameters
    view: SatelliteView
  }
  
  export interface Satellite {
    "@id": string
    "@type": string
    satelliteId: number
    name: string
    date: string
    line1: string
    line2: string
  }
  
  export interface SatelliteParameters {
    search: string
    sort: string
    "sort-dir": string
    page: number
    "page-size": number
  }
  
  export interface SatelliteView {
    "@id": string
    "@type": string
    first: string
    next: string
    last: string
  }
  