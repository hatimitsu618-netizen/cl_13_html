document.querySelectorAll('.chou').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 750) + 100 + "px";
    el.style.top = (Math.random() * 50) + 400 + "px";
  });
});

document.querySelectorAll('.who').forEach(function (el) {
   el.style.left = (Math.random() * 450) + 370 + "px";
   el.style.top = (Math.random() * 110) + 200 + "px";
  
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 450) + 370 + "px";
    el.style.top = (Math.random() * 110) + 200 + "px";
  });
});






window.addEventListener('mousemove', (e) => { console.clear(); console.log(`画面左端から: ${e.clientX}px, 画面上端から: ${e.clientY}px`); });
