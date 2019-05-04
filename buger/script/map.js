function initMap() {
	 // ���J���u�A�ȻP���u��ܹϼh
    	var directionsService = new google.maps.DirectionsService();
    	var directionsDisplay = new google.maps.DirectionsRenderer();
        var contentString1 = "�½��~��(�x�n������)</br>09xx-xxx-xxx</br></br>";
	var contentString2 = "�½��~��(�L�˩�)</br>09xx-xxx-xxx</br></br>";
	    
	var latlng = { lat: 25.046891, lng: 121.516602 }; // ���@�Ӫ�l��m
        var map = new google.maps.Map(document.getElementById('mapbox'), {
            zoom: 14, //��j�����v
            center: latlng //��l�ƪ��a�Ϥ��ߦ�m
        });
        	    
	// ��m���u�ϼh
	directionsDisplay.setMap(map);
	
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
		// ���u�����]�w
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
		    label: '��'
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
		pixelOffset: new google.maps.Size(0, -50)
    		});
		infowindow1.addListener('domready',function() {
    		infowindow1.setContent(contentString1 + '<button>��ܩ���</button>');
			
		});
		    
		var infowindow2 = new google.maps.InfoWindow({
    		content: contentString2,
    		position: { lat: 22.988608, lng: 120.224096 },
    		maxWidth:300,
		pixelOffset: new google.maps.Size(0, -50)
    		});
		infowindow2.addListener('domready',function() {
    		infowindow2.setContent(contentString2 + '<button>��ܩ���</button>');
		});    
		   
  		infowindow1.open(map);
		infowindow2.open(map);
		
		    
                map.setZoom(14);
                map.setCenter(pos);
    // ø�s���u
    marker1.addListener('click',function(){
    
    directionsService.route(request1, function (result, status) {
        if (status == 'OK') {
            // �^�Ǹ��u�W�C�ӨB�J���Ӹ`
            console.log(result.routes[0].legs[0].steps);
            directionsDisplay.setDirections(result);
	if (status == google.maps.DirectionsStatus.OK) {
	
        var route = result.routes[0];
        // ���o�Z��
        var Distance=route.legs[0].distance.text;
        // ���o���|�j���ɶ�
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
            // �^�Ǹ��u�W�C�ӨB�J���Ӹ`
            console.log(result.routes[0].legs[0].steps);
            directionsDisplay.setDirections(result);
	if (status == google.maps.DirectionsStatus.OK) {
	
        var route = result.routes[0];
        // ���o�Z��
        var Distance=route.legs[0].distance.text;
        // ���o���|�j���ɶ�
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
            alert("�����\�ξD�J���~�I");
        }
    } //init_end