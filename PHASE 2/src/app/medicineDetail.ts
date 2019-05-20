export class MedicineDetail
{
      id:String
	  company_id:String
	  description:String
	  med_name:String
	  exp_date:Date
	  mfg_date:Date
	  batch_no:String
	  gst:String
	  net_rate:String
	  mrp:String
	  quantity:String
	  type:String

	  constructor(data){
			this.id=data.id;
			this.company_id = data.company_id;
			this.description = data.description;
			this.med_name = data.med_name;
			this.exp_date = data.exp_date;
			this.mfg_date = data.mfg_date;
			this.batch_no = data.batch_no;
			this.gst = data.gst;
			this.net_rate = data.net_rate;
			this.mrp = data.mrp;
			this.quantity = data.quantity;
			this.type= data.type;
	  }
}