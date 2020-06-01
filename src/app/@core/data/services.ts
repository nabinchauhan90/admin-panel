import { Observable } from 'rxjs';

export interface services{
    service_desc:string;
    service_email:string;
    service_image:string;
    service_name:string;
    service_password?:string;
    service_thumbImage?:string;
    id?:string;
}
export abstract class ServicesData{
    abstract getData():Observable<services[]>;
}