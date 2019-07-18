import { Injectable } from '@angular/core';

@Injectable()
export class GeneralProvider {
    
    private data : Array<any>;

    constructor() {
        this.data = new Array<any>();
    }

    public setData (data : Array<any>) : void {
        this.data = data;
    }

    public getData () : Array<any> {
        return this.data
    }

    public clearData() : void {
        this.data.length = 0;
    }
}