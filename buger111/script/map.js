@charset "UTF-8";

function myFunctionchoose() {
	$('#choosebotton img').hide();
	$('#choosebotton').hide();
	$('#mapbox').show()
	}



function initMap() {
	 // 載入路線服務與路線顯示圖層
    	var directionsService = new google.maps.DirectionsService();
    	var directionsDisplay = new google.maps.DirectionsRenderer();
        var contentString1 = "黑膠漢堡(台南車站店)&emsp;</br>";
	var contentString2 = "黑膠漢堡(林森店)&emsp;</br>";
	    
	var latlng = { lat: 25.046891, lng: 121.516602 }; // 給一個初始位置
        var map = new google.maps.Map(document.getElementById('mapbox'), {
            zoom: 14, //放大的倍率
            center: latlng //初始化的地圖中心位置
        });
        	    
	// 放置路線圖層
	directionsDisplay.setMap(map);
	
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
		// 路線相關設定
		var request1 = {
       	 	    origin:  { lat: position.coords.latitude, lng: position.coords.longitude },
        	    destination: { lat: 22.997322, lng: 120.212076 },
        	    travelMode: 'DRIVING'
    		};
		var request2 = {
       	 	    origin:  { lat: position.coords.latitude, lng: position.coords.longitude },
        	    destination: { lat: 22.988608, lng: 120.224096 },
        	    travelMode: 'DRIVING'
    		};
		
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
		    zIndex:999,
		    label: '我'
                });
		var marker1 = new google.maps.Marker({
                    position: { lat: 22.997322, lng: 120.212076 },
                    map: map,
		    zIndex:999
                });
		var marker2 = new google.maps.Marker({
                    position: { lat: 22.988608, lng: 120.224096 },
                    map: map,
		    zIndex:999
                });
		var infowindow1 = new google.maps.InfoWindow({
    		content: contentString1,
    		position: { lat: 22.997322, lng: 120.212076 },
    		maxWidth:300,
		pixelOffset: new google.maps.Size(0, -45)
    		});
		infowindow1.addListener('domready',function() {
    		infowindow1.setContent(contentString1 + '<button onclick="myFunction1()">選擇店面</button>');
			
		});
		    
		var infowindow2 = new google.maps.InfoWindow({
    		content: contentString2,
    		position: { lat: 22.988608, lng: 120.224096 },
    		maxWidth:300,
		pixelOffset: new google.maps.Size(0, -45)
    		});
		infowindow2.addListener('domready',function() {
    		infowindow2.setContent(contentString2 + '<button onclick="myFunction2()">選擇店面</button>');
		});    
		   
  		infowindow1.open(map);
		infowindow2.open(map);
		
		    
                map.setZoom(14);
                map.setCenter(pos);
    // 繪製路線
    marker1.addListener('click',function(){
    
    directionsService.route(request1, function (result, status) {
        if (status == 'OK') {
            // 回傳路線上每個步驟的細節
            console.log(result.routes[0].legs[0].steps);
            directionsDisplay.setDirections(result);
	if (status == google.maps.DirectionsStatus.OK) {
	
        var route = result.routes[0];
        // 取得距離
        var Distance=route.legs[0].distance.text;
        // 取得路徑大約時間
        var Duration=route.legs[0].duration.text;
        
    }
		
        } else {
            console.log(status);
        }
    });
    
            });
    marker2.addListener('click',function(){
    
    directionsService.route(request2, function (result, status) {
        if (status == 'OK') {
            // 回傳路線上每個步驟的細節
            console.log(result.routes[0].legs[0].steps);
            directionsDisplay.setDirections(result);
	if (status == google.maps.DirectionsStatus.OK) {
	
        var route = result.routes[0];
        // 取得距離
        var Distance=route.legs[0].distance.text;
        // 取得路徑大約時間
        var Duration=route.legs[0].duration.text;
       
    }
		
        } else {
            console.log(status);
        }
    });
    
            });
		    
        });
	}else {
            // Browser doesn't support Geolocation
            alert("未允許或遭遇錯誤！");
        }
    }; //init_end

function myFunction1(){
	   
  	   document.getElementById('storeinfo1').innerHTML = '黑膠漢堡台南車站店</br>' ;
	   document.getElementById('storeinfo2').innerHTML = '地址：台南市中西區成功路</br>09xx-xxx-xxx' ;
    };
function myFunction2(){
	   
	   document.getElementById('storeinfo1').innerHTML = '黑膠漢堡林森店' ;
	   document.getElementById('storeinfo2').innerHTML = '地址：台南市東區崇善路151號</br>09xx-xxx-xxx' ;
    };
