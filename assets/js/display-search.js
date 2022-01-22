// TODO: Find any DOM elements that you may need later and assign them to variables

function getParams() {
  // TODO: Obtain the search params from the URL and make them into an array

  // TODO: From the array, get the query and format values

  // TODO: Invoke the searchApi function
}

function searchApi(query, format) {
  // TODO: Build the query URL using the provided values and the Library of Congress
  //       API documentation as a reference

  // TODO: Execute the search query using fetch(), remembering to handle any errors
  //    1. Remember to parse the response into JSON
  //    2. Set the "Showing results for ..."  title as shown in the README
  //    3. If no results are returned by the API, display some human-friendly text where the results would be
  //    4. For each result found, use the displayResult function to print it to the page
}

function displayResult(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  // TODO: Set up a HTML section to represent the result content
  //       It's up to you which properties you'd like to display and in what layout, but
  //       the mockup in the README is available as a guide.

  // TODO: Add the section to the page
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO: Handle the submission of the form
  // Hint: You should have already done something very similar in script.js
  // Hint: You don't need to redirect the user this time, just invoke the searchApi function
}

// TODO: Add handleSearchFormSubmit as the event handler for search form submission

getParams();
