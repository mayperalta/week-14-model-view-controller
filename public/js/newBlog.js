const blogFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const blogTitle = document.querySelector("#title").value.trim();
  const blogMessage = document.querySelector("#message").value.trim();
  const dateCreated = document.querySelector("#date_created").value.trim();

  if (blogTitle && blogMessage && dateCreated) {
    // Send a POST request to the API endpoint
    const response = await fetch("/homepage", {
      method: "POST",
      body: JSON.stringify({
        title: blogTitle,
        content: blogMessage,
        created: dateCreated,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/userblog');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("blog-id")
  .addEventListener("click", blogFormHandler);
