let toggleList = document.querySelectorAll('.toggle');
let actionsContainer = document.querySelector('.account-actions');
function toggleSection(e){    
    let isSectionVisible = false;
    toggleList.forEach(function(section){
        if(section.classList. contains(e.target.id)){
            if(section.style.display == 'block'){
                section.style.display = 'none'
            }else{
                section.style.display = 'block';
                isSectionVisible = true;
            }
        }else{
            section.style.display = 'none';
        }

        if(isSectionVisible){
            actionsContainer.style.flexBasis = '200px';
        }else{
            actionsContainer.style.flexBasis = '100px';
        }
    })    
}

document.querySelector('#deposit').addEventListener('click', (e) => toggleSection(e))
document.querySelector('#transfer').addEventListener('click', (e) => toggleSection(e))
document.querySelector('#withdraw').addEventListener('click', (e) => toggleSection(e))

// deposit
let balance = document.querySelector('#balance');

function deposit(){
    document.querySelector('div.deposit .btn').addEventListener('click', function(){
   
        let amount = document.querySelector('#depositAmount').value
        if(amount > 0){
        
         balance.innerHTML = parseInt(balance.innerHTML == '' ? 0 : balance.innerHTML) + parseInt(amount == '' ? 0 : amount) 
        let balancedollar = document.querySelector('#balance-dollar')
        balancedollar.innerText = '$'
        }
        else{
            alert('Please enter a valid amount')
        }
        
        
        
        // transactions
        
        
        let table = document.querySelector('table')
        let tr = document.createElement('tr')
         if (amount > 0) {
          
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        
        td1.innerText = new Date().toLocaleDateString('en-NL', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            timeZone: 'Europe/Amsterdam' 
          }); 
          td2.innerText = 'Deposit';
          td3.textContent = amount;
          td4.innerText = 'Cash'; 
          td5.innerText = 'AC-123456';
          //td6.textContent =  amount;
          
          
          let currentBalance = balance.innerHTML === '' ? 0 : parseInt(balance.innerHTML);
          let amountValue = amount === '' ? 0 : parseInt(amount);
          let newBalance = currentBalance + amountValue - amountValue; 
          td6.textContent = newBalance;
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
         
        table.appendChild(tr)
        
        } else {
            alert('Please enter a valid amount')
        }
        

        
        
        
        
        
        })
       
}
 

// tranfer   
function tranfer(){

     let btnTransfer = document.querySelector("#btn-t");
     btnTransfer.addEventListener("click", function () {
       let accountNumber = document.querySelector("#search").value;
       let custmer = usersList.find((user) => user.accounts.get(accountNumber));

       let sourceAccount = document.querySelector("#source-account").value;
        let targetAccount = document.querySelector("#destination-account").value;
       let Amounts = document.querySelector("#transferAmount").value;

       let Balance = document.querySelector("#balance").innerHTML;
       Balance.innerHTML =
         parseInt(Balance.innerHTML == "" ? 0 : Balance.innerHTML) -
         parseInt(Amounts == "" ? 0 : Amounts);

       let result = Balance - Amounts;
       let totalAmount = result;
       accountNumber = totalAmount;

       let table = document.querySelector("table");
       let tr = document.createElement("tr");
       if (Amounts > 0) {
         let td1 = document.createElement("td");
         let td2 = document.createElement("td");
         let td3 = document.createElement("td");
         let td4 = document.createElement("td");
         let td5 = document.createElement("td");
         let td6 = document.createElement("td");

         td1.innerText = new Date().toLocaleDateString("en-NL", {
           day: "2-digit",
           month: "2-digit",
           year: "numeric",
           timeZone: "Europe/Amsterdam",
         });
         td2.innerText = "Transfer";
         td3.textContent = Amounts;
         td4.innerText = sourceAccount;
         td5.innerText = targetAccount;
         td6.textContent = Balance - Amounts;

         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);
         tr.appendChild(td4);
         tr.appendChild(td5);
         tr.appendChild(td6);

         table.appendChild(tr);
       } else {
         alert("Please enter a valid amount");
       }

       let balance = document.querySelector("#balance");
       balance.innerHTML =
         parseInt(balance.innerHTML == "" ? 0 : balance.innerHTML) -
         parseInt(Amounts == "" ? 0 : Amounts);

       let resultIncrese = balance + Amounts;
       let totalIncrese = resultIncrese;
       accountNumber = totalIncrese;
     });
}

