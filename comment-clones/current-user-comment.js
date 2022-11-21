export function myComment(userName, userImg, content, createdAt, score, replyingTo, up, down) {
    const myComment = `
    <div class="question">
        <div class="vote">
            <button class="upScore ${up}" aria-label="Up vote">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </button>
            <span class="score">${score}</span>
            <button class="downScore ${down}" aria-label="Down vote">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </div>
        <article class="comment-details">
            <div class="comment-profile">
                <div class="profile-info">
                    <img class="userImg" src="${userImg}" alt="juliusomo profile image">
                    <h1 class="userName">${userName}</h1>
                    <span class="me">you</span>
                    <p class="postTime">${createdAt}</p>
                </div>
                <div class="my-comment-actions">
                    <button class="delete" aria-label="delete my comment">
                        <svg aria-hidden="true" data-icon="trash" focusable="false" data-prefix="fas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                        <span>Delete</span>
                    </button>
                    <button type="button" class="edit" aria-label="edit my comment">
                        <svg aria-hidden="true" data-icon="pencil" focusable="false" data-prefix="fas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M10.2 461L0 512l51-10.2L160 480 420.7 219.3l-128-128L32 352 10.2 461zM315.3 68.7l128 128 34.7-34.7L512 128l-16-16L478.1 94.1 417.9 33.9 400 16 384 0 350.1 33.9 315.3 68.7zM96 416h60.1l-19.8 19.8-75.1 15 15-75.1L96 355.9V416z" />
                        </svg>
                        <span>Edit</span>
                    </button>
                </div>
            </div>
            <div class="comment-content">
                <p class="userComment myComment"><span class="tag">${replyingTo} </span>${content}</p>
            </div>
            <section class="delete-comment">
                <h2>Delete Comment</h2>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div class="delete-cta">
                    <button class="no-cancel">No, cancel</button>
                    <button class="yes-delete">Yes, delete</button>
                </div>
            </section>
            <div class="layer"></div>
        </article>
    </div>

    `
    return myComment;
}