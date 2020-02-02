//window.onload=function(){
    document.getElementById('btn').addEventListener('click',loaddata);
    document.getElementById('btn1').addEventListener('click',loaddatas);
    function loaddata(e){
        const xhr=new XMLHttpRequest();
        xhr.open('GET','customer.json',true);
        xhr.onload=function(){
            //if(this.status===200){
                const customer=JSON.parse(this.responseText);
                //console.log(data)
                let output=`
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.phone}</li>
                <li>${customer.company}</li>`
                document.getElementById('customer').innerHTML=output;
            }
           
        
        xhr.send();
    
    
    }
    function loaddatas(e){
        const xhr=new XMLHttpRequest();
        xhr.open('GET','customers.json',true);
        xhr.onload=function(){
            if(this.status===200){
                const customers=JSON.parse(this.responseText);
                console.log(customers)
                let output='';
                customers.forEach(function(a) {
                    output+=
                    `
                    <li>${a.id}</li>
                <li>${a.name}</li>
                <li>${a.phone}</li>
                <li>${a.company}</li>`
                    
                });
                document.getElementById('customers').innerHTML=output;

            }
        }
        xhr.send();
    }
                    
    

    

    