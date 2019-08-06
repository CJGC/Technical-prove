import { Act } from './act';
import { Participant } from './participant';

export class Commitment {
    
    constructor (
        public commitmentId : number,
        public title : string,
        public description : string,
        public act : Act,
        public participant : Participant
    ) {}
}