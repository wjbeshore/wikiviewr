
var i = 0;

$("#search").on("click", function() {
  if($("#toSearch").val().length > 0){
    
      $("#myList").fadeOut(400, function(){
        $("#myList").html("");
        $("#myList").fadeIn();
      });
      
      
      $("#alert").html("");
      $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=links&srsearch=" + $("#toSearch").val() + "&utf8=&origin=*&format=json", function(json) {
       for(var n = 0; n < json["query"]["search"].length; n++){
        setTimeout(function () { 
          console.log(i);
          console.log(json['query']['search'][i]["title"]);
         var listItem = document.createElement("LI");
         var hone = document.createElement("H1");
         var pe = document.createElement("P");
         var link = "<a class='link' href = 'https://en.wikipedia.org/wiki/" + json['query']['search'][i]["title"] + "'> Read More</a>";
         
         $(hone).html(json['query']['search'][i]["title"]);
         $(pe).html(json['query']['search'][i]["snippet"] + link);
        $(link).html(json['query']['search'][i]["title"]);
         listItem.appendChild(hone);
         listItem.appendChild(pe);
         var list = document.getElementById('myList');
         list.appendChild(listItem);
          i++;
        }, 250*n);
         i = 0;
       }
       });
       }else {
    $("#alert").html("Please enter your search.");
  }
});