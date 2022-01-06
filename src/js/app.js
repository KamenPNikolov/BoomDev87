import "../scss/app.scss";
const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  const arrayOfClasses = R.pluck("class",arrayToPluck);
  if(articles.length == arrayOfClasses.length){
     for(let i=0; i<articles.length;i++){
        articles[i].classList.add(arrayOfClasses[i]);
    }
}
});
