import { Act } from './act';
import { Participant } from './participant';

export class ActParticipants {
    constructor (
        public actParticipantId : number,
        public act : Act,
        public participants : Participant
    ) { }
}