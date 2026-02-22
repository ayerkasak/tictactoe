
function getPosts(){
    const dataRecords = localStorage.getItem("posts");
     return dataRecords ? JSON.parse(dataRecords) : [];
}

function savePosts(posts){
    localStorage.setItem("posts", JSON.stringify(posts))
}


function showData(){
    const postList = document.getElementById("postList");
    postList.textContent = "";

    const posts = getPosts();

    posts.forEach(post => {
        const div = document.createElement("div");
        div.textContent = post.title + " - " + post.content;

        postList.appendChild(div)
        
    });
}

showData();

function handleFormSubmit(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

   const posts = getPosts();
   posts.push({title, content});

   savePosts(posts);

   showData();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}