import data from './data.json' assert {type: 'json'};
import { myComment } from './comment-clones/current-user-comment.js';
import { usersComment } from './comment-clones/user-comment.js';

const commentData = (userName, userImg, content, createdAt, score, replies, up, down) => {
    const data = {
        user: {
            username: userName,
            image: {
                png: userImg
            }
        },
        content: content,
        createdAt: createdAt,
        score: score,
        replies: replies,
        scoreMode: {
            up: up,
            down: down
        }
    }
    return data;
}

let comments;
if (localStorage.localComments) {
    comments = JSON.parse(localStorage.localComments);
} else {
    comments = [];
    data.comments.forEach((comment) => {
        comments.push(commentData(comment.user.username, comment.user.image.png, comment.content, comment.createdAt, comment.score, comment.replies, false, false));
        localStorage.localComments = JSON.stringify(comments);
    });
}
const currentUser = {
    userName: data.currentUser.username,
    userImg: data.currentUser.image.png
}
// Form validation
const publishForm = document.querySelector('.post-comment-container');
const publish = () => {
    publishForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const textArea = e.target.elements.comment;
        let createdAt = new Date().toLocaleString();
        if (textArea.value !== '') {
            comments.push(commentData(data.currentUser.username, data.currentUser.image.png, textArea.value, createdAt, 0, [], false, false));
            localStorage.setItem('localComments', JSON.stringify(comments));
        } 
        textArea.value = '';
        displayData();
    });
}
publish();
// Display Comments
const displayData = () => {
    const commentsDiv = document.querySelector('.allComments');
    commentsDiv.innerHTML = '';
    comments.forEach((comment) => {
        const myReply = document.createElement('section');
        myReply.classList = 'comment-container';
        if (comment.score > 0) {
            myReply.style.order = '-' + comment.score;
        } else {
            myReply.style.order = Math.abs(comment.score);
        }
        // How the comment section will be shown (based on the user name)
        switch (comment.user.username) {
            case currentUser.userName:
                // display my comment
                displayCloneComments(comment, myReply, '', myComment);
                // Delete a comment
                displayDelete(myReply);
                const yesDelete = myReply.querySelector('.yes-delete');
                yesDelete.addEventListener('click', () => {
                    comments = comments.filter(e => e != comment);
                    localStorage.localComments = JSON.stringify(comments);
                    document.body.classList.remove('no-scroll');
                    displayData();
                });
                // Edit a comment
                const editBtn = myReply.querySelector('.edit');
                const contentValue = myReply.querySelector('.comment-content');
                editData(editBtn, contentValue, comment);
                break;
            default:
                // display users comments
                displayCloneComments(comment, myReply, '', usersComment);
                // Reply function - display form & push data
                const replyBtn = myReply.querySelector('.replyBtn');
                const replyForm = myReply.querySelector('.reply-comment-container');
                replyFunc(replyBtn, replyForm, comment.user.username, comment);
                break;
        }
        scoreUp(myReply, comment);
        scoreDown(myReply, comment);
        if (comment.replies.length !== 0) {
            const allReplies = myReply.querySelector('.replies');
            allReplies.innerHTML = '';
            allReplies.style.display = "flex";
            comment.replies.forEach((reply) => {
                const replySection = document.createElement('section');
                replySection.classList = 'comment-container';
                if (reply.score > 0) {
                    replySection.style.order = '-' + reply.score;
                } else {
                    replySection.style.order = Math.abs(reply.score);
                }
                const replyingTo = `@${reply.replyingTo}`;
                switch (reply.user.username) {
                    case currentUser.userName:
                        // display my sub comments
                        displayCloneComments(reply, replySection, replyingTo, myComment);
                        // Delete a reply
                        displayDelete(replySection);
                        const yesDelete = replySection.querySelector('.yes-delete');
                        yesDelete.addEventListener('click', () => {
                            comment.replies = comment.replies.filter(e => e != reply);
                            localStorage.localComments = JSON.stringify(comments);
                            document.body.classList.remove('no-scroll');
                            displayData();
                        });
                        // Edit a reply
                        const editBtn = replySection.querySelector('.edit');
                        const contentValue = replySection.querySelector('.comment-content');
                        editData(editBtn, contentValue, reply);
                        break;
                    default:
                        // display users sub comments
                        displayCloneComments(reply, replySection, replyingTo, usersComment);
                        // display sub form
                        const replyBtn = replySection.querySelector('.replyBtn');
                        const replyForm = replySection.querySelector('.reply-comment-container');
                        replyFunc(replyBtn, replyForm, reply.user.username, comment);
                        break;
                }
                scoreUp(replySection, reply);
                scoreDown(replySection, reply);
                allReplies.appendChild(replySection);
            });
        }
        commentsDiv.appendChild(myReply);
    });
}

