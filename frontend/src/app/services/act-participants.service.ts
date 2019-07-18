import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { ActParticipants } from '../models/act-participants';
import { Observable } from 'rxjs';

@Injectable()
export class actParticipantsService {

    private url : string;

    constructor(
        private _http : HttpClient 
    ) {
        this.url = "http://localhost:8080/";
    }

    public getActParticipantsByActId(act_id : number) : 
        Observable<Array<ActParticipants>> 
    {
        return this._http.get<Array<ActParticipants>>
                (this.url + "getactparticipants/" + act_id);
    }

    public addActParticipants(actParticipants : Array<ActParticipants>) 
        : any 
    {
        return this._http.post(this.url + 
            "/addactparticipants", actParticipants);
    }

    public deleteActParticipants(actParticipants : Array<ActParticipants>) {
        this._http.put(this.url + "/deleteparticipants", actParticipants).
        subscribe(
            data => 
                console.log("The act-participants were deleted successfully"),
            error => console.log("Error deleting act-participants: ", error)
        );
    }

    public getAvailPartFromActPartiByActId(act_id : number) : 
        Observable<Array<ActParticipants>> 
    {
        return this._http.get<Array<ActParticipants>>(this.url + 
            "/getavailpart/" + act_id);
    }
}