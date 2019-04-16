$(document).ready(()=>{
    $("#pica").hover(
        ()=>{            
            // $("#person1").show();
            $("#pica img").fadeOut(500,() => {
                $("#pica img").attr("src","./man_工作區域 1.jpg").fadeIn(500);
            });
          
        },
        ()=>{        
            // $("#intro").show();
            $("#pica img").fadeOut(500,() => {
                $("#pica img").attr("src","./man-06.jpg").fadeIn(500);
            }); 
          
        }
    )