// displayDelete & cancel delete
const displayDelete = (container) => {
    const deleteBtn = container.querySelector('.delete');
    const deleteSection = container.querySelector('.delete-comment');
    const layerDiv = container.querySelector('.layer');
    deleteBtn.addEventListener('click', () => {
        deleteSection.classList.add('active');
        layerDiv.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    const noCancel = container.querySelector('.no-cancel');
    noCancel.addEventListener('click', () => {
        deleteSection.classList.remove('active');
        layerDiv.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}
// Update data
const editData = (btn, content, comment) => {
    btn.addEventListener('click', () => {
        content.innerHTML = `
        <textarea class="commentTxt">${comment.content}</textarea><div class="updateDiv"><button type="submit" class="submitBtn">Update</button></div>
        `
        const textArea = content.querySelector('.commentTxt');
        textArea.focus();
        const updateBtn = content.querySelector('.submitBtn');
        updateBtn.addEventListener('click', () => {
            comment.content = textArea.value;
            localStorage.localComments = JSON.stringify(comments);
            displayData();
        })
    });
}
// reply to a comment
const replyFunc = (replyBtn, replyForm, replyingTo, comment) => {
    replyBtn.addEventListener('click', () => {
        replyForm.classList.toggle('active');
    });
    replyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textArea = e.target.elements.comment;
        const data = {
            user: {
                username: currentUser.userName,
                image: {
                    png: currentUser.userImg
                }
            },
            content: textArea.value,
            replyingTo: replyingTo,
            createdAt: new Date().toLocaleString(),
            score: 0,
            replies: [],
            scoreMode: {
                up: false,
                down: false
            }
        }
        if (textArea.value !== '') {
            comment.replies.push(data);
            localStorage.localComments = JSON.stringify(comments);
        }
        displayData();
    });
}
const scoreUp = (section, ele) => {
    const scoreUp = section.querySelector('.upScore');
    scoreUp.addEventListener('click', () => {
        if (!ele.scoreMode.up) {
            ele.scoreMode.up = true;
            ele.scoreMode.down ? ele.score += 2 : ele.score += 1;
            ele.scoreMode.down = false;
            localStorage.localComments = JSON.stringify(comments);
            displayData();
        } else {
            ele.score -= 1;
            ele.scoreMode.up = false;
            localStorage.localComments = JSON.stringify(comments);
            displayData();
        }
    });
}
const scoreDown = (section, ele) => {
    const scoreDown = section.querySelector('.downScore');
    scoreDown.addEventListener('click', () => {
        if (!ele.scoreMode.down) {
            ele.scoreMode.down = true;
            ele.scoreMode.up ? ele.score -= 2 : ele.score -= 1;
            ele.scoreMode.up = false;
            localStorage.localComments = JSON.stringify(comments);
            displayData();
        } else {
            ele.score += 1;
            ele.scoreMode.down = false;
            localStorage.localComments = JSON.stringify(comments);
            displayData();
        }
    });
}
// Calc posted time
const time = (createdAt) => {
    const postedTime = new Date(createdAt);
    const currentTime = new Date();
    const calcTime = currentTime - postedTime;
    const calcMins = calcTime / 1000 / 60;
    const calcHours = calcMins / 60;
    const calcDays = calcHours / 24;
    const calcWeeks = calcDays / 7;
    const calcMonths = calcWeeks / 4;
    const calcYears = calcMonths / 12;
    let results;
    if (calcMins < 1) {
        results = `few seconds ago`;
    } else if (calcMins < 60) {
        results = calcMins < 2 ? `${Math.floor(calcMins)} min ago` : `${Math.floor(calcMins)} mins ago`;
    } else if (calcMins > 60 && calcHours < 24) {
        results = calcHours < 2 ? `${Math.floor(calcHours)} hour ago` : `${Math.floor(calcHours)} hours ago`;
    } else if (calcHours > 24 && calcDays < 7) {
        results = calcDays < 2 ? `${Math.floor(calcDays)} day ago` : `${Math.floor(calcDays)} days ago`;
    } else if (calcDays > 7 && calcWeeks < 4) {
        results = calcWeeks < 2 ? `${Math.floor(calcWeeks)} week ago` : `${Math.floor(calcWeeks)} weeks ago`;
    } else if (calcWeeks > 4 && calcMonths < 12) {
        results = calcMonths < 2 ? `${Math.floor(calcMonths)} month ago` : `${Math.floor(calcMonths)} months ago`;
    } else {
        results = calcYears < 2 ? `${Math.floor(calcYears)} year ago` : `${Math.floor(calcYears)} years ago`;
    }
    return results;
}
// display comments & replies
const displayCloneComments = (ele, section, replyTo, cloneComment) => {
    if (ele.scoreMode.up) {
        section.innerHTML = cloneComment(ele.user.username, ele.user.image.png, ele.content, time(ele.createdAt), ele.score, replyTo, 'active', '');
    } else if (ele.scoreMode.down) {
        section.innerHTML = cloneComment(ele.user.username, ele.user.image.png, ele.content, time(ele.createdAt), ele.score, replyTo, '', 'active');
    } else {
        section.innerHTML = cloneComment(ele.user.username, ele.user.image.png, ele.content, time(ele.createdAt), ele.score, replyTo, '', '');
    }
}
displayData();