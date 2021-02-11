customers = getCustomers()

addbtn = document.querySelector('#addBtn')
showAllBtn = document.querySelector('#allBtn')
showBtn = document.querySelector('#showBtn')
editBtn=document.querySelector('#editBtn')


function getCustomers(){
    return(JSON.parse(localStorage.getItem('customers')) || [])
}
const saveCustomers = function(){
    localStorage.setItem('customers', JSON.stringify(customers))
}
// const saveEdit = function(){
//     localStorage.setItem('customers', JSON.stringify(customers))
// }

//---------------------EDIT FUNCTION-------------------------------

const editCustomer = function(i){
    let tableBody = document.querySelector('tbody')
    document.querySelector('#editCustomer').classList.remove('d-none')
    document.querySelector('#editForm').addEventListener('submit',(e)=>{
            e.preventDefault()
            const ele = e.target.elements
            let balance=ele.balance.value
            customers[i]['cName']=ele.cName.value
            customers[i]['balance']=balance
        saveCustomers(customers)
        tableBody.textContent=''
        showAllCustomers()
    })
   }



//------------------------------------------------------------------

//---------------------Show All Customers FUNCTION---------------------------------

let showAllCustomers =function()
{
    let colls="";
    for(let i=0; i<customers.length; i++)
        {
            colls+=`<tr>
                        <th scope="row">${i+1}</th> </br> 
                        <td>${customers[i].accNum}</td> </br> 
                        <td>${customers[i].cName}</td> </br>
                        <td>${customers[i].balance}</td> </br>
                        <td>
                            <button class="btn btn-danger mx-1" onclick="deleteCustomer(${i})">Delete</button>
                        </td>
                        <td>
                            <button class="btn btn-primary mx-1" onclick="editCustomer(${i}) ">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-primary mx-1"  onclick="addBalance(${i})">Add New Balance</button>
                        </td>
                        <td>
                        <button class="btn btn-primary mx-1"  onclick="withDraw(${i})">Withdraw</button>
                    </td>

                    </tr>`
        }
    document.querySelector("#customersTableBody").innerHTML=colls;
}
document.querySelector("#searchinput").addEventListener('keyup', function(e){

    const SearchVal= e.target.value
    table = document.getElementById("customersTableBody");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent ;
          if (txtValue.includes(SearchVal) > 0) {
            tr[i].style.display = "";
          } else {
            singleCustomer.textContent = ''

            tr[i].style.display = "none";
          }
        }
      }

})

//---------------------search by accNum-------------------------------
showsinglecustomer= ()=>{
    document.querySelector('#singleCustomer').classList.remove('d-none')

    document.querySelector("#searchinput").addEventListener('keyup', function(e){

        const SearchVal= e.target.value
        table = document.getElementById("customersTableBody");
        tr = table.getElementsByTagName("tr");
    
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent ;
              if (txtValue.includes(SearchVal) > 0) {
                tr[i].style.display = "";
              } else {
                singleCustomer.textContent = ''

                tr[i].style.display = "none";
              }
            }
          }
    
    })
}
   
//------------------------------------------------------------------



//---------------------ADD Customer FUNCTION---------------------------------

const addCustomer = function(customer){
    customers.push(customer)
    alert('Customer Successfully added')

    saveCustomers()
}

const showHide = function(btnName,sectionId,txt1, txt2) {
    document.querySelectorAll('section').forEach((section, index)=>{
        if(index!=0) section.classList.add('d-none')
    })
    if(btnName){
        if(btnName.textContent == txt1 ){
            btnName.textContent=txt2
            document.querySelector(`#${sectionId}`).classList.remove('d-none')
        }else{
            btnName.textContent=txt1
        }
    }
   
    
}

addbtn.addEventListener('click', function(){
    showHide(addbtn, 'addCustomer', 'Add Customer','Hide Customer')
})


showAllBtn.addEventListener('click',function(e){
    showHide(showAllBtn, 'allCustomers', 'show All Customer','Hide customers')
    showAllCustomers();
})
showBtn.addEventListener('click',function(e){
    showHide(showBtn, 'singleCustomer', 'show Customer','Hide customer')
})


document.querySelector('#addForm').addEventListener('submit',function(e){
    e.preventDefault()
    const ele = this.elements
    let user = {
        accNum : Date.now(),
        cName: ele.cName.value,
        balance: ele.balance.value
    }
    addCustomer(user)
    this.reset()
    showHide()
})
//------------------------------------------------------------------

//---------------------DELETE FUNCTION-------------------------------
function deleteCustomer(id)
{
    customers.splice(id,1);
    localStorage.setItem("customers",JSON.stringify(customers));
    showAllCustomers();
}

//------------------------------------------------------------------



//---------------------Add balance-------------------------------


const addBalance =function (e ){
    val = parseFloat(prompt('enter value'))
    customers[e].balance = customers[e].balance + val
     localStorage.setItem('customers', JSON.stringify(customers))
    showAllCustomers ()
}

 //------------------------------------------------------------------

//---------------------withdraw balance-------------------------------

   const  withDraw =function (e ){
           value = parseFloat(prompt('enter withDraw Value'))
         
           customers[e].balance>value? customers[e].balance = customers[e].balance - value : alert("Rejected withdraw")
           localStorage.setItem('customers',JSON.stringify(customers))
           showAllCustomers ()
        }
     
//------------------------------------------------------------------



