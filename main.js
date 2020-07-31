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
        style : document.querySelector('#style'),
        code : document.querySelector('#code')
    },
    init: () => {
        player.play()
        player.bindEvents()
    },

    bindEvents:()=>{
        for (let key in player.events) {
            document.querySelector(key).onclick=player[player.events[key]]
        }
    }
    ,
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            player.pause()
            return
        }
        console.log( player.ui)
        player.ui.style.innerHTML = string.substring(0, player.n)
        player.ui.code.innerText = string.substring(0, player.n)
        player.ui.code.scrollTop = player.ui.code.scrollHeight
    },
    play: () => {
        console.log('play')
        player.pause()
        player.id = setInterval(player.run, player.speed)
        console.log(player.id )
    },
    pause: () => {
        console.log('pause')
        console.log(player.id );
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
    }

}

player.init()