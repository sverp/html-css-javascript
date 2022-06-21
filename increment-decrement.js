let count = document.getElementById('counter');
let ibtn = document.getElementById('ibtn');
let dbtn = document.getElementById('dbtn');
let data = 0;


ibtn.addEventListener("click", () => {
    data = data + 1;
    count.innerText = data;
    console.log(data);
});

dbtn.addEventListener("click", () => {
    data = data - 1;
    count.innerText = data;
    console.log(data);
});
