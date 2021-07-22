var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Role;
(function (Role) {
    Role[Role["superadmin"] = 0] = "superadmin";
    Role[Role["admin"] = 1] = "admin";
    Role[Role["subscriber"] = 2] = "subscriber";
})(Role || (Role = {}));
;
;
function DateFormat() {
    return function (target, name, descriptor) {
        var date = document.getElementById('date');
        date.innerHTML = new Date().toLocaleString();
    };
}
//class
// @DateFormat()
var user = /** @class */ (function () {
    function user(roll, name, email, contact, role, modify) {
        this.roll = roll;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.role = role;
        this.modify = modify;
    }
    user.delete_row = function (num) {
        var index = document.getElementById('row' + num).outerHTML = "";
    };
    ;
    user.edit_row = function (no) {
        document.getElementById("edit_button" + no).style.display = "none";
        document.getElementById("save_button" + no).style.display = "block";
        var rno = document.getElementById("roll_row" + no);
        var name = document.getElementById("name_row" + no);
        var mail = document.getElementById("email_row" + no);
        var mob = document.getElementById("contact_row" + no);
        var roll_data = rno.innerHTML;
        var name_data = name.innerHTML;
        var mail_data = mail.innerHTML;
        var mob_data = mob.innerHTML;
        rno.innerHTML =
            "<input type='text' id='Roll_text" +
                no +
                "' value='" +
                roll_data +
                "' name='" +
                roll_data +
                "'>";
        name.innerHTML =
            "<input type='text' id='FirstName_text" +
                no +
                "' value='" +
                name_data +
                "' name='" +
                name_data +
                "'>";
        mail.innerHTML =
            "<input type='text' id='Email_text" +
                no +
                "' value='" +
                mail_data +
                "' name='" +
                mail_data +
                "'>";
        mob.innerHTML =
            "<input type='text' id='Phone_text" +
                no +
                "' value='" +
                mob_data +
                "' name='" +
                mob_data +
                "'>";
    };
    ;
    user.save_row = function (no) {
        var rno_val = document.getElementById("Roll_text" + no).value;
        var fname_val = document.getElementById("FirstName_text" + no).value;
        var mail_val = document.getElementById("Email_text" + no).value;
        var mob_val = document.getElementById("Phone_text" + no).value;
        document.getElementById("roll_row" + no).innerHTML = rno_val;
        document.getElementById("name_row" + no).innerHTML = fname_val;
        document.getElementById("email_row" + no).innerHTML = mail_val;
        document.getElementById("contact_row" + no).innerHTML = mob_val;
        document.getElementById("edit_button" + no).style.display = "inline";
        document.getElementById("save_button" + no).style.display = "inline";
    };
    ;
    user.cancel_row = function (no) {
        var rno_val = document.getElementById("Roll_text" + no).name;
        var fname_val = document.getElementById("FirstName_text" + no).name;
        var mail_val = document.getElementById("Email_text" + no).name;
        var mob_val = document.getElementById("Phone_text" + no).name;
        document.getElementById("roll_row" + no).innerHTML = rno_val;
        document.getElementById("name_row" + no).innerHTML = fname_val;
        document.getElementById("email_row" + no).innerHTML = mail_val;
        document.getElementById("contact_row" + no).innerHTML = mob_val;
        document.getElementById("cancel_button" + no).style.display = "inline";
        document.getElementById("edit_button" + no).style.display = "inline";
        document.getElementById("save_button" + no).style.display = "inline";
    };
    ;
    user.prototype.table = function () {
        document.getElementById("refresh-data").setAttribute("value", "Refresh-data");
        var objects = [];
        var obj = new user(1, "Amit", "abc@gmail.com", 12345, Role[Role.admin], '');
        objects.push(obj);
        obj = new user(2, "Akash", "def@gmail.com", 6789, Role[Role.superadmin], '');
        objects.push(obj);
        //creating table;
        var table = document.createElement("table");
        var tr = table.insertRow(-1);
        var tablehead = ['Roll', 'Name', 'Email', 'Contact', 'Role', 'Modify'];
        for (var i = 0; i < tablehead.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = tablehead[i];
            tr.appendChild(th);
        }
        objects.forEach(function (object) {
            var row = table.insertRow(-1);
            row.id = "row" + object.roll;
            Object.keys(object).forEach(function (index) {
                var cell = row.insertCell(-1);
                if (index == 'modify')
                    cell.innerHTML = "<input type='button' id = 'edit_button" + object.roll + "' value='edit' onclick='user.edit_row(" + object.roll + ")'> <input type='button' id='save_button" + object.roll + "' value='save' onclick='user.save_row(" + object.roll + ")'> <input type='button' id='cancel_button" + object.roll + "' value='cancel' onclick='user.cancel_row(" + object.roll + ")'> <input type='button' value='Delete' class='delete ' onclick='user.delete_row(" + object.roll + ")'>";
                else {
                    cell.id = index + "_row" + object['roll'];
                    cell.innerHTML = object[index];
                }
            });
        });
        console.log(table);
        //final table 
        var tables = document.getElementById('show-data');
        tables.parentElement.replaceChild(table, tables);
        console.log(tables);
    };
    ;
    __decorate([
        DateFormat()
    ], user.prototype, "table");
    return user;
}());
// const tablefromjson = () => {
//     document.getElementById("refresh-data").setAttribute("value", "Refresh-data");
//     let objects: Array<user> = [];
//     let obj = new user(1, "Amit", "abc@gmail.com", 12345, Role[Role.admin], '');
//     objects.push(obj);
//     obj = new user(2, "Akash", "def@gmail.com", 6789, Role[Role.superadmin], '');
//     objects.push(obj);
//     //creating table;
//     let table = document.createElement("table");
//     let tr = table.insertRow(-1);
//     let tablehead: string[] = ['Roll', 'Name', 'Email', 'Contact', 'Role', 'Modify'];
//     for (let i = 0; i < tablehead.length; i++) {
//         let th = document.createElement("th");
//         th.innerHTML = tablehead[i];
//         tr.appendChild(th);
//     }
//     objects.forEach((object) => {
//         let row = table.insertRow(-1);
//         row.id = "row" + object.roll;
//         Object.keys(object).forEach(index => {
//             let cell = row.insertCell(-1);
//             if (index == 'modify')
//                 cell.innerHTML = `<input type='button' id = 'edit_button${object.roll}' value='edit' onclick='user.edit_row(${object.roll})'> <input type='button' id='save_button${object.roll}' value='save' onclick='user.save_row(${object.roll})'> <input type='button' id='cancel_button${object.roll}' value='cancel' onclick='user.cancel_row(${object.roll})'> <input type='button' value='Delete' class='delete ' onclick='user.delete_row(${object.roll})'>`;
//             else {
//                 cell.id = index + "_row" + object['roll'];
//                 cell.innerHTML = object[index];
//             }
//         });
//     });
//     console.log(table);
//     //final table 
//     let tables = document.getElementById('show-data');
//     tables.parentElement.replaceChild(table, tables);
//     console.log(tables);
// };
