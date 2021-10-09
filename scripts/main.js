
let login=document.querySelector('.userForm')
let slide=document.querySelector('.sliderForm')
let signinForm=document.getElementById('signinForm')
let signupForm=document.getElementById('signupForm')
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
    setTimeout('signinForm.style.display="flex";',1800)
    setTimeout('signupForm.style.display="none";',1800)  
// }
})
login.addEventListener('click',function(e){console.log('ok')})
signup.addEventListener('click',function(e){
        login.classList.add('activelogin')
        login.classList.remove('reverselogin')
        slide.classList.add('activeslide')
        slide.classList.remove('reverseslide')
        setTimeout('signinForm.style.display="none";',1800)
        setTimeout('signupForm.style.display="flex";',1800)
})
