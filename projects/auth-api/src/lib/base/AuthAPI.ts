import { Observable } from "rxjs";
import { Login } from "../interfaces/login";
import { LoginRes } from "../interfaces/LoginRes";

export abstract class AuthAPI {
        //list all in auth methods

    abstract login (data : Login):Observable<LoginRes>;
    abstract register (data :any):Observable<any>;

}