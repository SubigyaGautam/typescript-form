"use strict";
exports.__esModule = true;
var Ticket_js_1 = require("./classes/Ticket.js");
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var ticketId = document.querySelector('#ticketId');
var subject = document.querySelector('#subject');
var category = document.querySelector('#category');
var assignee = document.querySelector('#assignee');
var priority = document.querySelector('#priority');
var status = document.querySelector('#status');
var comment = document.querySelector('#comment');
// list template instance
var ul = document.querySelector('ul');
var TICKETS = [];
var ListOFTickets = /** @class */ (function () {
    function ListOFTickets(container) {
        this.container = container;
    }
    ListOFTickets.prototype.render = function (item) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        var editbutton = document.createElement('button');
        var deleteButton = document.createElement('button');
        var p = document.createElement('p');
        var flag = 'insert';
        h4.innerText = item.ticketId;
        editbutton.innerText = 'Edit';
        deleteButton.innerText = 'Delete';
        editbutton.id = item.ticketId;
        deleteButton.id = item.ticketId;
        li.id = item.ticketId;
        p.innerText = "ID : ".concat(item.ticketId, " \n                      Subject : ").concat(item.subject, "\n                      Category : ").concat(item.category, "\n                      Assignee : ").concat(item.assignee, " \n                      Priority : ").concat(item.priority, "\n                      Status : ").concat(item.status, "\n                      Comment : ").concat(item.comment, " ");
        li.append(h4);
        li.append(p);
        li.append(editbutton);
        li.append(deleteButton);
        editbutton.onclick = function (event) {
        };
        deleteButton.onclick = function (event) {
            flag = li.id;
            if (confirm("Do you really want to delete Ticket : ".concat(flag, "?"))) {
                li.remove();
                TICKETS = TICKETS.filter(function (ticket) { return ticket.ticketId != flag; });
                console.log("Deleted ".concat(flag, " Ticket"));
                console.log(TICKETS);
            }
            else {
                return;
            }
        };
        this.container.append(li);
    };
    return ListOFTickets;
}());
var list = new ListOFTickets(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var allowInsert = true;
    for (var _i = 0, TICKETS_1 = TICKETS; _i < TICKETS_1.length; _i++) {
        var ticket = TICKETS_1[_i];
        if (ticket.ticketId == ticketId.value) {
            allowInsert = false;
            break;
        }
    }
    if (allowInsert) {
        console.log(e);
        var newTicket = new Ticket_js_1.Ticket(ticketId.value, subject.value, category.value, assignee.value, priority.value, status.value, comment.value);
        TICKETS.push(newTicket);
        list.render(newTicket);
        console.log(TICKETS);
    }
    else {
        alert('Id exists');
    }
});
