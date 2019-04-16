$(document).ready(()=>{
    $("#img1").hover(
        ()=>{            
            $("#img1 img").fadeOut(500)          
        },
        ()=>{        
            $("#img1 img").fadeIn(500) 
        
        }); 
});
