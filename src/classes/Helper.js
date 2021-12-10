"use strict";
exports.__esModule = true;
exports.Helper = void 0;
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.prototype.removeTicket = function (idToDelete) {
        alert('clicked ${idToDelete}');
        // tickets = tickets.filter(ticket=>ticket.ticketId != idToDelete);
        // console.log(`Deleted ${idToDelete} Ticket`);
    };
    return Helper;
}());
exports.Helper = Helper;
