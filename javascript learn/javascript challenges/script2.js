const workers = [
  { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
  { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
  { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
  { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
  { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
]

// ch1
let p1=document.getElementById('ch1');
let total=workers.length;
p1.innerHTML=`total c'est :${total}`

// ch2
let ul=document.getElementById('ch2');
ul.innerHTML=workers.map(worker=>{return `<li>${worker.name}</li>`}).join('');

//ch3
let p3=document.getElementById('ch3');
let employee=workers.find(worker=>worker.id===3);
if (employee) {
    p3.innerHTML=`name:${employee.name} ||  role:${employee.role}`
}

//ch4
let p4=document.getElementById('ch4');
p4.innerHTML=workers.map(worker=>{
    if(worker.active){
        return `<li>${worker.name}:Active</li>`
    }
    else{
        return `<li>${worker.name}:Inactive</li>`
    }
}).join("");

// ch5
let btnCh5=document.getElementById('btnCh5');
let emp=workers.find(worker=>worker.id===1);
btnCh5.innerHTML+=`${emp.name}`;
btnCh5.onclick=function(){
    alert(`The role of ${emp.name} is ${emp.role}`)
}

//ch6
let p6=document.getElementById('ch6');
let inputCh6=document.getElementById('inputCh6');
inputCh6.addEventListener('keyup',(e)=>{
    p6.innerHTML=e.target.value;
})

// ch7
let ulChallenge7=document.getElementById('ch7');
ulChallenge7.innerHTML=workers.map(worker=>{return `<li>${worker.name}</li>`}).join('');
document.querySelectorAll('#ch7 li').forEach(l=>l.addEventListener('click',()=>{
    console.log(l);
    l.style.color="red";
}))

// ch8
let btnCh8=document.getElementById('btnCh8');
let divCh8=document.getElementById('divCh8');
btnCh8.addEventListener('click',()=>{
    divCh8.classList.toggle('scale')
})


// ch8
let divCh9=document.getElementById('divCh9');
let employseFiltredByCity=workers.filter(worker=>worker.city==="Paris");
if(employseFiltredByCity){
    divCh9.innerHTML=`<h3>Result</h3>
        <p>employees in paris:</p>
        ${employseFiltredByCity.map(emp=>{return `<li>${emp.name}</li>`}).join('')}
    `
}
console.log(employseFiltredByCity);

// ch 10;

let empNameSalary=workers.map(emp=>{
    return{
        name:emp.name,
        salary:emp.salary,
    }
})
console.log(empNameSalary);


// ch11
let divCh11=document.getElementById('divCh11');
let empFiltredBySalary=workers.filter(emp=>emp.salary>50000);
console.log(empFiltredBySalary);
divCh11.innerHTML=empFiltredBySalary.map(emp=>{return`<li>${emp.name} - $${emp.salary}</li>`}).join('');

// ch12
let divCh12=document.getElementById('divCh12');
divCh12.innerHTML=workers.map((emp,index)=>{return`<li data-id="${index}">${emp.name} </li>`}).join('');
let index=null;


//ch13
document.querySelectorAll('#divCh12 li').forEach(l=>{
    l.addEventListener('click',()=>{
        index=parseInt(l.dataset.id);
        let empIndex=workers.findIndex(emp=>emp.id===index+1)
        alert(empIndex)
        
    })

})

//ch14
let pCh14=document.getElementById('ch14');
let totalSalary=workers.reduce((total,emp)=>{
    return total+emp.salary
},0)
pCh14.innerHTML=`Total is : $${totalSalary}`
console.log(totalSalary);

let empSort=workers.sort((a,b)=>{
    return b.salary - a.salary;
})
console.log(empSort);

//ch15
let divCh15=document.getElementById('divCh15');
let sortedList=workers.sort((a,b)=>{
    return a.name.localeCompare(b.name);
})
divCh15.innerHTML=sortedList.map(worker=>{
    return `<li>${worker.name} </li>`
}).join("");

//ch16
let divCh16=document.getElementById('divCh16');
let firstEmp=workers[0];
let keys=Object.keys(firstEmp);
divCh16.innerHTML=keys.map(key=>{
    return `<li>${key} </li>`
}).join("");

//ch17
let divCh17=document.getElementById('divCh17');
let entries=Object.entries(firstEmp);
divCh17.innerHTML= Object.entries(firstEmp)
    .map(([key, value]) => {
        return `<tr>
                    <th>${key}</th>
                    
                </tr>
                <tr>
                    <td>${value}</td>
                </tr><br>
                `;
                
    })
    .join("");

//ch18
let formCh18=document.getElementById('formAddEmp');
let name=document.getElementById('name');
let role=document.getElementById('role');
formCh18.addEventListener('submit',(e)=>{
    e.preventDefault();
    let newEmp={
        name:name.value,
        role:role.value,
    }
    workers.push(newEmp);
    console.log("new worker add");
    formCh18.reset();
    console.log(workers);
    
})

//ch20
let copyWorkers=[...workers];

//ch21
let divCh21=document.getElementById('divCh21');
divCh21.innerHTML=workers.map(worker=>{
    return `<li>${worker.name}: $${worker.salary +(worker.salary*0.1)}</li>`
});

//ch22
let divCh22=document.getElementById('divCh22');
let groupedByCity=workers.reduce((accumulator,currentPerson)=>{
    const city=currentPerson.city;
    if(!accumulator[city]){
        accumulator[city]=[];
    }
    accumulator[city].push(currentPerson);
    return accumulator
},{})
console.log(groupedByCity);
divCh22.innerHTML=Object.entries(groupedByCity)
    .map(([city,employees])=>{
        return `
            <h4>${city}</h4>
            ${employees.map(emp=>{return `<li>${emp.name}</li>`}).join('')}
        `
    }).join('')

//ch23
let divCh23=document.getElementById('divCh23');
let check=workers.some(emp=>{
    return emp.active==false;
})
if (check) {
   divCh23.innerHTML += `
  <p style="
    background:#fff8e1;
    color:#8a6d3b;
    padding:10px 14px;
    border-radius:8px;
    border-left:5px solid #f0ad4e;
    font-weight:600;
  ">
    ⚠️ Warning: some employees are inactive
  </p>
`;
}else{
    divCh23.innerHTML+=`<p  background:#e8f8ee;
    color:#1e7d43;
    padding:10px 14px;
    border-radius:8px;
    border-left:5px solid #1e7d43;
    font-weight:600;>ALL workers are active</p>`
}

//ch24
let divCh24=document.getElementById('divCh24');
let checkSalary=workers.every(worker=>{
    return worker.salary>30000
})
if (checkSalary) {
   divCh24.innerHTML += `
  <p style="
    background:#e8f8ee;
    color:#1e7d43;
    padding:10px 14px;
    border-radius:8px;
    border-left:5px solid #1e7d43;
    font-weight:600;
  ">
    ✔ ALL employees earn more than $30,000
  </p>
`;
}else{
     divCh24.innerHTML += `
  <p style="
    background:#fff8e1;
    color:#8a6d3b;
    padding:10px 14px;
    border-radius:8px;
    border-left:5px solid #f0ad4e;
    font-weight:600;
  ">
    ⚠️ Warning: some employees less than 30000
  </p>
`;
}
console.log(checkSalary);

// ch26
let ulCh26=document.getElementById('ch26');
let search=document.getElementById('search');
ulCh26.innerHTML=workers.map(worker=>{return `<li>${worker.name}-${worker.role}</li>`}).join('');
search.addEventListener('keyup',(e)=>{
    let value=e.target.value;
    let empSearched=workers.filter(worker=>worker.name.toLowerCase().includes(value)||worker.role.toLowerCase().includes(value));
    ulCh26.innerHTML=empSearched.map(worker=>{return `<li>${worker.name}-${worker.role}</li>`}).join('');

})

// ch27
let ulCh27=document.getElementById('ch27');
let select=document.getElementById('select');
ulCh27.innerHTML=workers.map(worker=>{return `<li>${worker.name}-${worker.role}</li>`}).join('');
select.addEventListener('change',(e)=>{
    console.log(e.target.value);
    let empFiltred=workers.filter(worker=>worker.role===e.target.value);
      ulCh27.innerHTML=empFiltred.map(worker=>{return `<li>${worker.name}-${worker.role}</li>`}).join('');
})

  





