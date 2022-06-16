const name = "théo"
const surname = "jossic";

const section = document.querySelector("section")

const post = [
  {
    nom: "tim",
    surname: "boudin",
    avatar: "https://i.ytimg.com/vi/FmPig3flUfs/mqdefault.jpg"
  },
  {
    nom: "tom",
    surname: "herbe",
    avatar: "https://play-lh.googleusercontent.com/EaknoLfqDKwQFlbM06zSQmp2uWIUcQ_lWcnO0X7ORk0H2Dx45PmuKAtdI7Ai8-UBGmg"
  }
]

for(let i = 0; i < post.length; i++){
  section.innerHTML += `
  <article>
  <p>${post[i].nom}</p>
  <span>${post[i].surname}</span>
  <img src="${post[i].avatar}">
  </article>
  `
}