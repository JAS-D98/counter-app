let count=0;
let doc=document.getElementById('count-el')
function increment(){
    doc.innerText=count++;
}
increment()

function decrement(){
    doc.innerText=count--;
}
decrement()