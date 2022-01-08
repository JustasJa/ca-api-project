const postTitle = document.querySelector('.post-title');
const postAuthor = document.querySelector('.post-author');
const postContent = document.querySelector('.post-content');
const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const postId = urlParams.get('post_id');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(post => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res => res.json())
      .then(user => {
        postAuthor.innerHTML = `Author: <a href="user.html?user_id=${user.id}">${user.name}</a>`;
      })
    postTitle.textContent = post.title;
    postContent.textContent = post.body;
  })

  let div = document.createElement('div');
  div.classList.add("btn-wrap")
  const btn = document.createElement('button');
  btn.classList.add("btn")
  
  btn.innerHTML = `<a href="/">Back</a>`;
  
  div.append(btn);
  document.body.append(div);