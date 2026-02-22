
function getPosts(){
    const dataRecords = localStorage.getItem("posts");
     return dataRecords ? JSON.parse(dataRecords) : [];
}

function savePosts(posts){
    
    localStorage.setItem("posts", JSON.stringify(posts))
}

function updateData(){
    const postList = document.getElementById("postList");

    
}

function deletedata(){
    const postList = document.getElementById("postList");

    

}

    deletebtn.addEventListener


function showData(){
    const postList = document.getElementById("postList");
    postList.textContent = "";

    const posts = getPosts();

    posts.forEach(post => {
        const div = document.createElement("div");
        div.textContent = post.title + " - " + post.content;

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        postList.appendChild(div)
        postList.appendChild(updateBtn)
        postList.appendChild(deletebtn);
       
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