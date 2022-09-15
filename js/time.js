const time = document.getElementById("time");
const realTime = document.createElement("p");

function makeTime() {
  const currentTime = new Date();
  const hour = String(currentTime.getHours()).padStart(2, "0");
  const minute = String(currentTime.getMinutes()).padStart(2, "0");
  const seconde = String(currentTime.getSeconds()).padStart(2, "0");
  realTime.innerHTML = `${hour}시 ${minute}분 ${seconde}초`;
  time.appendChild(realTime);
}

setInterval(makeTime, 1000);
