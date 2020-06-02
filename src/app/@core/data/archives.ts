export interface Archive{
    service_name:string,
    message:string,
    seen:boolean,
    time:String,
}
export abstract class ArchivesData{
    abstract  getData();
}