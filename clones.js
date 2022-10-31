// My clone comment
export function myCloneComment(score, userImg, userName, createdAt, content, id) {
    let myComment = 
`  
<section class="comment-container">
<div class="question">
    <div class="vote">
        <button class="upScore" aria-label="Up vote" onclick="upVote(${id}, this)">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
        </button>
        <span class="score">${score}</span>
        <button class="downScore" aria-label="Down vote">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
        </button>
    </div>
    <article class="comment-details">
        <div class="comment-profile">
            <div class="profile-info">
                <img class="userImg" src="${userImg}" alt="${userName} profile image">
                <h1 class="userName">${userName}</h1>
                <span class="me">you</span>
                <p class="postTime">${createdAt}</p>
            </div>
            <div class="my-comment-actions">
                <button class="delete" aria-label="delete my comment" onclick="showDelete(${id})">
                    <svg aria-hidden="true" data-icon="trash" focusable="false" data-prefix="fas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                    <span>Delete</span>
                </button>
                <button type="button" class="edit" aria-label="edit my comment" onclick="edite(${id})">
                    <svg aria-hidden="true" data-icon="pencil" focusable="false" data-prefix="fas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M10.2 461L0 512l51-10.2L160 480 420.7 219.3l-128-128L32 352 10.2 461zM315.3 68.7l128 128 34.7-34.7L512 128l-16-16L478.1 94.1 417.9 33.9 400 16 384 0 350.1 33.9 315.3 68.7zM96 416h60.1l-19.8 19.8-75.1 15 15-75.1L96 355.9V416z" />
                    </svg>
                    <span>Edit</span>
                </button>
            </div>
        </div>
        <div class="comment-content">
            <p class="userComment"><span class="tag"></span>${content}</p>
        </div>
    </article>
</div>
<div class="replies"></div>
</section>
`
return myComment;
}


// another user clone comment
export function othersComment() {
    let otherComment = `
    <section class="comment-container">
    <!-- Comment section -->
    <div class="question">
        <div class="vote">
            <button class="upScore" aria-label="Up vote">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </button>
            <span class="score">12</span>
            <button class="downScore" aria-label="Down vote">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </div>
        <article class="comment-details">
            <div class="comment-profile">
                <div class="profile-info">
                    <img class="userImg" src="./images/avatars/image-amyrobson.png" alt="amyrobson profile image">
                    <h1 class="userName">amyrobson</h1>
                    <p class="postTime">1 month ago</p>
                </div>
                <div class="reply">
                    <button class="replyBtn" aria-label="reply">
                        <svg aria-hidden="true" data-icon="reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
                        </svg>
                        <span>Reply</span>
                    </button>
                </div>
            </div>
            <div class="comment-content">
                <p class="userComment">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
            </div>
        </article>
    </div>
    <!-- Replies section -->
    <div class="replies"></div>
</section>
    `
    return otherComment;
}