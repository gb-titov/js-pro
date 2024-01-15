const changePageEl = document.querySelector(".changePage");
const contentEl = document.querySelector(".content");

const feedbackList = productFromStorage();

const contentHtml = feedbackList
  .map(
    (el) => `<article>
               <h1>${el.nameProduct}</h1>
               <ul class="feedbackList" style="display: none;">${el.feedback
                 .map(
                   (i) =>
                     `<li>${i} <button class="delete-feedback">Удалить</button></li> `
                 )
                 .join(" ")}</ul>
               <button class="feedbackList__btn">Показать отзывы</button>
            </article>`
  )
  .join(" ");

contentEl.innerHTML = contentHtml;

const feedbackListEl = document.querySelectorAll(".feedbackList");
const feedbackListBtnEl = document.querySelectorAll(".feedbackList__btn");
const deleteFeedbackEl = document.querySelector(".delete-feedback");

// обработка события click (показывает или скрывает отзывы на конкретный товар)
for (let i = 0; i < feedbackListBtnEl.length; i++) {
  feedbackListBtnEl[i].addEventListener("click", () => {
    if (feedbackListEl[i].style.display === "none") {
      feedbackListEl[i].style.display = "block";
      feedbackListBtnEl[i].innerHTML = "Скрыть отзывы";
    } else {
      feedbackListEl[i].style.display = "none";
      feedbackListBtnEl[i].innerHTML = "Показать отзывы";
    }
  });
}

document.querySelector(".feedbackList").onclick = function (e) {
  const btn = e.target.closest(".delete-feedback");
  if (!btn) {
    return;
  }

  btn.parentElement.remove();
  btn.closest("li").remove();
};

function changePage() {
  window.open("feedback.html", "_self");
}

changePageEl.addEventListener("click", changePage);
