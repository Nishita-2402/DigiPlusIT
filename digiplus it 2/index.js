
function Add(){
    if(document.getElementById('node').value && document.getElementById('val')){
        console.log(document.getElementById('node').value);
        console.log(document.getElementById('val').value);
    }
    else{
        console.log('Add the value of node')
    }
}
const data = require('./data.json'); 
console.log(data);