//withdraw
function withdraw(){
    
//let balance =  document.querySelector('#account-number').innerText = accounts.get(accountNumberToFind).accountNumber;
document.querySelector('div.withdraw .btn').addEventListener('click', function(){
 let amount = document.querySelector('#withdrawAmount').value
if(amount > 0){
    // let accountNumber = document.querySelector('#search').value 

    // const accountNumberToFind = accountNumber;
 balance.innerHTML = parseInt(balance.innerHTML == '' ? 0 : balance.innerHTML) - parseInt(amount == '' ? 0 : amount) 

//  let balance = document.querySelector('#balance').innerText = usersList.accounts.get().balance;

let results = balance - amount;
let totalAmount = results;
accountNumber = totalAmount;
let balancedollar = document.querySelector('#balance-dollar')
balancedollar.innerText = '$'
}
else{
    alert('Please enter a valid amount')
}
let table = document.querySelector('table')
        let tr = document.createElement('tr')
         if (amount > 0) {
          
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        
        td1.innerText = new Date().toLocaleDateString('en-NL', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            timeZone: 'Europe/Amsterdam' 
          }); 
          td2.innerText = 'Withdraw';
          td3.textContent = amount;
          td4.innerText = 'Cash'; 
          td5.innerText = 'AC-123456';
        //   td6.textContent =  balance.innerHTML = parseInt(balance.innerHTML == '' ? 0 :  balance.innerHTML) - parseInt(amount == '' ? 0 : amount) 
        //   ;
          let amountValue = amount == '' ? 0 : parseInt(amount);
          
          let currentBalance = balance.innerHTML == '' ? 0 : parseInt(balance.innerHTML);
          let newBalance = currentBalance - amountValue + amountValue; 
          
          td6.textContent = newBalance;
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        
        table.appendChild(tr)
        
        } else {
            alert('Please enter a valid amount')
        }
        


})}

// table
function populateTables(){
    let  accountNumber = document.querySelector('#search').value;

   if(accountNumber){
    let table = document.querySelector('table');
    let tr1 = document.createElement('tr');
    tr1.innerHTML =  ` 
    <td>01/05/2024</td>
    <td>Deposit</td>
    <td>15000</td>
    <td>Cash</td>
    <td>AC-123456</td>
    <td>15000</td>`
    let tr2 = document.createElement('tr');
    tr2.innerHTML =  ` 
    <td>02/05/2024</td>
    <td>Transfer</td>
    <td>2000</td>
    <td>AC-123456</td>
    <td>AC-123457</td>
    <td>13000</td>`
    let tr3 = document.createElement('tr');
    tr3.innerHTML =  ` 
    <td>05/05/2024</td>
    <td>Deposit</td>
    <td>2000</td>
    <td>Cash</td>
    <td>AC-123456</td>
    <td>15000</td>`
    table.appendChild(tr1)
    table.appendChild(tr2)
    table.appendChild(tr3)
   }




}

// usersList
let usersList = [
    {
        id: 123,
        firstName: 'Nate',
        lastName: 'Haile',
        email: 'natnael@gmail.com',
        tel: '00447654312566',
        address: {
            line1: '1 Oxford House',
            line2: 'Victoria Street',
            postcode: 'SW1E 5AD',
            city: 'London'
        },
        accounts: new Map([
            [
                'AC12345',
            {
                id: 321,
                type: 'CurrentAccount',
                accountNumber: 'AC12345',
                sortCode: '110022',
                balance: 10547,
                transaction: [
                    {
                        date: new Date(),
                    }
                ]
            }
        ]
        ])
    },
    {
        id: 124,
        firstName: 'Daniel',
        lastName: 'Ghirmay',
        email: 'daniel@gmail.com',
        tel: '00447854712566',
        address: {
            line1: 'Flat 1 George House',
            line2: 'King William Road',
            postcode: 'WC1 2HA',
            city: 'London'
        },
        accounts: new Map([
            [
                'AC12312',
            {
                id: 543,
                type: 'CurrentAccount',
                accountNumber: 'AC12312',
                sortCode: '125322',
                balance: 5000
            }
        ]
        ])
    }
];

function populateUserListInfo(userList){
// Account Holder
document.querySelector('#fullname').innerText = `${userList.firstName} ${userList.lastName}`;
document.querySelector('#email').innerText = userList.email;
document.querySelector('#tel').innerText = userList.tel;
document.querySelector('#address').innerText = `${userList.address.line1} 
${userList.address.line2}
${userList.address.city} ${userList.address.postcode}`;

// Account Summary
let  accountNumber = document.querySelector('#search').value;
const accountNumberToFind = accountNumber;
document.querySelector('#account-type').innerText = userList.accounts.get(accountNumberToFind).type  ;
 document.querySelector('#sort-code').innerText = userList.accounts.get(accountNumberToFind).sortCode ;
 document.querySelector('#account-number').innerText = userList.accounts.get(accountNumberToFind).accountNumber;
document.querySelector('#balance').innerText = userList.accounts.get(accountNumberToFind).balance;
let balancedollar = document.querySelector('#balance-dollar')
balancedollar.innerText = '$'


}
// btnFind
let btnFind = document.querySelector('.btn-find');
btnFind.addEventListener('click', function(){
   
    
    let  accountNumber = document.querySelector('#search').value;
    let result = usersList.find( userList =>  userList.accounts.get(accountNumber))
    
    if(result){
        tranfer()
        withdraw()
        deposit()
        populateUserListInfo(result);
        populateTables()
    }else{
        alert('Account not found');
    }
})
