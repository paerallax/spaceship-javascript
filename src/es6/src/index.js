// Don't worry about this part, it's just fetching the api
async function loadApi() {
    try {
      let response = await fetch(
        "https://content.guardianapis.com/search?api-key=ce24bfea-f164-4253-a7f7-eb878e49929e"
      );
      let responseToJson = await response.json();
      return console.log(responseToJson.response);
    } catch (error) {
      console.error(error);
    }
  }

// Opennig the console you will see the response object, which contains, pages and result,
// Write a function to organize the results array by pages


// call the function
loadApi();