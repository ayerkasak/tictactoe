// ===== STORAGE =====
function getPosts() {
  const data = localStorage.getItem("posts");
  return data ? JSON.parse(data) : [];
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// ===== RENDER =====
function renderPosts() {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  const posts = getPosts();

  posts.forEach(post => {
    const div = document.createElement("div");
    div.textContent = post.title + " - " + post.content;
    postList.appendChild(div);
  });
}

// ===== FORM SUBMIT =====
function handleFormSubmit(event) {
  event.preventDefault(); // stop page reload

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  console.log(title)

  const posts = getPosts();
  posts.push({ title, content });
  savePosts(posts);
 
  renderPosts();

  // clear form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

// ===== INIT =====
renderPosts();