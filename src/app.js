const today = new Date()
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const todayDate = today.toLocaleString('en-GB',options)


const dateText = document.getElementById("date")

dateText.textContent = todayDate

// console.log(dateText)
