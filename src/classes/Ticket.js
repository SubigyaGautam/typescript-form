"use strict";
exports.__esModule = true;
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(ticketId, subject, category, assignee, priority, status, comment) {
        this.ticketId = ticketId;
        this.subject = subject;
        this.category = category;
        this.assignee = assignee;
        this.priority = priority;
        this.status = status;
        this.comment = comment;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
