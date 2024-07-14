function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(data => {
      appendIdToDOM(data.id);
    })
    .catch(error => {
      appendErrorToDOM(error.message);
    });
}

function appendIdToDOM(id) {
  document.body.innerHTML = `<p>New user ID: ${id}</p>`;
}

function appendErrorToDOM(message) {
  document.body.innerHTML = `<p>Error: ${message}</p>`;
}