//1.
let dmbutton = document.getElementById('btn-demo');
let dminput = document.getElementById('demo-input');
let a = document.getElementById('demo-a');
let link = a.href

// dminput.addEventListener('keyup',(data) =>{
//     console.log(data.target.value);

// }
// );


dmbutton.addEventListener('click',() =>{
    dminput.value = link
    
}
);