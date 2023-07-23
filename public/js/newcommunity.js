const communityFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector("#name").value.trim();
    const date = document.querySelector("#date").value.trim();
    const message = document.querySelector("#message").value.trim();
    console.log(name, date, message)
    if (name && date && message) {

      // Send a POST request to the API endpoint
      const response = await fetch("/api/community", {
        method: "POST",
        body: JSON.stringify({
          content: message,
          author: name,
          created: date
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/community');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .getElementById("community-id")
    .addEventListener("click", communityFormHandler);
