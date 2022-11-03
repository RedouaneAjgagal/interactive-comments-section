import data from './data.json' assert {type: 'json'};
import {myCloneComment} from './clones.js';
// import {othersComment} from './clones.js';
const form = document.querySelector(".post-comment-container");
const textarea = document.getElementById("addAcomment");
const commentsWrapper = document.querySelector(".allComments");
const submitBtn = document.querySelector(".post-comment-container > button");
const deleteSec = document.querySelector(".delete-comment");
const layer = document.querySelector(".layer");
const yesDelete = document.querySelector(".yes-delete");
const noCancel = document.querySelector(".no-cancel");
const section = document.createElement("section");
section.classList = "comment-container";
commentsWrapper.appendChild(section);
let submitMode = 'publish';
let currentEditBtn;
let currentDeleteBtn;
let comments;

if (localStorage.content) {
    comments = JSON.parse(localStorage.content);
} else {
    comments = [];
}
display();
form.addEventListener("submit", formValidation);
function formValidation(e) {
    let commentData = {
        userImg: data.currentUser.image.png,
        userName: data.currentUser.username,
        createdAt: '1 min ago',
        content: textarea.value,
        score: 0
    }
    comments.push(commentData);
    localStorage.setItem('content', JSON.stringify(comments));
    display();
    textarea.value = '';
    submitMode = 'publish';
    submitBtn.innerHTML = 'Send';
    e.preventDefault();
}

// Display comment
function display() {
    let myComment = '';
    for (let i = 0; i < comments.length; i++) {
        myComment += myCloneComment(comments[i].score, comments[i].userImg, comments[i].userName, comments[i].createdAt, comments[i].content, i);
    }
    section.innerHTML = myComment;
}

// Update comment
function edit(id) {
    const updateForm = document.querySelectorAll(".update-comment-container");
    const updateArea = document.querySelectorAll(".updateTxt");
    const myComment = document.querySelectorAll(".myComment");
    // Display update section
    myComment[id].classList.add("disable");
    updateForm[id].classList.add("active");
    updateArea[id].value = comments[id].content.trim();
    updateArea[id].focus();
    currentEditBtn = id;
    // Update data
    updateForm[id].addEventListener("submit", (e) => {
        comments[id].content = updateArea[id].value;
        localStorage.content = JSON.stringify(comments);
        display();
        e.preventDefault();
    });
}
window.edit = edit;

// Delete comment
function showDelete(id) {
    deleteSec.classList.add("active");
    layer.classList.add("active");
    document.body.classList.add("no-scroll");
    currentDeleteBtn = id;
}
window.showDelete = showDelete;
function hideDelete() {
    deleteSec.classList.remove("active");
    layer.classList.remove("active");
    document.body.classList.remove("no-scroll");
}
function deleteData() {
    yesDelete.addEventListener("click", () => {
        comments.splice(currentDeleteBtn, 1);
        localStorage.content = JSON.stringify(comments);
        display();
        hideDelete();
    });
    noCancel.addEventListener("click", () => {
        hideDelete();
    });
}
deleteData();