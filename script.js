var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}
var id;
var name;
var extension;
var email;
var department;
var out;
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = $("addForm");
var table = $("employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var empCount = 0;
//number of rows in table

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    id = $("id");
    id = parseInt(id.value, 10);
    name = $("name").value;
    extension = $("extension");
    extension = parseInt(extension.value, 10);
    email = $("email").value;
    department = $("department").value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idText = window.document.createTextNode(id);
    cellId.appendChild(idText);
    let nameText = window.document.createTextNode(name);
    cellName.appendChild(nameText);
    let extText = window.document.createTextNode(extension);
    cellExt.appendChild(extText);
    let emailText = window.document.createTextNode(email);
    cellEmail.appendChild(emailText);
    let deptText = window.document.createTextNode(department);
    cellDepartment.appendChild(deptText);
    
    // CREATE THE DELETE BUTTON
    let delBut = document.createElement("button");
    delBut.textContent = "X";
    cellDelete.appendChild(delBut);
    delBut.addEventListener("click", onClick);
    
    // RESET THE FORM
    form.reset();
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1;
    out = $("empCount");
    out.textContent = "(" + empCount + ")";
});

// DELETE EMPLOYEE
var onClick = (e) => {
    var del = window.confirm("Are you sure you want to delete this employee?")
    if (del) {
        var i = e.target.parentNode.parentNode.rowIndex;
        $("employees").deleteRow(i);
        empCount -= 1;
        out.textContent = "(" + empCount + ")";
    }
}