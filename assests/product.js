const imgs = [
  "main-img.png",
  "secondary1.png",
  "secondary2.png",
  "secondary3.png",
  "secondary4.png",
];
const btn = document.querySelector(".addToCart");
const quantity = document.querySelector(".quantity");
const price = document.querySelector(".price");
const mainImg = document.querySelector(".active");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const details = document.querySelector(
  ".img-section .details-section .details"
);
let currentIndex = 0;

btn.addEventListener("click", () => {
  btn.textContent = "Added to cart";
  quantity.classList.toggle("hide");
  price.classList.toggle("hide");
});

let x = 0;
const increaseButton = document.querySelector(".increase");
const DecreaseButton = document.querySelector(".decrease");
const counterP = document.querySelector(".quantityNum");

function updatePrice() {
  const price = document.querySelector(".price");
  price.textContent = `${x * 199} $`;
}

increaseButton.addEventListener("click", () => {
  x++;
  counterP.textContent = x;
  updatePrice();
});

DecreaseButton.addEventListener("click", () => {
  if (x > 0) {
    x--;
    counterP.textContent = x;
    updatePrice();
  }
});

mainImg.src = imgs[currentIndex];
nextButton.addEventListener("click", () => {
  currentIndex++;
  mainImg.src = imgs[currentIndex];
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
    mainImg.src = imgs[currentIndex];
  }
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  mainImg.src = imgs[currentIndex];
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
    mainImg.src = imgs[currentIndex];
  }
});

const addCommentBtn = document.querySelector(".addCommentBtn");
const comments = document.querySelector(".comments");
const nameInput = document.querySelector(".commentName");
const textInput = document.querySelector(".commentText");
const titleInput = document.querySelector(".title");
const selectedFileCount = document.querySelector(".selected-file-count");
const recommendCheck = document.querySelector("#recommend-check");
const commentImgInput = document.querySelector("#comment-img");

function timeAgo(date) {
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "Just now";
  if (diffMin === 1) return "1 minute ago";
  if (diffMin < 60) return `${diffMin} minutes ago`;

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours === 1) return "1 hour ago";
  return `${diffHours} hours ago`;
}

const createdAt = new Date();

commentImgInput.addEventListener("change", () => {
  selectedFileCount.textContent =
    commentImgInput.isDefaultNamespace.length === 0
      ? "0 File selected"
      : `${commentImgInput.files.length} file selected`;
});

addCommentBtn.addEventListener("click", () => {
  if (
    nameInput.value.length > 0 &&
    textInput.value.length > 0 &&
    titleInput.value.length > 0
  ) {
    const commentDiv = document.createElement("div");
    commentDiv.setAttribute("class", "comment");

    const commentTopDiv = document.createElement("div");
    commentTopDiv.setAttribute("class", "comment-top");

    const commentTopLeft = document.createElement("div");
    commentTopLeft.setAttribute("class", "comment-top-left");

    const userImg = document.createElement("img");
    userImg.setAttribute("class", "user-img");
    userImg.setAttribute("src", "comment-img.jpg");

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name");

    const nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "user-name");
    nameSpan.textContent = nameInput.value;

    const userVerifiedSpan = document.createElement("span");
    userVerifiedSpan.setAttribute("class", "user-verified");
    userVerifiedSpan.textContent = "Verified buyer";

    const commentTopRight = document.createElement("div");
    commentTopRight.setAttribute("class", "comment-top-right");

    const createdAtSpan = document.createElement("span");
    createdAtSpan.setAttribute("class", "created-at");
    createdAtSpan.textContent = timeAgo(createdAt);

    const commentText = document.createElement("div");
    commentText.setAttribute("class", "comment-text");

    const titleSpan = document.createElement("span");
    titleSpan.setAttribute("class", "title");
    titleSpan.textContent = titleInput.value;

    const reviewText = document.createElement("span");
    reviewText.setAttribute("class", "review-text");
    reviewText.textContent = textInput.value;

    const commentBottom = document.createElement("div");
    commentBottom.setAttribute("Class", "comment-bottom");

    const commentImg = document.createElement("div");
    commentImg.setAttribute("class", "comment-img");

    const img = document.createElement("img");
    if (commentImgInput.files && commentImgInput.files[0]) {
      const file = commentImgInput.files[0];
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
    } else {
      img.src = "secondary4.png";
    }

    const recommendDiv = document.createElement("div");
    recommendDiv.setAttribute("class", "recommend");

    const recommendSpan = document.createElement("span");
    const recommendImg = document.createElement("img");
    if (recommendCheck.checked) {
      recommendSpan.textContent = "He/She recommends this";
      recommendImg.setAttribute("src", "check-mark.gif");
    } else {
      recommendSpan.textContent = "He/She doesn't recommend this";
      recommendImg.setAttribute("src", "cross-mark.png");
    }

    comments.appendChild(commentDiv);
    commentDiv.appendChild(commentTopDiv);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(commentBottom);
    commentTopDiv.appendChild(commentTopLeft);
    commentTopDiv.appendChild(commentTopRight);
    commentTopLeft.appendChild(userImg);
    commentTopLeft.appendChild(nameDiv);
    nameDiv.appendChild(nameSpan);
    nameDiv.appendChild(userVerifiedSpan);
    commentTopRight.appendChild(createdAtSpan);
    commentText.appendChild(titleSpan);
    commentText.appendChild(reviewText);
    commentBottom.appendChild(commentImg);
    commentImg.appendChild(img);
    commentBottom.appendChild(recommendDiv);
    recommendDiv.appendChild(recommendSpan);
    recommendDiv.appendChild(recommendImg);
    nameInput.value = "";
    textInput.value = "";
    titleInput.value = "";
  }
});

addCommentBtn.addEventListener("click", () => {
  const commentCount = document.querySelectorAll(".comment");
  const commentCountTitle = document.querySelector(".comment-count-title");
  commentCountTitle.textContent = `Comments (${commentCount.length})`;
});
