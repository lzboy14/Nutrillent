
var totalSum = 0;
var suffix;
var flag = -1;

function getValTracker() {
    
    //Initializing variables.
    var foodInput = document.getElementById("blue").value;
    var amountOfFood = document.getElementById("red").value;
    
    const params = {
      api_key: '6MQ4LW4IKJM0u9xCgJzqOpOjWCbBah1NoPxdWvd0',
      dataType: "Survey (FNDDS)",
      pageSize: '2',
      query: foodInput
    }
    
    var api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?&query=${(params.query)}&pageSize=${(params.pageSize)}&api_key=${(params.api_key)}&dataType=${(params.dataType)}`
  
    fetch(api_url).then(
      function (response) {
            return response.text().then(function (result) {

                //Initializing more variables.
                let obj = JSON.parse(result)
                var numOfNutrients = Object.keys(obj.foods[0].foodNutrients).length;

                var amountOfNutrient, flag, nutrientIndex, roundedVal, tempValue1, trueVal, vitamin;
                nutrientIndex = 0;
                amountOfNutrient = 0;
                vitamin = 0;
                tempValue1 = 0;
                flag = false;

                //If/else statements to determine nutrient chosen by user.
                if (nutrient.toUpperCase() == "IRON"){
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Iron, Fe") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "ZINC") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Zinc, Zn") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "VITAMIN D") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin D (D2 + D3)") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "VITAMIN B12") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin B-12") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "CALCIUM") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Calcium, Ca") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "VITAMIN A") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin A, RAE") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "MAGNESIUM") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Magnesium, Mg") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "POTASSIUM") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Potassium, K") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "VITAMIN E") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin E (alpha-tocopherol)") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                } else if (nutrient.toUpperCase() == "VITAMIN C") {
                  for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                  if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin C, total ascorbic acid") {
                      flag = true;
                      nutrientIndex = vitamin;
                      amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                  }
                  vitamin += 1;
                  }
                }
                
                //Final Calculations
                trueVal = amountOfNutrient * amountOfFood / 100;
                roundedVal = Math.round(trueVal * 100) / 100;
                totalSum += roundedVal;
                document.getElementById("demo1").innerHTML = "Current intake of " + nutrient + ": " + totalSum + suffix;
                document.getElementById("demo2").innerHTML = "Recommended daily intake: " + recAmount;

        })
      }
    )
    //Determining user input.
    var nutrientList = document.getElementsByName("mineral");
    for (i = 0; i < nutrientList.length; i++) {
      if (nutrientList[i].checked) {
        var nutrient = nutrientList[i].value;
        var nutrientNum = i;
        if (flag != i) {
          totalSum = 0;
        }
        flag = i;
      }
    }
    if (nutrientNum == 0 || nutrientNum == 1 || nutrientNum == 2 || nutrientNum == 3 || nutrientNum == 4 || nutrientNum == 6 || nutrientNum == 8) {
      suffix = "mg"
    } else if (nutrientNum == 7 || nutrientNum == 9) {
      suffix = "mcg"
    } else if (nutrientNum == 5) {
      suffix = "mcg RAE"
    }
    var defLevelList = document.getElementsByName("defLevel");
    for (i = 0; i < defLevelList.length; i++) {
    if (defLevelList[i].checked)
      var defLevel = i;
    }
    //Master list to determine recommended amount.
    const masterList = [["1300mg", "1625mg", "1950mg"],["18mg", "23mg", "27mg"],["420mg", "525mg", "630mg"],["4700mg", "5900mg", "7050mg"],["11mg", "14mg", "17mg"],["900mcg RAE", "1100mcg RAE", "1400mcg RAE"],["90mg", "113mg", "135mg"],["20mcg", "25mcg", "30mcg"],["15mg", "19mg", "23mg"],["2.4mcg", "3.0mcg", "3.6mcg"]]
    var recAmount = masterList[nutrientNum][defLevel];
}

//Two versions of the "getVal()" function are required due to the difference in input types for the user's chosen nutrient.


//getValDatabase()
function getValDatabase() {
  var foodInput = document.getElementById("blue").value;
  var amountOfFood = document.getElementById("red").value;
  var nutrient = document.getElementById("yellow").value;
  const params = {
    api_key: 'KN2QOGHkM2Sv0PXtP1FPCApL3Nlvpp5ViPAciZSa',
    dataType: "Survey (FNDDS)",
    pageSize: '2',
    query: foodInput
  }
  
  var api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?&query=${(params.query)}&pageSize=${(params.pageSize)}&api_key=${(params.api_key)}&dataType=${(params.dataType)}`

  fetch(api_url).then(
    function (response) {
          return response.text().then(function (result) {

              let obj = JSON.parse(result)
              var numOfNutrients = Object.keys(obj.foods[0].foodNutrients).length;

              var amountOfNutrient, flag, nutrientIndex, roundedVal, tempValue1, trueVal, vitamin, totalSum;
              nutrientIndex = 0;
              amountOfNutrient = 0;
              vitamin = 0;
              tempValue1 = 0;
              totalSum = 0;
              flag = false;

              if (nutrient.toUpperCase() == "IRON"){
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Iron, Fe") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "ZINC") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Zinc, Zn") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "VITAMIN D") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin D (D2 + D3)") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "VITAMIN B12") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin B-12") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "CALCIUM") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Calcium, Ca") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "VITAMIN A") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin A, RAE") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "MAGNESIUM") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Magnesium, Mg") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "POTASSIUM") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Potassium, K") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                } 
              } else if (nutrient.toUpperCase() == "VITAMIN C") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin C, total ascorbic acid") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              } else if (nutrient.toUpperCase() == "VITAMIN E") {
                for (var value2 = 0; value2 < numOfNutrients; value2 ++) {
                if (obj.foods[0].foodNutrients[vitamin].nutrientName === "Vitamin E (alpha-tocopherol)") {
                    flag = true;
                    nutrientIndex = vitamin;
                    amountOfNutrient += obj.foods[0].foodNutrients[nutrientIndex].value;
                }
                vitamin += 1;
                }
              }
              if (nutrient.toUpperCase() == "POTASSIUM" || nutrient.toUpperCase() == "ZINC" || nutrient.toUpperCase() == "IRON" || nutrient.toUpperCase() == "MAGNESIUM" || nutrient.toUpperCase() == "CALCIUM" || nutrient.toUpperCase() == "VITAMIN E" || nutrient.toUpperCase() == "VITAMIN C") {
                var suffix = "mg"
              } else if (nutrient.toUpperCase() == "VITAMIN B12" || nutrient.toUpperCase() == "VITAMIN D") {
                var suffix = "mcg"
              } else if (nutrient.toUpperCase() == "VITAMIN A") {
                var suffix = "mcg RAE"
              }
              //Final calculations.
              trueVal = amountOfNutrient * amountOfFood / 100;
              roundedVal = Math.round(trueVal * 100) / 100;
              totalSum += roundedVal;
              document.getElementById("demo").innerHTML = "There are " + totalSum + " " + suffix + " of " + nutrient + " in " + amountOfFood + " grams of " + foodInput + ". ";

      })
    }
  )
}