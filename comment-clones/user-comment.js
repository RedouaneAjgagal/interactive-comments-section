export function usersComment(userName, userImg, content, createdAt, score, replyingTo, up, down) {
    const usersComment = `
    <div class="question userQuestion">
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
                    <img class="userImg" src="${userImg}" alt="amyrobson profile image">
                    <h1 class="userName">${userName}</h1>
                    <p class="postTime">${createdAt}</p>
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
                <p class="userComment"><span class="tag">${replyingTo} </span>${content}</p>
            </div>
        </article>
    </div>
    <form class="reply-comment-container" action="/" novalidate>
        <img src="./images/avatars/image-juliusomo.png" alt="maxblagun profile image">
            <label for="replyComment">
                <textarea class="commentTxt" name="comment" id="replyComment" placeholder="Add a comment..."></textarea>
            </label>
        <button type="submit" class="submitBtn">Reply</button>
    </form>
    <div class="replies"></div>
    `
    return usersComment;
}