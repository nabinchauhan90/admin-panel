import { Observable } from 'rxjs';

export interface Archive{
    service_name?:string,
    message?:string,
    seen?:boolean,
    time?:string,
    from?:string,
    id?:string
    subpart?:Archive[];
}
export interface ArchiveCollection{
    archive:Archive[],
    id?:string,
}
export abstract class ArchivesData{
    abstract  getData():Observable<object>;
    abstract getMessages():Observable<any[]>;
}