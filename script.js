
//import fetch from 'node-fetch';

function name()  {
    var input = document.getElementById("query").value;
    return input
  }
  
  function amount()  {
    var multiply = document.getElementById("amount").value;
    return multiply
  }
  
  function getData() {
    const params = {
      api_key: 'mMtVxMayMJUGI0KQdxmTIedjL10I5wfwEE8Bc29U',
      dataType: ["Survey (FNDDS)"],
      pageSize: '2',
    }
    var query = name();
    var api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?&query=${(' +query+')}&pageSize=${(params.pageSize)}&api_key=${(params.api_key)}&dataType=${(params.dataType)}`;
    return window.fetch(api_url).then(response => response.json())
  }
  
  function onClick()  {
    document.getElementById("query").value;
    var input = getData().then(data => console.log(data.foods[0].foodNutrients[0].value))
    alert('30.8mg Iron, you have reached your goal!');
  }