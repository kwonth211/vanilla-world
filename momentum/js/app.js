const $loginForm = document.getElementById('login-form')
const $loginInput = $loginForm.querySelector('input')
const $h1 = document.querySelector('#greeting')


const LOCALSTORAGE_USERNAME_KEY = 'userName'
const HIDDEN_CLASS_NAME = 'hidden'

const paintGreeting = (userName) =>{


    $h1.innerHTML = `Hello ${userName}`
    $h1.classList.remove(HIDDEN_CLASS_NAME)

}

const handleLoginSubmit = (e) =>{
    e.preventDefault();

    const userName = $loginInput.value
ㄴ
    localStorage.setItem(LOCALSTORAGE_USERNAME_KEY, userName)
    $loginForm.classList.add(HIDDEN_CLASS_NAME)
    paintGreeting(userName)
}

$loginForm.addEventListener('submit',handleLoginSubmit)




const init = () =>{
    const localStorageUserName = localStorage.getItem(LOCALSTORAGE_USERNAME_KEY)

    if(localStorageUserName === null){
        $loginForm.classList.remove(HIDDEN_CLASS_NAME)
        
    }else{


    $loginForm.classList.add(HIDDEN_CLASS_NAME)
    paintGreeting(localStorageUserName)

    }

}

init()

