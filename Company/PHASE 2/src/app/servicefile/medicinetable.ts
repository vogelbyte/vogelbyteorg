export class Medicinetable {
       public name:string;
        public company:string;
        public location:string;
        public batch:string;
        public exp:string;
        public mfg:string;
        public sch:string;
        public gst:string;
        public mrp:string;
        public ptr:string;
        public salt:string;
       
        public defective:string;
        public bar_code:string;
        public inclusive:string;

        public total_unit:string;
        public pack_unit:string;
        public loose_unit:string;
        public unit_unit:string;

        public category:string;
        public min_qty:string;
        public max_qty:string;
        public code:string;
    constructor(data ){

        this.name=data.name;
        this.company=data.company;
        this.location=data.location;
        this.batch=data.batch;
        this.exp=data.exp;
        this.mfg=data.mfg;
        this.sch=data.sch;
        this.gst=data.gst;
        this.mrp=data.mrp;
        this.ptr=data.ptr;
        this.salt=data.salt;

        this.defective=data.defective;
        this.bar_code=data.bar_code;
        this.inclusive=data.inclusive;

        this.total_unit=data.total_unit; 
        this.pack_unit=data.pack_unit; 
        this.loose_unit=data.loose_unit; 
        this.unit_unit=data.unit_unit;

        this.category=data.category; 
        this.min_qty=data.min_qty; 
        this.max_qty=data.max_qty; 
        this.code=data.code;

    }
    
}
