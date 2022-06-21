let btn = document.getElementById('color-btn');



btn.addEventListener("click",() => {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    console.log(a,b,c);
});
