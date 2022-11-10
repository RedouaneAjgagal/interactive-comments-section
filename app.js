import data from './data.json' assert {type: 'json'};
import { myCloneComment } from './clones.js';
import { othersCloneComment } from './clones.js';
const form = document.querySelector(".post-comment-container");
const textarea = document.getElementById("addAcomment");
const deleteSec = document.querySelector(".delete-comment");
const layer = document.querySelector(".layer");
const yesDelete = document.querySelector(".yes-delete");
const noCancel = document.querySelector(".no-cancel");
const article = document.createElement("article");
article.classList = "allComments";
form.before(article);
let currentDeleteBtn;
let myComments;
let myReplies;
let allComments;
let userComments;
let userCommentData;

let commentData;
function currentUser(commentArea) {
    commentData = {
        userImg: data.currentUser.image.png,
        userName: data.currentUser.username,
        createdAt: '1 min ago',
        content: commentArea.value,
        score: 0
    }
}

// check the Localstorage if i already commented before
localStorage.content ? myComments = JSON.parse(localStorage.content) : myComments = [];

localStorage.myLocalReplies ? myReplies = JSON.parse(localStorage.myLocalReplies) : myReplies = [];

// Create a static userComments
function createUserComments() {
    allComments = '';
    if (localStorage.usersComments) {
        userComments = JSON.parse(localStorage.usersComments);
    } else {
        // Very First time load Only - Show these comments automatically
        userComments = [];
        for (let i = 0; i < data.comments.length; i++) {
            userCommentData = {
                userImg: data.comments[i].user.image.png,
                userName: data.comments[i].user.username,
                createdAt: data.comments[i].createdAt,
                content: data.comments[i].content,
                score: data.comments[i].score,
                replies: [],
                id: i
            };
            userComments.push(userCommentData);
            localStorage.setItem('usersComments', JSON.stringify(userComments));
        }
    }
    // Display the static comments on the screen
    for (let i = 0; i < data.comments.length; i++) {
        allComments += othersCloneComment(userComments[i].score, userComments[i].userImg, userComments[i].userName, userComments[i].createdAt, userComments[i].content, userComments[i].replies, userComments[i].id);
    }
}
createUserComments();

// Show reply form
function showReplyArea(id) {
    const replyForm = document.querySelectorAll(".reply-comment-container");
    const replyArea = document.querySelectorAll(".reply-comment-container > label > textarea");
    replyForm[id].classList.add("active");
    replyArea[id].value = '@' + userComments[id].userName + ' ';
    replyArea[id].focus();
    replyFormValidation(id);
}
window.showReplyArea = showReplyArea; // using window to call the function because the script is module type


// Reply form validation
function replyFormValidation(id) {
    const replyForm = document.querySelectorAll(".reply-comment-container");
    replyForm[id].addEventListener("submit", (e) => {
        const replyArea = e.target.children[1].children[0];
        currentUser(replyArea);
        myReplies.push(commentData);
        localStorage.setItem('myLocalReplies', JSON.stringify(myReplies));
        userComments[id].replies.push(myCloneComment(commentData.score, commentData.userImg, commentData.userName, commentData.createdAt, myReplies[myReplies.length - 1].content, myReplies.length - 1));
        localStorage.usersComments = JSON.stringify(userComments);
        console.log(myReplies);
        createUserComments();
        display();
        e.preventDefault();
    });
}

// display reply comment
function displayReply() {
    
}

// Create comment - Publish
form.addEventListener("submit", formValidation);
function formValidation(e) {
    currentUser(textarea);
    myComments.push(commentData);
    localStorage.setItem('content', JSON.stringify(myComments));
    console.log(myComments);
    display();
    textarea.value = '';
    e.preventDefault();
}

// Display comment
function display() {
    for (let i = 0; i < myComments.length; i++) {
        allComments += myCloneComment(myComments[i].score, myComments[i].userImg, myComments[i].userName, myComments[i].createdAt, myComments[i].content, i);
    }
    
    article.innerHTML = allComments;
    createUserComments();
}
display();

// Update comment
function editBtn(arr) {
    function edit(id, e) {
        const updateForm = e.closest('.comment-profile').nextElementSibling.children[1];
        const updateArea = e.closest('.comment-profile').nextElementSibling.children[1].children[0].children[0];
        const myComment = e.closest('.comment-profile').nextElementSibling.children[0];
        // Show update section
        myComment.classList.add("disable");
        updateForm.classList.add("active");
        updateArea.focus();
        updateArea.value = arr[id].content.trim();
        // Update data
        updateForm.addEventListener("submit", (e) => {
            arr[id].content = updateArea.value;
            localStorage.content = JSON.stringify(arr);
            console.log(arr);
            createUserComments();
            display();
            e.preventDefault();
        });
    }
    window.edit = edit;
}
editBtn(myComments);

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
        myComments.splice(currentDeleteBtn, 1);
        localStorage.content = JSON.stringify(myComments);
        display();
        hideDelete();
    });
    noCancel.addEventListener("click", () => {
        hideDelete();
    });
}
deleteData();