//loop challing
let myAdmins=["Ahmad","Osama","Sayed","Stop","Samera"];

let myEmployees=["Amgad","Samah","Ammer","Omar","Othman","Amany","Samin"];

//start here
document.write(`<div>`)
for(i=0;i<myAdmins.length;i++){
if(myAdmins[i]==="Stop"){
    break;
}
document.write(`<h3>The admin of team (${i+1}) is ${myAdmins[i]}</h3>`);
document.write(`<h2>Team Members:</h2>`)
let c=1;//counter
for(j=0;j<myEmployees.length;j++){
    if(myEmployees[j][0]==myAdmins[i][0]){
        document.write(`<p>-${c} ${myEmployees[j]}</p>`)
        c++
    }
}
document.write(`<hr>`)
}
document.write(`</div>`)
