$(document).ready(()=>{
    $("#img1").hover(
        ()=>{ 
            $("#img1 img").fadeOut(300,() => {
                $("#img1 img").attr("src","./man_工作區域 1.jpg").fadeIn(300);
            });          
                
        },
        ()=>{   
            $("#img1 img").fadeOut(300,() => {
                $("#img1 img").attr("src","./man-06.jpg").fadeIn(300);
            });      
                  
        }); 
})
