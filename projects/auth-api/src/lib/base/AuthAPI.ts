import { Observable } from "rxjs";

export abstract class AuthAPI {
        //list all in auth methods

    abstract login (data :any):Observable<any>;
    abstract register (data :any):Observable<any>;

}