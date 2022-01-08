fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
  .then(response => response.json())
  .then(posts => {
    const postsWrapper = document.querySelector('.post-list');
    posts.map(post => {
      fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
        .then(res => res.json())
        .then(userData => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          const showCommentsButton = document.createElement('button');
          showCommentsButton.classList.add('comments-button');
          showCommentsButton.textContent = 'Read Comments';
          showCommentsButton.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
              .then(res => res.json())
              .then(comments => {
                const commentsList = document.createElement('div');
                commentsList.classList.add('comments-list');
                comments.map(comment => {
                  console.log(comment);
                  const commentElement = document.createElement('div');
                  commentElement.classList.add('comment-wrapper');
                  commentElement.innerHTML = `<h3>${comment.name}</h3>                                              <span>Message by: ${comment.email}</span>                                              <p>${comment.body}</p>`;
                  commentsList.append(commentElement);
                })
                postElement.append(commentsList);
                showCommentsButton.remove();
              })
          })
          postElement.innerHTML = `<h2><a href="post.html?post_id=${post.id}">${post.title}</a></h2>                                   <span>Author: <a href="user.html?user_id=${post.userId}">${userData.name}</a></span>                                   <p>${post.body}</p>`;
          postElement.append(showCommentsButton);
          postsWrapper.append(postElement);
        })
    })
  })


fetch(`https://jsonplaceholder.typicode.com/photos?_limit=16`)
  .then(res => res.json())
  .then(photos => {
    const side = document.getElementById('side');
    photos.map(photo => {
      const image = document.createElement('img');
      image.setAttribute('src', photo.thumbnailUrl);
      side.append(image);
    })
    document.body.prepend(side);
  })
  
  
 
