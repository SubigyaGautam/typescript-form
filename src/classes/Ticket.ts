
export class Ticket {

     ticketId: string;
     subject: string;
     category: string;
     assignee: string;
     priority: string;
     status: string;
     comment: string;

  constructor(ticketId: string, subject : string, category : string,
      assignee : string, priority :string, status : string , comment: string){
      this.ticketId = ticketId;
      this.subject = subject;
      this.category = category;
      this.assignee = assignee;
      this.priority = priority;
      this.status = status;
      this.comment= comment;
  
  }
  


}