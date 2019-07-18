import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../models/participant';
import { Observable } from 'rxjs';

@Injectable()
export class ParticipantService {

    private url:string;

    constructor(
        private _http: HttpClient
    ) 
    {
        this.url = "http://localhost:8080/";
    }

    getParticipantList() : Observable<Array<Participant>> {
        return this._http.get<Array<Participant>>(this.url + "allparticipants/");
    }

    getParticipant(id:number) : Observable<Participant> {
        return this._http.get<Participant>(this.url + "getparticipant/" + id);
    }

    creatParticipant(participant : Participant) : any {
        return this._http.post(this.url +  "addparticipant/", participant);
    }

    editParticipant(participant: Participant) : any {
        return this._http.put(this.url + "updparticipant/", participant);
    }

    delParticipant(id : number) {
        return this._http.delete(this.url + "delparticipant/" + id);
    }

}