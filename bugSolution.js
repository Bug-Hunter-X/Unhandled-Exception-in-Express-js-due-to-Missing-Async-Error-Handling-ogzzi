const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    const userData = getUserData(userId);
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
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