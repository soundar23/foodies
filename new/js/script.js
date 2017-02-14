$(document).ready(function(){
    $('#btnSearch').on('click',function(){
        $('#results').html("");
        var title=$("#search").val();
        console.log(title);
          $.getJSON(`https://developers.zomato.com/api/v2.1/search?entity_id=${title}&entity_type=city&apikey=4e338054b2e8a2669cd43842eda23c44`,function(json){
                displayResult(json);
                console.log(json);
              });
    });
    function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["restaurants"];
        $("#tempelate").tmpl(movieArray).appendTo("#results");
      }
    }
});
