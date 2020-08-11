import string from "./style.js";





const player = {
    id: undefined,
    n:0,
    speed:10,
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast',
        '#btnReload':'reload'
    },
    ui:{
        style : undefined,
        code : document.querySelector('#code'),
        range:document.querySelector('#range')
    },
    init: () => {
        player.initStyleUI()
        player.play()
        player.bindEvents()
    },
    initStyleUI(){
        let dom =document.createElement('style')
        dom.id='style'
        player.ui.style = dom
        document.head.appendChild(dom)
        player.ui.range.max = string.length
    },
    bindEvents:()=>{
        for (let key in player.events) {
            document.querySelector(key).onclick=player[player.events[key]]
        }
        document.querySelector('#range').addEventListener('input',player.change)


    }
    ,
    run: () => {
        if (player.n > string.length) {
            player.pause()
            return
        }
        player.n += 1

        player.ui.style.innerHTML = string.substring(0, player.n)
        player.ui.code.innerText = string.substring(0, player.n)
        player.ui.code.scrollTop = player.ui.code.scrollHeight
        player.ui.range.value=player.n
    },
    play: () => {
        player.pause()
        player.id = setInterval(player.run, player.speed)
    },
    pause: () => {
        clearInterval(player.id)
    },
    slow:()=>{
        player.speed=100
        player.play()
    },
    normal:()=>{
        player.speed=50
        player.play()
    },
    fast:()=>{
        player.speed=10
        player.play()
    },
    reload:()=>{
        // player.ui.style.innerHTML = ''
        // player.ui.code.innerText =''
        // player.ui.code.scrollTop =0
        player.n=0
        player.play()
    },
    change:()=>{
        console.log(player.ui.range.value);
        player.n=parseInt(player.ui.range.value)
        player.play()
    }

}

player.init()
