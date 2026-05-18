console.log("Hello console")
function submit_data(){
    let username =document.getElementById("hema_one").value;
    let email=document.getElementById("hema_two").value;
    console.log(username)
    console.log(email)
   let name=document.createElement('li');
   let a=document.getElementById("header");

    if(username==="Jyothirmai" && email.includes("@gmail.com")){
console.log(name);
name.textContent=username + " "  + email;
a.appendChild(name);

    }

    }

    