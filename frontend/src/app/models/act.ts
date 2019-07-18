export class Act {
    constructor (
        public actId : number,
        public location : string,
        public project : string,
        public content : string,
        public date : Date,
        public nextMeetingDate : Date
    ) {}

}
