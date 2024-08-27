const excuse = document.querySelector("#excuse");

const excuses = {
  who: [
    "My cat",
    "The family Tyrannosaurus Rex",
    "A flying whale",
    "An uninvited guest",
    "A slithery snake",
    "The neighbor's octopus"
  ],
  action: [
    "peed on",
    "destroyed",
    "stared intensely at",
    "broke out of",
    "slithered around",
    "danced on"
  ],
  what: [
    "its cage",
    "my car",
    "our new couch",
    "my house",
    "the vegetables",
    "my head"
  ],
  when: [
    "today",
    "last night",
    "on my birthday",
    "last Friday",
    "on pasta day",
    "on Taco Tuesday"
  ]
};

const randomElement = arr => {
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

const randomExcuse = () => {
  const parts = ["who", "action", "what", "when"];
  const message = parts.map(part => randomElement(excuses[part])).join(" ");
  excuse.innerHTML = message;
};

let button = document.querySelector("#generate");

button.onclick = randomExcuse;
