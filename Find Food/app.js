const form = document.querySelector('#post-form');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const postsContainer = document.querySelector('#posts-container');

let posts = [];

function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    const title = document.createElement('h2');
    title.textContent = post.title;
    const body = document.createElement('p');
    body.textContent = post.body;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Post';
    deleteBtn.addEventListener('click', () => {
      deletePost(index);
    });
    postDiv.appendChild(title);
    postDiv.appendChild(body);
    postDiv.appendChild(deleteBtn);
    postsContainer.appendChild(postDiv);
  });
}

function addPost(title, body) {
  const post = { title, body };
  posts.push(post);
  renderPosts();
}

function deletePost(index) {
  posts.splice(index, 1);
  renderPosts();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  addPost(title, body);
  titleInput.value = '';
  bodyInput.value = '';
});
