const $clock = document.querySelector('h2#clock')


const PadStarttoZero = (time) =>{

    return time.toString().padStart(2,'0')
}

const setClock = () =>{
    const date = new Date()
    $clock.innerText = `${PadStarttoZero(date.getHours())}:${PadStarttoZero(date.getMinutes())}:${PadStarttoZero(date.getSeconds())}`
}

setClock()

setInterval(setClock,1000)