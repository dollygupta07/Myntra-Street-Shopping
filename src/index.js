
let shops = [
  {
    "ShopId":1,
    "ShopName":"Shiv Shakti Garment",
    "Lat":"25.309151346114504",
    "Lon":"83.0072681020267",
    "Rating":"3",
  },
  {
    "ShopId":2,
    "ShopName":"Venus Stores",
    "Lat":"25.30929683135164",
    "Lon":"83.00755241618286",
    "Rating":"4",
  },
  {
    "ShopId":3,
    "ShopName":"Shri Baba Banaras Silk Factory",
    "Lat":"25.30949081136756",
    "Lon":"83.00844827399509",
    "Rating":"2",
  },
  {
    "ShopId":4,
    "ShopName":"Shiv Ganga Garments",
    "Lat":"25.309093151975635",
    "Lon":"83.00787964568305",
    "Rating":"5",
  },
  {
    "ShopId":5,
    "ShopName":"Shopping Camp",
    "Lat":"25.308574253001513",
    "Lon":"83.00653854117355",
    "Rating":"5",
  },
  {
    "ShopId":6,
    "ShopName":"Gopal Readymade Stores",
    "Lat":"25.30871973891939",
    "Lon":"83.0102024386935",
    "Rating":"4",
  },
  {
    "ShopId":7,
    "ShopName":"Whole Cloth Market in Mumbai",
    "Lat":"18.94944455821818", 
    "Lon":"72.83678969583968",
    "Rating":"4",
  },
  {
    "ShopId":8,
    "ShopName":"Manish Market",
    "Lat":"18.95333551792352", 
    "Lon":"72.83458836697932",
    "Rating":"4",
  },
  {
    "ShopId":9,
    "ShopName":"Kalyan Jewellers", 
    "Lat":"19.08482084931433", 
    "Lon":"72.90559250839293",
    "Rating":"3",
  },
  {
    "ShopId":10,
    "ShopName":"The Bombay Store - Chembur, Mumbai", 
    "Lat":"19.07192172094251",
    "Lon":"72.90131615167368",
    "Rating":"3",
  },
  {
    "ShopId":11,
    "ShopName":"Kancheepuram Varamahalakshmi Silks - Chickpet", 
    "Lat":"12.969940922183255",
    "Lon":"77.57609428784063",
    "Rating":"3",
  },
  {
    "ShopId":12,
    "ShopName":"Sri Skanadashri Silks", 
    "Lat":"2.970129114294018",
    "Lon":"77.57967771886291",
    "Rating":"4",
  },
  {
    "ShopId":13,
    "ShopName":"Belli Devi Silks - Best Silk Sarees in Bangalore", 
    "Lat":"12.967634225146826",
    "Lon":"77.58197242951906",
    "Rating":"4",
  },
  {
    "ShopId":14,
    "ShopName":"SHREE RAM TEXTILE", 
    "Lat":"22.582120065028533",
     "Lon":"88.35528043686983",
    "Rating":"4",
  },
  
  {
    "ShopId":15,
    "ShopName":"Saraswati Chikan Store",
    "Lat":"26.866832791677975",
    "Lon":"80.91798964478308",
    "Rating":"4",
  },
  
  {
    "ShopId":16,
    "ShopName":"Aminabad Market",
    "Lat":"26.846450326713416",
    "Lon":"80.92631563124291",
    "Rating":"5",
  },
  
  {
    "ShopId":17,
    "ShopName":"SHYAM GARMENTS",
    "Lat":"28.57394203292553",
    "Lon":"77.19593082114531",
    "Rating":"4",
  },
  {
    "ShopId":18,
    "ShopName":"Sukhdev Pal Store",
    "Lat":"28.574144607238956",
    "Lon":"77.19034109756807",
    "Rating":"4",
  },
  {
    "ShopId":19,
    "ShopName":"Hi-Fashion Femme",
    "Lat":"28.572401513176498",
    "Lon":"77.19386015578792",
    "Rating":"4",
  },
];
  
  
let map;
let marker;
let geocoder;
let responseDiv;
let response;
let cityCircle;
let marker_list = [];
function initMap() {
  console.log("map_index from Routes folder called XXXXXXXXXXx");
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    // center: { lat: -34.397, lng: 150.644 },
    center: { lat: 25.30929, lng: 82.98944 }, //25.30929244965321, 82.98944364144437
    mapTypeControl: false,
  });

  //adding list of coordinates to be shown on the map
   // var shop_locations = [
   //    ['Bondi Beach', -33.890542, 151.274856, 4],
   //    ['Coogee Beach', -33.923036, 151.259052, 5],
   //    ['Cronulla Beach', -34.028249, 151.157507, 3],
   //    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
   //    ['Maroubra Beach', -33.950198, 151.259302, 1]
   //  ];
 

  geocoder = new google.maps.Geocoder();

  // //Dolly
  // const inputText = document.createElement("input");
  // inputText.type = "text";
  // inputText.placeholder = "Enter radius";
  // const submitButton = document.createElement("radius");

  // submitButton.type = "button";
  // submitButton.value = "Radius";
  // submitButton.classList.add("button", "button-primary");

  // //Dolly

  const inputText = document.createElement("input");
  
  inputText.type = "text";
  inputText.placeholder = "Enter a location";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Show Shops";
  submitButton.classList.add("button", "button-primary");



  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");
  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  responseDiv.id = "response-container";
  responseDiv.appendChild(response);

  const instructionsElement = document.createElement("p");




  // instructionsElement.id = "instructions";
  // instructionsElement.innerHTML =
  //   "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
  });
     cityCircle = new google.maps.Circle({
        map,
      });
  map.addListener("click", (e) => {
    clearCircle();
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () => {
      clearCircle();
      geocode({ address: inputText.value });
    });
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
}


