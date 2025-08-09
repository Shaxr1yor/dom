// 1, 2 mashq

let div = document.getElementById("raqamlar");

let ul = document.createElement("ul");

for (let i = 0; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = i;

  if (i % 2 == 0) {
    li.classList.add("even");
  } else {
    li.classList.add("odd");
  }

  ul.appendChild(li);
}

div.appendChild(ul);


// 3 mashq

let ismlar = ["Ali", "Abu", "Diyor"];

let divv = document.getElementById("ismlar");

for (let i = 0; i < ismlar.length; i++) {
  let p = document.createElement("p");
  p.textContent = ismlar[i];
  divv.prepend(p);
}
