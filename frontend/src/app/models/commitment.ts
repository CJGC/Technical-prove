import { Act } from './act';
import { Participant } from './participant';

export class Commitment {
    
    constructor (
        public commitment_id : number,
        public title : string,
        public description : string,
        public act : Act,
        public participant : Participant
    ) {}
}