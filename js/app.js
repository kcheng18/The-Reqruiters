//function to create a map and display it at the id of map on html
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat:41.229737,
            lng: -96.023418
          }
        });
        setMarkers(map);
        open_available();
 }
 //A function to generate random numbers for the check availablity tab
 function open_available(){
  var x =Math.floor(Math.random() * 10) + 1;
  document.getElementById("legends").innerHTML =Math.floor(Math.random() * 10) + 1 ;
  document.getElementById("maithai").innerHTML =Math.floor(Math.random() * 10) + 1 ;
  document.getElementById("lepepp").innerHTML =Math.floor(Math.random() * 10) + 1 ;

}
//List of restaurants with their latitude and longitude
 var restaurants=[['Legends',41.249180,-96.02100, 0],
        ['Mai Thai Omaha',41.229737, -96.023418, 1],
        ['Le Peep - Aksarben Pointe',41.249150,-96.021233, 2],
        ['VodooTaco',41.237,-96.01389, 3],
        ['Ponzu Sushi and Grill',41.240117,-96.015315, 4],
        ['JuiceStop',41.239163,-96.014410, 5],
        ['Jones Bros Cupcakes',41.239085,-96.014172, 6],
        ['Herbe Sainte',41.240618,-96.014923, 7],
        ['Vitality Bowls',41.240969,-96.015100, 8],
        ['Godfathers Pizza', 41.286724,-96.080810, 9]
       
        ];

  var gmarkers = [];
  //Function open respective modals for different popups to show.
  
  function open_modal(i){
    switch(i){
      case 1:$('#myModal_MaiThai').modal('show');
      break;
      case 2:$('#myModal_Lepep').modal('show');
      break;
       case 3:$('#myModal').modal('show');
      break;
      case 4:$('#myModal').modal('show');
      break;
       case 5:$('#myModal').modal('show');
      break;
       case 6:$('#myModal').modal('show');
      break;
       case 7:$('#myModal').modal('show');
      break;
      case 8:$('#myModal').modal('show');
      break;
      case 9:$('#myModal').modal('show');
      break;
       case 0:$('#myModal_Legends').modal('show');
      break;
     
    }
  }
 
//Function to set the markers on the map and make them clickable to show the respective pop ip.
  function setMarkers(map) {
  	for (var i = 0; i < restaurants.length; i++) {
          var restaurant = restaurants[i];
          var marker = new google.maps.Marker({
            position: {lat: restaurant[1], lng: restaurant[2]},
            map: map,
            title: restaurant[0],
            zIndex: restaurant[3]
          });
            gmarkers.push(marker);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
         open_modal(i);
            //infoWindow.open(map, marker);
          
          }
    })(marker, i));    
 //each li element has click event registered and based on that the respective markers is opened.     
$('#list li').each(function(i, e) {
  $(e).click(function(i) {
    return function(e) {
      google.maps.event.trigger(gmarkers[i], 'click');
    }
  }(i));
 }); 
}
}