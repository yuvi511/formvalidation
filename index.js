console.log("Form Validation");

const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail  = false;
let validUser  = false;
let validPhone  = false;

Name.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = Name.value;
    console.log(regex,str);
    if(regex.test(str)){
        validUser = true;
        console.log("It Matched");
        Name.classList.remove('is-invalid');
    }

    else{
        console.log("Not Matched");
        Name.classList.add('is-invalid');
    }
});


email.addEventListener('blur',()=>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,20}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        validEmail = true;
        console.log("It Matched");
        email.classList.remove('is-invalid');
    }

    else{
        console.log("Not Matched");
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex = /([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        validPhone = true;
        console.log("It Matched");
        phone.classList.remove('is-invalid');
    }

    else{
        console.log("Not Matched");
        phone.classList.add('is-invalid');
    }
})


let submit = document.getElementById('submit');


submit.addEventListener('click',(e)=>{
    let success = document.getElementById('success');
    let failure  = document.getElementById('failure')
    e.preventDefault();
    
   if(validUser && validEmail && validPhone){
    failure.classList.add('show');
   }

   else{
       failure.classList.add('show');
   }
})