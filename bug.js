const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Assume you have a function to fetch user data from a database or other source
  const userData = getUserData(userId); 

  if (!userData) {
    return res.status(404).send('User not found'); //Correct handling of 404
  }

  res.send(userData); // Missing error handling if getUserData throws an error
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function getUserData(id) {
  // Simulate fetching user data, this could throw an error
  if (id === 'error') {
    throw new Error('Failed to fetch user data');
  }
  //Simulate fetching user data
  return { id: id, name: 'John Doe' };
}