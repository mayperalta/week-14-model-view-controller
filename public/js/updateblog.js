// get id from button
// fetch delete send button id as request body

const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('value')) {
      const id = event.target.getAttribute('value');
  
      const response = await fetch(`/api/homepage/${id}`, {
        method: 'UPDATE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete the Workout log');
      }
    }
  };

  document.getElementById("update-blog").addEventListener("click", delButtonHandler);