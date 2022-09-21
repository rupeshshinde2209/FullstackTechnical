// //Undefined problem
// const getblogs=()=>{

//     setTimeout(() => {
//         return{
//             title: 'Welcome to Javasript set time out'
//         }
//     }, 5000);
// }

// const mydata=getblogs()
// console.log(mydata.title);


const getblogs=(callbackDemo)=>{

        setTimeout(() => {
            callbackDemo({
                title: 'Welcome to Javasript set time out'
            })
            
        }, 5000);
    }
    
    getblogs((bp)=>{
        console.log(bp.title);
    })