
// let btnDsn = document.querySelector("#btn-design");
// localStorage.setItem('Name','CLICKED');
// let name = localStorage.getItem('Name');
  
// (function (){
//     btnDsn.onclick = function() {
//         btnDsn.textContent = name;
//     };
// })();

function addData(){
    var data=localStorage.setItem('udata',document.fdata.uname.value)
    
   }
   
   
   function showData(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
   }