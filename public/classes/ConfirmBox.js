"use strict";
var ConfirmBox = /** @class */ (function () {
    function ConfirmBox() {
    }
    ConfirmBox.prototype.show = function () {
        var c = confirm("Are you sure you want to do that?");
        var status = document.getElementById("content");
        if (c == true) {
            status.innerHTML = "You confirmed, thanks";
        }
        else {
            status.innerHTML = "You cancelled the action";
        }
    };
    return ConfirmBox;
}());
window.onload = function () {
    var bttn = document.getElementById("Button1");
    bttn.onclick = function () {
        var obj = new ConfirmBox();
        obj.show();
    };
};
