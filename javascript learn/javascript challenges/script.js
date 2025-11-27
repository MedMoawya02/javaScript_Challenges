const workers = [
  { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
  { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
  { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
  { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
  { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
]
let paragraphe=document.getElementById('p');
let arrayLength=workers.length;
paragraphe.innerHTML=`Total des employées:${arrayLength}`;
//ch2
let ul=document.getElementById('nameList');
ul.innerHTML=workers.map(worker=>`<li>${worker.name}</li>`).join("");

//ch3
let p3=document.getElementById('ch3');
let finded=workers.find(worker=>worker.id==3);
console.log(finded);
p3.innerHTML=`Name : ${finded.name}</br>  Role:${finded.role} `;

//ch4
let p4=document.getElementById('ch4');
p4.innerHTML=workers.map(worker=>{
    if(worker.active){
        return `<li>${worker.name} Active </li>`
    }else{
        return `<li>${worker.name} inactive </li>`
    }
}).join('');

//ch5
function seeRole(id){
    workers.forEach(worker=>{
        if(worker.id==id) {
            alert(`Employee Role : ${worker.role}`)
        }
    }
    )
}

//ch7
let ulChallenge7=document.getElementById('ListChallenge7');
ulChallenge7.innerHTML=workers.map(worker=>
    `<li>${worker.name}</li>`).join("");
let li=document.querySelectorAll('#ListChallenge7 li');
li.forEach(l=>
    l.addEventListener('click',()=>{
        /* li.forEach(l=>l.classList.remove('color')) */
        l.classList.add('color');
    })
)

//ch 8
let btnChallenge8=document.getElementById('btnChallenge8');
let divChallenge8=document.getElementById('divCh8');
btnChallenge8.addEventListener('click',()=>{
    divChallenge8.classList.toggle('divScale')
})

//ch9
let ulChallenge9=document.getElementById('ListChallenge9');

let employesFiltred=workers.filter(worker=>worker.city=="Paris");
ulChallenge9.innerHTML=`<h5>Employees in paris</h5>${employesFiltred.map(emp=>{
    return`<li>${emp.name}</li>`
}
).join("")};
`

//ch11
let divChallenge11=document.getElementById('divCh11');
divChallenge11.innerHTML=workers.map(worker=>{
    return `
        <div>
            <strong>Name:</strong> ${worker.name} | 
            <strong>Salary:</strong> $${worker.salary.toLocaleString()}
        </div>
    `;
}).join('');


//ch12
let divChallenge12=document.getElementById('divCh12');
let workerFiltredByPrice=workers.filter(worker=>worker.salary>50000);
divChallenge12.innerHTML=workerFiltredByPrice.map(worker=>{
    return `<p>${worker.name}-->${worker.salary}</p>`
}    
).join('');

//ch13
let divChallenge13=document.getElementById('divCh13');
divChallenge13.innerHTML=workers.map((worker,index)=>`<li data-index="${index}">${worker.name}</li>`).join("");
document.querySelectorAll('#divCh13 li').forEach(li=>{
    li.addEventListener('click',()=>{
        let index=parseInt(li.dataset.index);
        /* alert(`${li.textContent} at index ${index}`) */
        let employeIndex=workers.findIndex(worker=> worker.id==index+1)
        console.log(employeIndex);
        if(employeIndex!==-1){
            alert(`
                    name:${workers[index].name}
                    index:${index}
                `)
        }
    
    })
})


//ch14
let divChallenge14=document.getElementById('divCh14');
let totalSalary=workers.reduce((sum,worker)=>{
    return sum+=worker.salary
},0);
divChallenge14.innerHTML=`<p>Result:Total Salaire is ${totalSalary} $</p>`

//ch16
let divChallenge16=document.getElementById('divCh16');
let firstEmployee=workers[0];
let keys=Object.keys(firstEmployee);
divChallenge16.innerHTML=keys.map(key=>`<li>${key}</li>`).join("");
console.log(keys);

//ch17
let divChallenge17=document.getElementById('divCh17');
let formAddEmp=document.getElementById('formCh17');
let name=document.getElementById('name');
let role=document.getElementById('role');
formAddEmp.addEventListener('submit',(e)=>{
    e.preventDefault();
    workers.push({name:name.value,role:role.value})
    name.value="";
    role.value="";
    console.log(workers);
    
})


//ch18
console.log(workers);

const listContainer = document.getElementById('divCh18'); 

function renderWorkers(worker) {
    listContainer.innerHTML = workers.map((worker, index) =>
        `<li>${worker.name} <button data-id="${index}" class="btnDeleteEmp">Delete</button></li>`
    ).join("");
}
 renderWorkers(workers);
listContainer.addEventListener('click',(e)=>{
    let btnDelete=e.target.closest('.btnDeleteEmp');
    if(btnDelete){
        let index=parseInt(btnDelete.dataset.id);
        workers.splice(index,1);
        renderWorkers();
    }
})


//ch20
let divCh21=document.getElementById('ch21');
divCh21.innerHTML=workers.map(worker=>
    `<p>${worker.name} -->${worker.salary}</p>`
).join("");

