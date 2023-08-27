const updateHandler = async () => {

  // Collect values from the login form
  const blogTitle = document.querySelector("#title").value.trim();
  const blogMessage = document.querySelector("#content").value.trim();
  const dateCreated = document.querySelector("#date_created").value.trim();
  //const userId = document.querySelector("#update-btn").value.trim();
  //console.log(userId);

  // last element of what was split from the URL address
  var subPaths = window.location.href.split("/");
  var postId = subPaths[subPaths.length-1];

  if (blogTitle && blogMessage) {
    // Send a POST request to the API endpoint

    // created: dateCreated,
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: blogTitle,
        content: blogMessage,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
      console.log("Added")
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("update-btn")
  .addEventListener("click",  updateHandler);

// document.getElementById("update-btn").addEventListener("click", updateHandler);