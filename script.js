const inputBox= document.getElementById('inputBox');
const list= document.getElementById('list');

function addTask(){
    if (inputBox.value===''){
        alert("You must add a task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        list.appendChild(span);
    }
    inputBox.value='';
}