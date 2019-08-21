var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/mavis.jpg'){
        myImg.setAttribute('src', 'images/Computer-Repair.png');
    }
    else{
        myImg.setAttribute('src', 'images/mavis.jpg');
    }
}

var myButton = document.querySelector('button');
var myH1 = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myH1.innerHTML = 'Mavis is cool, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    myH1.innerHTML ='Mavis is cool, ' + storedName; 
}

myButton.onclick = function(){
    setUserName();
}