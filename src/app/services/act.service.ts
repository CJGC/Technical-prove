import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Act } from '../models/act';
import { Observable } from 'rxjs';

@Injectable()
export class ActService {

    private url:string;

    constructor(
        private _http: HttpClient) {
        this.url = "http://localhost:8080/";
    }

    getActList() : Observable<Array<Act>> {
        return this._http.get<Array<Act>>(this.url + "allact/");
    }

    getAct(id:number) : Observable<Act> {
        return this._http.get<Act>(this.url + "getact/" + id);
    }

    creatAct(act: Act) : any {
        return this._http.post(this.url +  "addact/", act);
    }

    editAct(act: Act) : any {
        return this._http.put(this.url + "updact/", act);
    }

    delAct(id : number) : any {
        return this._http.delete(this.url + "delact/" + id);
    }

}