function clearCircle(){
  console.log("clearCirle called");
  cityCircle.setMap(null);
}
function clearShopMarkers(){
  console.log("clearShopMarkers called");
  // for(let marker_i in marker_list){
  //   marker_i.setMap(null);
  // }
   
  marker_list.forEach(function(obj){
    // console.log(obj)
    obj.setMap(null);
  });

}
function clear() {
  clearCircle();
  clearShopMarkers();
  marker.setMap(null);
  responseDiv.style.display = "none";
}
function noShopsToast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
}
function getRatingString(rating){
  let str="";
  for(let i =0;i<rating;i++){
    str+='<span class="fa fa-star checked"></span>';
  }
  for(let i=0;i<(5-rating);i++){
    str+='<span class="fa fa-star"></span>';
  }
  return str;
}
function show_shops(locations){
     console.log('Entered function show_shops!!!!!!!!!!!!')
     console.log("received locations size:",locations.length);
     locations.forEach((ls)=>{
      console.log(ls[0]);
     });
     if(locations.length==0){
        noShopsToast();
     }
     var infowindow = new google.maps.InfoWindow();
     var loc_marker, i;
    
    for (i = 0; i < locations.length; i++) {  
        loc_marker = new google.maps.Marker({
         // icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
         icon: './myntra_logo.png',
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      // loc_marker.addListener("click", () => {
      //   var id = locations[i][3];
      //   let url = "http://127.0.0.1:8000/js-samples/src/products" + id + ".html";
      //   window.location.assign(url);
      // });
      marker_list.push(loc_marker);
      let rating_string = getRatingString(locations[i][4]);
      google.maps.event.addListener(loc_marker, 'click', (function(loc_marker, i) {
        return function() {
           content = '<div class="infoWindow"><strong style="font-size:20px;">' + locations[i][0] + '</strong><br>' + rating_string+
           '<p><a  style = "color:#ff3f6c; font-size:15px;" href="' + './shop.html?shopName='+locations[i][0]+'&id='+locations[i][3] + '" target="_blank">' +
                                 "Take me to this Shop" + '</a></p>' +
                    '</div>';

                    
          // infowindow.setContent(locations[i][0]);
          infowindow.setContent(content);
          infowindow.open(map, loc_marker);
        }
      })(loc_marker, i));
    }
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
function getLocationFromDb(radius,center_lat,center_long,rating)
{

//     SELECT s.ShopName, ( 6371 * ACOS( COS( RADIANS( s.Lat ) ) * COS( RADIANS( 25.308574253001513 ) ) 
//       * COS( RADIANS( 83.00653854117355) - RADIANS( s.Lon ) ) + SIN( RADIANS( s.Lat ) ) * SIN( RADIANS(25.308574253001513) ) ) )
//     AS distance FROM shops as s
// where s.Rating>=4 HAVING distance <=0.1 ORDER BY distance ASC ;
      resultant_location =[];
     
      for(let i in shops){
        let shop = shops[i];
        let shop_lat = parseFloat(shop.Lat);
        let shop_lon = parseFloat(shop.Lon);
        let distance_from_center = getDistanceFromLatLonInKm(center_lat, center_long, shop_lat, shop_lon);
        console.log("cal distance: ",distance_from_center);
        if(distance_from_center<=radius && shop.Rating>=rating){
          console.log('@@@@@@@@@@@@@@@@@@@@@something pushed in locations')
          resultant_location.push([shop.ShopName,shop_lat,shop_lon,shop.ShopId,shop.Rating]);
        }
      }
      
      return resultant_location;
}

function geocode(request) {
  clear();
  console.log("called function geocode******************************");
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      // console.log("result :",results[0].geometry.location.lat());
      let radius = parseFloat(document.getElementById('radius').value);
      let center_lat = results[0].geometry.location.lat();
      let center_long = results[0].geometry.location.lng();
      // let center_lat = parseFloat(document.getElementById('center_lat').value);
      // let center_long = parseFloat(document.getElementById('center_long').value);
      let rating = parseFloat(document.getElementById('rating').value);

      console.log("radius: ",radius);
      console.log("center_lat: ",center_lat);
      console.log("center_long: ",center_long);
      console.log("rating: ",rating);
      //code for circle start
      cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      // zoom: getMyZoomLevel(radius),
      center: results[0].geometry.location,
      radius: radius*1000,//in meters
      
    });
      map.fitBounds(cityCircle.getBounds());
      console.log("HEY SHRADDHA this is code after cityCirlce");
      //code for circle end
      marker.setMap(map);
      // show_shops(shop_locations);

      

      show_shops(getLocationFromDb(radius,center_lat,center_long,rating));
      // responseDiv.style.display = "block";
      // response.innerText = JSON.stringify(result, null, 2);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

