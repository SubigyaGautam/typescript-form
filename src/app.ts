import { Ticket } from './classes/Ticket.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);



// inputs

const ticketId = document.querySelector('#ticketId') as HTMLInputElement;
const subject = document.querySelector('#subject') as HTMLInputElement;
const category = document.querySelector('#category') as HTMLInputElement;
const assignee = document.querySelector('#assignee') as HTMLInputElement;
const priority = document.querySelector('#priority') as HTMLInputElement;
const status = document.querySelector('#status') as HTMLInputElement;
const comment = document.querySelector('#comment') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;

let TICKETS: Ticket[] = [];

class ListOFTickets {
    constructor(private container: HTMLUListElement) { }

    render(item: any) {

        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const editbutton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const p = document.createElement('p');

        let flag: string = 'insert';


        h4.innerText = item.ticketId;

        editbutton.innerText = 'Edit';
        deleteButton.innerText = 'Delete';

        editbutton.id = item.ticketId;
        deleteButton.id = item.ticketId;
        li.id = item.ticketId;

        p.innerText = `ID : ${item.ticketId} 
                      Subject : ${item.subject}
                      Category : ${item.category}
                      Assignee : ${item.assignee} 
                      Priority : ${item.priority}
                      Status : ${item.status}
                      Comment : ${item.comment} `;

        li.append(h4);

        li.append(p);

        li.append(editbutton);
        li.append(deleteButton);

        editbutton.onclick = function (event) {

        }

        deleteButton.onclick = function (event) {
            flag = li.id;
            if(confirm(`Do you really want to delete Ticket : ${flag}?`)){
                li.remove();

                TICKETS = TICKETS.filter(ticket => ticket.ticketId != flag);
                console.log(`Deleted ${flag} Ticket`);
                console.log(TICKETS);
            } else {
                return;
            }
        }
        this.container.append(li);
    }
}

const list = new ListOFTickets(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let allowInsert: boolean = true;
    for(let ticket of TICKETS){
        if(ticket.ticketId == ticketId.value){
            allowInsert = false;
            break;
        }
    }
    if(allowInsert){
        console.log(e);
        let newTicket: Ticket = new Ticket(ticketId.value, subject.value, category.value, assignee.value, priority.value, status.value, comment.value);
        TICKETS.push(newTicket);
        list.render(newTicket);
        console.log(TICKETS);
    
    } else {
        alert('Id exists');
    }


});





