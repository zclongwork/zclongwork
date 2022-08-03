let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

document.getElementById("test").addEventListener("click", function (event) {
    // 在被点击的 div 内显示当前被点击次数
    event.target.textContent = "click count: " + event.detail;
}, false);

let myImage = document.querySelector('img');
myImage.onclick = function () {
    alert("haha")
}

let myButton = document.querySelector('button');


// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}

function showText(content) {
    alert(content)
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}