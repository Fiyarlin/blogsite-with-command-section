function getPosts() {
let data = localStorage.getItem('posts');
console.log("Reading posts from localStorage:", data);
return JSON.parse(data || '[]');
}

function savePosts(posts) {
console.log("Saving posts to localStorage:", posts);
localStorage.setItem('posts', JSON.stringify(posts));
}

function addBlog(e) {
e.preventDefault();
const title = document.getElementById('title').value.trim();
const author = document.getElementById('author').value.trim();
const content = document.getElementById('content').value.trim();


if (!title || !content) {
alert("Title and Content are required");
return;
}


const posts = getPosts();
const id = Date.now();
posts.push({ id, title, author, content, comments: [] });
savePosts(posts);


alert("Blog saved successfully!");
window.location.href = 'index.html';
}

function renderPosts() {
const posts = getPosts();
const container = document.getElementById('posts');
if (!container) return;
container.innerHTML = '';
if (posts.length === 0) {
container.innerHTML = '<p>No posts yet. Add one!</p>';
return;
}
posts.forEach(post => {
const div = document.createElement('div');
div.className = 'post';
div.innerHTML = `
<h3>${post.title}</h3>
<p><em>by ${post.author}</em></p>
<p>${post.content.substring(0,100)}...</p>
<a href="blog.html?id=${post.id}">Read More</a>
`;
container.appendChild(div);
});
}

function renderPosts() {
const posts = getPosts();
const container = document.getElementById('posts');
if (!container) return;
container.innerHTML = '';
if (posts.length === 0) {
container.innerHTML = '<p>No posts yet. Add one!</p>';
return;
}
posts.forEach(post => {
const div = document.createElement('div');
div.className = 'post';
const titleLink = document.createElement('span');
titleLink.textContent = post.title;
titleLink.className = 'title-input';
titleLink.addEventListener('click', () => {
localStorage.setItem('currentPostId', post.id);
window.location.href = 'blog.html?id=' + post.id;
});
div.appendChild(titleLink);
const authorP = document.createElement('p');
authorP.innerHTML = `<em>by ${post.author}</em>`;
div.appendChild(authorP);
const snippetP = document.createElement('p');
snippetP.textContent = post.content.substring(0, 100) + '...';
div.appendChild(snippetP);
container.appendChild(div);
});
}

function loadPost() {
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id')) || parseInt(localStorage.getItem('currentPostId'));
const posts = getPosts();
const post = posts.find(p => p.id === id);
if (!post) { document.getElementById('post').innerHTML = '<p>Post not found</p>'; return; }


document.getElementById('post').innerHTML = `<h2>${post.title}</h2><p><em>by ${post.author}</em></p><div>${post.content}</div>`;


const commentsList = document.getElementById('comments');
commentsList.innerHTML = '';
if (post.comments.length === 0) {
commentsList.innerHTML = '<li>No comments yet</li>';
} else {
post.comments.forEach(c => {
const li = document.createElement('li');
li.textContent = `${c.username}: ${c.text}`;
commentsList.appendChild(li);
});
}


document.getElementById('commentForm').addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('username').value.trim() || 'Anonymous';
const text = document.getElementById('commentText').value.trim();
if (!text) { alert("Comment cannot be empty"); return; }
post.comments.push({ username, text });
savePosts(posts);
loadPost();
});
}