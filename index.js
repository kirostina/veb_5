function calcRect() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (!isNaN(length) && !isNaN(width)) {
    const prmtr = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    document.getElementById("prmtr").textContent = prmtr.toFixed(2);
    document.getElementById("area").textContent = area.toFixed(2);
    document.getElementById("diagonal").textContent = diagonal.toFixed(2);
  } else {
    document.getElementById("prmtr").textContent = "0";
    document.getElementById("area").textContent = "0";
    document.getElementById("diagonal").textContent = "0";
  }
}

function sendMessage(inputId, chatBoxId, userName) {
  const input = document.getElementById(inputId);
  const chatBox = document.getElementById(chatBoxId);
  const message = input.value;

  if (message.trim() === "") return;

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  const userLabel = document.createElement("div");
  userLabel.textContent = userName + ":";

  const messageElement = document.createElement("div");
  messageElement.textContent = message;

  messageContainer.appendChild(userLabel);
  messageContainer.appendChild(messageElement);
  chatBox.appendChild(messageContainer);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}

const translit = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ь: "",
  ю: "iu",
  я: "ia",
};

function transliterate() {
  const ukrainianText = document
    .getElementById("ukrainianText")
    .value.toLowerCase();
  let transliteratedText = "";

  for (let i = 0; i < ukrainianText.length; i++) {
    const character = ukrainianText[i];
    const transliteration = translit[character] || character;
    transliteratedText += transliteration;
  }

  document.getElementById("transliteratedText").value = transliteratedText;
}

function calculateDay() {
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    document.getElementById("dayOfWeek").textContent = "Виберіть дату!";
    return;
  }

  const daysOfWeek = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "Пʼятниця",
    "Субота",
  ];
  const date = new Date(year, month - 1, day);
  const dayOfWeek = daysOfWeek[date.getUTCDay()];

  document.getElementById("dayOfWeek").textContent = dayOfWeek;
}

document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", function (event) {
    event.preventDefault();
    calculateDay();
  });
});
