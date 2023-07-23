// get id from button
// fetch delete send button id as request body

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('value')) {
      const id = event.target.getAttribute('value');
  
      const response = await fetch(`/api/exercise/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete the Workout log');
      }
    }
  };

  document.getElementById("delete-exercise-button").addEventListener("click", delButtonHandler);