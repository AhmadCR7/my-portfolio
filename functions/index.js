const functions = require('firebase-functions');
const fetch = require('node-fetch');

// Creates an HTTP endpoint as a Firebase function
exports.proxyLeetCodeAPI = functions.https.onRequest(async (req, res) => {
  try {
    // Fetch data from LeetCode API
    const response = await fetch('https://leetcode.com/api/problems/algorithms/');
    const data = await response.json();

    // Send the fetched data as the response
    res.status(200).send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send(error);
  }
});
