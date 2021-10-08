/* var sheet =document.styleSheets[0];
sheet.insertRule(":root{--white:white}");
element.style.setProperty("--white",'#000') */
let login=document.querySelector('.login')
let slide=document.querySelector('.slide')
let name=document.getElementById('name')
let email=document.getElementById('email')
var signin = document.querySelectorAll('.signin')
let signup =document.querySelector('.signup')
signin=[...signin]
let signin2=signin[1]

signin2.addEventListener('click',function(e){
    // if ((login.classList.contains('reverselogin'))){
    slide.classList.add('reverseslide')
    slide.classList.remove('activeslide')
    login.classList.add('reverselogin')
    login.classList.remove('activelogin')
    setTimeout('name.style.display="flex";',1300)
    setTimeout('email.style.display="none";',1300)  
// }
})
login.addEventListener('click',function(e){console.log('ok')})
signup.addEventListener('click',function(e){
        login.classList.add('activelogin')
        login.classList.remove('reverselogin')
        slide.classList.add('activeslide')
        slide.classList.remove('reverseslide')
        setTimeout('name.style.display="none";',1700)
        setTimeout('email.style.display="flex";',1700)
})
