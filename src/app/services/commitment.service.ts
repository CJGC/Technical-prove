import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commitment } from '../models/commitment';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class CommitmentService {

    private url:string;

    constructor(
        private _http: HttpClient
    ) 
    {
        this.url = "http://localhost:8080/";
    }

    getCommitmentList() : Observable<Array<Commitment>> {
        return this._http.get<Array<Commitment>>(this.url + "allcommitments/");
    }

    getCommitment(id:number) : Observable<Commitment> {
        return this._http.get<Commitment>(this.url + "getcommitment/" + id);
    }

    createCommitment(commitment : Commitment) : any {
        return this._http.post(this.url +  "addcommitment/", commitment);
    }

    editCommitment(commitment: Commitment) : any {
        return this._http.put(this.url + "updcommitment/", commitment);
    }

    delCommitment(id : number) : any {
        return this._http.delete(this.url + "delcommitment/" + id);
    }

    getCommitmentsByParticipantId(participant_id : number) 
        : Observable<Array<Commitment>> 
    {
        return this._http.get<Array<Commitment>>(this.url + 
            "getpartcommitments/" + participant_id);
    }

}