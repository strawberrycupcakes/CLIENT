function generatorPlace() {

  var request = new XMLHttpRequest();
  request.open('GET',"https://restcountries-v1.p.rapidapi.com/all", true);


  request.onreadystatechange = function () {

  if (request.readyState == 4 && request.status == 200) {
    var text = request.responseText;
    var jsonText = JSON.parse(text);
    var joke = jsonText.value;
    document.getElementById('Joke').innerHTML = joke;
    console.log(joke);
    }

  };
  request.send();
}
