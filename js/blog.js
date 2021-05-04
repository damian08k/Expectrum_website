const postsContainer = document.querySelector("[data-posts]");
const morePostsButton = document.querySelector("[data-addPost]");

const createNewPostAnimation = post => {
    requestAnimationFrame(() => {
        post.style.transition = "opacity 0.5s linear";
        post.style.opacity = 1;
    });
};

const createPostElements = () => {
    const timeTag = document.createElement("time");
    const titleTag = document.createElement("h3");
    const postText = document.createElement("p");
    const postIcon = document.createElement("div");

    timeTag.classList.add("post__date");
    titleTag.classList.add("post__title");
    postText.classList.add("post__text");
    postIcon.classList.add("post__icon");

    const postCreateDate = new Date();
    const day = postCreateDate.getDate() < 10 ? `0${postCreateDate.getDate()}` : postCreateDate.getDate();
    const year = postCreateDate.getFullYear();
    const monthAsNumber =
        postCreateDate.getMonth() < 10 ? `0${postCreateDate.getMonth() + 1}` : postCreateDate.getMonth() + 1;
    const monthAsName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(postCreateDate);
    timeTag.dateTime = `${year}-${monthAsNumber}-${day}`;

    timeTag.innerText = `${monthAsName} ${day}, ${year}`;
    titleTag.innerText = "New Post Title";
    postText.innerText =
        "New post text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...";

    const postElements = [timeTag, titleTag, postText, postIcon];

    return postElements;
};

const createPostInside = () => {
    const article = document.createElement("article");
    article.classList.add("blog__post", "post");

    const postElements = createPostElements();

    postElements.forEach(element => article.appendChild(element));

    return article;
};

const createPost = () => {
    const postContaier = document.createElement("div");
    const article = createPostInside();

    postContaier.classList.add("blog__post-container");
    postContaier.appendChild(article);

    return postContaier;
};

const scrollToBlogSectionEnd = () => {
    const blogSection = document.querySelector("[data-blog]");
    const blogSectionEnd = blogSection.getBoundingClientRect().bottom;

    window.scrollBy({
        top: blogSectionEnd,
        behavior: "smooth",
    });
};

const showMorePosts = () => {
    const post = createPost();
    post.style.opacity = 0;
    postsContainer.insertBefore(post, morePostsButton);
    createNewPostAnimation(post);
    scrollToBlogSectionEnd();
};

morePostsButton.addEventListener("click", showMorePosts);
