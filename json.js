<div class="results"></div> 

<script>
 
 // ID of the Google Spreadsheet
 var 1VTIoDSGH7xPxf4up5ElTh0LfoxQrSrsiYCNZTmw5FNw = "SPREADSHEET KEY";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRndgl0Pbx-Jr1w-L36o83_F1p7iKqpUWVRfGxgFPVE7h64irSb4TqM-twxgAk4A7I2NRq05-ojJ5Wl/pubhtml" + 1VTIoDSGH7xPxf4up5ElTh0LfoxQrSrsiYCNZTmw5FNw + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  });

 });

</script>
 