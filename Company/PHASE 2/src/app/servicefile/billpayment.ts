export class Billpayment {

        public serial_no:string;
        public name:string;
        public store:string;
        public bill_id:string;
        public pan_no:string;
        public date:Date;
        public address:string;
        public phone:string;
        public gst:string;
        public invoic_no:string;
        public email:string;
        public dl_no:string;
       
        public s_no:string;
        public code:string;
        public medicine:string;
        public batch:string;
        public exp:Date;
        public qty:string;
        public sale_rs:string;
        public dis:string;
        public inc_rate:string;
        public amount:string;
        public medicine_row:string;
    
    constructor(data){
        
        this.serial_no=data.serial_no;
        this.name=data.name;
        this.store=data.store; 
        this.bill_id=data.bill_id; 
        this.pan_no=data.pan_no; 
        this.date=data.date; 
        this.address=data.address; 
        this.phone=data.phone; 
        this.gst=data.gst; 
        this.invoic_no=data.invoic_no; 
        this.email=data.email; 
        this.dl_no=data.dl_no; 
       
          
        this.s_no=data.s_no;
        this.code=data.code; 
        this.medicine=data.medicine; 
        this.batch=data.batch; 
        this.exp=data.exp; 
        this.qty=data.qty; 
        this.sale_rs=data.sale_rs; 
        this.dis=data.dis; 
        this.inc_rate=data.inc_rate; 
        this.amount=data.amount; 
        this.medicine_row=data.medicine_row;
        
    }
    
}
