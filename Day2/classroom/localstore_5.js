
function addData(){
    var employee={}
    employee.uname=document.fdata.uname.value
    employee.email=document.fdata.email.value
    employee.password=document.fdata.password.value
    employee.city=document.fdata.city.value
    employee.mobile=document.fdata.mobile.value 

    console.log(employee);

    var data=localStorage.setItem('udata',JSON.stringify(employee))
    
   }
   
   
   
   function showData(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
   }