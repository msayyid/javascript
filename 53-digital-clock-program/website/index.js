// digital clock


function updateClock() {
    // const now = new Date();
    // const hours = now.getHours().toString().padStart(2, 0);
    // const minutes = now.getMinutes().toString().padStart(2,0);
    // const seconds = now.getSeconds().toString().padStart(2,0);
    // const timeString = `${hours}:${minutes}:${seconds}`;
    // document.getElementById("clock").textContent = timeString;
    // the one above is for 24 hour clock

    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";4
    hours = hours % 12 || 12; // this means if hours % 12 not zero use it, otherwise use 12
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);