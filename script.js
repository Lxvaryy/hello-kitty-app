function sayYes() {
  document.getElementById('popup').classList.add('hidden');
  document.getElementById('final').classList.remove('hidden');
}

function sayNo() {
  const meow = document.getElementById("meowSound");
  meow.currentTime = 0;
  meow.play();
  alert("Aww 🥺 Please say yes...");
}
