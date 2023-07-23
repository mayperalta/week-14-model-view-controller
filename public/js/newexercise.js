const exerciseFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const exerciseType = document.querySelector("#exercise-type").value.trim();
  const exerciseName = document.querySelector("#exercise-name").value.trim();
  const duration = document.querySelector("#duration").value.trim();
  const dateCreated = document.querySelector("#date_created").value.trim();

  if (exerciseType && exerciseName && duration && dateCreated) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/exercise", {
      method: "POST",
      body: JSON.stringify({
        exercise_category: exerciseType,
        exercise_name: exerciseName,
        duration: duration,
        created: dateCreated,
        description: "great workout"
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/userexercise');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("exercise-id")
  .addEventListener("click", exerciseFormHandler);
