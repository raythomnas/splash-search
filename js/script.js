var k = JSON.parse(apiKey);
key = k[0].key;

// $(document).ready(function(){

function test(){
  $.ajax({

    url:`https://api.unsplash.com/photos/random/?client_id=${key}&count=12&query=${keyword}&orientation=${orient}`,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<data.length; i++){
        document.getElementById('dump').innerHTML 
        += '<div class="col-3">'
        + '<img class="img-fluid" src="'+data[i].urls.raw+'"></img>'
        + '</div>'
      }

    },//data end

    error: function(){
      console.log('error');
    }//error end

  });//ajax ending here

};
// });


var input = document.getElementById("searchWord");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchButton").click();
  }
});

var keyword = "";
var orient = "squarish";

test()

document.getElementById('searchButton').addEventListener('click', function(e){
  // e.preventDefault();
  keyword = document.getElementById('searchWord').value;
  console.log(keyword)
  orient = document.getElementById('orient').value;
  console.log(orient)
  document.getElementById('dump').innerHTML = "";
  test();

});