export class DoList{
    private Id:number;
    constructor(
        public work:string,
        public dateFrom:Date,
        public dateTo:Date,
        public completed:number
        ){}

        setId(id:number){
            this.Id=id;
        }
}