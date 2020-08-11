let string = `
.head {
    width: 200px;
    height: 200px;
    background-color: #3ca2c7;
    border-radius: 50%;
    border: 2px solid #000;
    position: relative;
    z-index: 10;
}

.head .face {
    width: 160px;
    height: 160px;
    background-color: #fff;
    border-radius: 50%;

}

.head .face .eye {
    width: 48px;
    height: 48px;
    border: 1px solid #000000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -55px;
    border-radius: 50%;
    background-color: #fff;
}

.head .face .eye.left {
    margin-left: -24px;

}

.head .face .eye.right {
    margin-left: 24px;
}

.head .face .eye .black {
    width: 15px;
    height: 23px;
    background-color: #000;
    position: absolute;
    border-radius: 100%;
    bottom: 10px;
}

.head .face .eye.left .black {
    right: 4px;
}

.head .face .eye.right .black {
    left: 4px;

}

.head .face .eye .black::before {
    content: '';
    display: block;
    position: relative;
    width: 4px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    top: 8px;
    left: 4px;
}

.head .nose {
    width: 30px;
    height: 30px;
    background-color: #af1b38;
    position: absolute;
    transform: translate(-50%, -50%);
    margin-top: -20px;
    border: 1px solid #000000;
    border-radius: 50%;
}

.head .nose::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: relative;
    left: 6px;
    top: 4px;
    border-radius: 50%;
}

.head .beards {
    width: 100px;
    height: 100px;
    display: flex;
    position: relative;
    top: 78px;
    z-index: 1;
}
.head .beards .beard {
    width: 60px;
    height: 2px;
    background-color: #000;
    position: absolute;
    /*z-index: 1;*/
}
.head .beards::after {
    content: '';
    display: block;
    position: relative;
    width: 2px;
    height: 12px;
    left: -49px;
    bottom: -47px;
    background-color: #000;
}

.head .beards .left {
    position: relative;
    width: 60px;
    height: 100%;
    left: -30px;
}

.head .beards .right {
    position: relative;
    width: 60px;
    height: 100%;
    left: 30px;
}



.head .beards .left .beard:nth-child(1) {
    top: 16px;
    transform: rotate(18deg);
}

.head .beards .left .beard:nth-child(2) {
    top: 34px;
    left: -4px;
    transform: rotate(-5deg);
}


.head .beards .left .beard:nth-child(3) {
    top: 46px;
    left: -1px;
    transform: rotate(-14deg);
}

.head .beards .right .beard:nth-child(1) {
    top: 17px;
    transform: rotate(-13deg);
    left: -10px;
}

.head .beards .right .beard:nth-child(2) {
    top: 34px;
    left: -8px;
    transform: rotate(3deg)
}

.head .beards .right .beard:nth-child(3) {
    top: 48px;
    left: -10px;
    transform: rotate(15deg);
}

.head .mouth {
    width: 130px;
    height: 60px;
    background-color: #af1a38;
    border-bottom-left-radius: 130px;
    border-bottom-right-radius: 130px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 36px;
    overflow: hidden;
}

.head .mouth .heart {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, -50%);
    display: inline-block;
}


.head .mouth .heart .left {
    background: #c82838;
    width: 40px;
    height: 40px;
    position: absolute;
    transform: rotate(45deg) translateX(31px) translateY(-14px);
    bottom: 40px;
    left: -40px;
    border-radius: 50% 0 0 50%;
}

.head .mouth .heart .right {
    background: #c82838;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    transform: rotate(45deg) translateX(-14px) translateY(31px);
    bottom: 40px;
    right: -40px;
    border-radius: 50% 50% 0 0;
}

.head .mouth .heart .bottom {
    background: #c82838;
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
}

.body {
    width: 130px;
    height: 90px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    margin-top: -10px;
}

.body {
    z-index: 8;
}

.body .bg {
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0px;
    background-color: #42a3c5;
    border-bottom-left-radius: 170px;
    border-bottom-right-radius: 170px;
    border: 1px solid #000000;
    z-index: -3;


}

.body .whiteBox {
    width: 100px;
    height: 63px;
    background-color: #fff;
    margin-top: -2px;
    border-radius: 40px 40px 1000px 1000px;
}

.body .whiteBox .pocket {
    width: 60px;
    height: 30px;
    border: 2px solid #000;
    position: relative;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

}

.weibo {
    width: 100px;
    height: 40px;
    background-color: #9f1a31;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 9;
    transform: translate(-50%, -50%);
    margin-bottom: -130px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}

.weibo .dd {
    width: 30px;
    height: 30px;
    background-color: #ef9638;
    position: relative;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 2px solid #000;
}

.weibo .dd::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    position: relative;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
    background-color: #000;
    border-radius: 50%;
}

.weibo .dd::after {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    position: relative;
    left: 50%;
    top: 14px;
    transform: translateX(-50%);
    background-color: #000;
    border-radius: 2px;
}

.hand {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 80px;
    z-index: 8;
}

.hand.left {
    margin-left: -80px;

}




@keyframes sayHi {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.hand.right {
    margin-left: 125px;
}

.hand .circle {
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid #000000;

}

.hand .circle:before {
    content: '';
    display: block;
    width: 70px;
    height: 80px;
    border: 1px solid red;
    background-color: #3ca2c7;
    position: relative;
    z-index: -1;
    border: 2px solid #000000;
    top: 3px;

}

.hand.left .circle:before {
    transform: rotate(-45deg);
    border-bottom-left-radius: 97px;
    border-bottom-right-radius: 30px;
    left: 42px;
}

.hand.right .circle:before {
    transform: rotate(45deg);
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 16px;
    right: 70px;
}

.foot {
    width: 50px;
    height: 100px;
    border: 2px solid #000000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 40px / 60px;
    background-color: #fff;
}

.foot.left {
    margin-left: -20px;
}

.foot.right {
    margin-left: 20px;

}
@media (max-width:500px) {
    .hand.right .sayHi{
        top: -320px;
        left: -60px;
    }
}

.head .fly {
    width: 100px;
    height: 40px;
    position: relative;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
}

.head .fly .leaf {
    width: 60px;
    height: 5px;
    background-color: rgba(162, 171, 176, 0.6);
    position: absolute;
    top: 28px;
    left: 20px;
    z-index: 1;
    transform: translateX(-50%);
    animation: fly 200ms linear infinite;
}

.head .fly .bracket {
    position: absolute;
    left: 50%;
    background-color: #fbc046;
    transform: translateX(-50%);
    border: 2px solid #000000;
}

.head .fly .bracket.up {
    width: 20px;
    height: 12px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    top: 16px;
}

.head .fly .bracket.down {
    bottom: 0;
    width: 8px;
    height: 12px;

}

@keyframes flyIn {
    from {
        transform: translateY(100px)
    }
    to {
        transform: translateY(-50px)
    }
}
.box{
    animation : flyIn 400ms 
}
@keyframes fly {
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
    100% {
        transform: rotate3d(0, 1, 0, 360deg);
    }

}

`
export default string
