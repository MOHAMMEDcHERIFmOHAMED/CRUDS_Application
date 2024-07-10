let first_Name_field = document.getElementById('txt');
let Last_Name_field = document.getElementById('name');
let Roll_field = document.getElementById('roll');
let submit_btn = document.querySelector('.sub_btn');
let outputs_info = document.querySelector('.outputs_info');
let edit_btn = document.querySelector('.edit_btn');
let mood , index ; 
let arr ;
if(localStorage.employee !=null){
    arr = JSON.parse(localStorage.employee) ;
    
}else{
    arr= [] ;
}
showEmployees();
// _____________    ADD EMPLOYEE TO OUTPUTS CONTAINER 
submit_btn.onclick = addEmployee ;
function addEmployee(){
    let newEmployee = {
        FName : first_Name_field.value ,
        Lname :Last_Name_field.value ,
        roll :Roll_field.value 
       }  ;
    if(mood === "update"){
        submit_btn.textContent = "ADD Employee" ;
        submit_btn.style.background = "green" ;
        arr[index] = newEmployee ;
        showEmployees();
        clearInputs();
        return;
    }
   
   arr.push(newEmployee);
   //    update the storage 

   localStorage.setItem('employee' , JSON.stringify(arr) );
   showEmployees();
   clearInputs();
}

 
function showEmployees(){
    localStorage.setItem('employee' , JSON.stringify(arr) );
    let newElements ="";
    for( i=0 ; i<arr.length ; i++){
         newElements += `
        <div class="employee_info">
            <h1 class="FirstName">${arr[i].FName}</h1>
            <h1 class="LastName">${arr[i].Lname}</h1>
            <h1 class="Roll_NO">${arr[i].roll}</h1>
            <div class="actions_btns">
                <button onclick="editEmployeeInfo(${i})" class="edit_btn">Edit</button>
                <button onclick="deleteEmployee(${i})" class="delete_btn">Delete</button>
            </div>
        </div>
         `;
    }
    outputs_info.innerHTML = newElements ;
}
// __________   CLEAR INPUTS 
function clearInputs(){
   first_Name_field.value  = "" ;
   Last_Name_field.value = ""  ;
   Roll_field.value = ""  ; 
}

// _____________    EDIT EMPLOYEE INFORMATIONS 

function editEmployeeInfo(i){
    mood = "update" ;
    index = i ;
    first_Name_field.value  = arr[i].FName ;
    Last_Name_field.value  = arr[i].Lname ;
    Roll_field.value  = arr[i].roll  ;
    submit_btn.textContent = "update" ;
    submit_btn.style.background = "yellow" ;
}
// _____________    DELETE EMPLOYEE
function deleteEmployee(i){
    arr.splice(i,1);
    showEmployees();
}
