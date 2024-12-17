

export class Observatories{
    id:string
    name:string;
    resolution: number;
    startTime: Date;
    endTime: Date;
    geometry: any |undefined;
    trajectoryGeometry: any| undefined;
    resourceId: string;

    constructor(id: string, name: string, resolution: any, startTime: any, endTime: any,geometry: any, trajectoryGeometry: any, resourceId: any){
     this.id = id;
     this.name = name;
     this.resolution = resolution;
     this.startTime = startTime;
     this.endTime = endTime;
     this.geometry = geometry;
     this.trajectoryGeometry = trajectoryGeometry;
     this.resourceId = resourceId;   
    }

}