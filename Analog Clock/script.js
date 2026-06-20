let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");

// using dom we can access the h, m,s like below
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let hrotation = 30 * h + h / 2;
  let mrotation = 6 * m;
  let srotation = 6 * s;
  hour_hand.style.transform = `rotate(${hrotation}deg)`;
  min_hand.style.transform = `rotate(${mrotation}deg)`;
  sec_hand.style.transform = `rotate(${srotation}deg)`;
       dh.innerHTML = (h < 10 ? "0" + h : h) > 12 ? (h -= 12) : h;
       dm.innerHTML = m < 10 ? "0" + m : m;
       ds.innerHTML = s < 10 ? "0" + s : s;
});
