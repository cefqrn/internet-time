const timeElement = document.getElementById("time")

function formatTime(date) {
  return ((date.getTime() + 1000 * 60 * 60) % (1000 * 60 * 60 * 24) / 86400).toFixed(2)
}

function updateTime() {
  timeElement.textContent = formatTime(new Date)
}

updateTime();
setInterval(updateTime, 864);

const timeContainerElement = document.getElementById("time-container")
const notificationContainer = document.getElementById("notifications");
timeContainerElement.onclick = function() {
  navigator.clipboard.writeText(formatTime(new Date))
  
  const notification = document.createElement("div")
  notification.parentNode = notificationContainer
  notification.textContent = "copied!"
  notificationContainer.appendChild(notification)

  setTimeout(() => {
    notificationContainer.removeChild(notification)
  }, 2000)
}
