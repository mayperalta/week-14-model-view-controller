const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('value')) {
      const id = event.target.getAttribute('value');

      console.log(`Post ID: ${id}`);
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete the blog post ');
      }
    }
  };

  document.getElementById("delete-btn").addEventListener("click", delButtonHandler);