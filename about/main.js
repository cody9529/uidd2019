$(document).ready(()=>{
    $("#img1").hover(
        ()=>{            
            // $("#person1").show();
            $("#img1 img").fadeOut(500,() => {
                $("#img1 img").attr("src","./man_工作區域 1.jpg").fadeIn(500);
            });
          
        },
        ()=>{        
            // $("#intro").show();
            $("#img1 img").fadeOut(500,() => {
                $("#img1 img").attr("src","man-06.jpg").fadeIn(500);
            }); 
        }
    );
})
