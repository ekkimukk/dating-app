
document.getElementById('no-button').addEventListener('mouseenter', () => {
  var x = Math.random() * (window.innerWidth - document.getElementById('no-button').offsetWidth) - 100;
  var y = Math.random() * (window.innerHeight - document.getElementById('no-button').offsetHeight) - 100;
  document.getElementById('no-button').style.left = `${x}px`;
  document.getElementById('no-button').style.top = `${y}px`;
});
