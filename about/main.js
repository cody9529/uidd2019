  $(document).ready(function() {
    //滑鼠切換底色
    $('.picback').each(function()
      //class名為demo的每一個(each)執行以下function
    {
        $(this).mouseover(function(){
            $(this).src="man_工作區域 1.jpg";  
            //被mouseover(被滑鼠滑過的.demo) 其css的background-color改為#33648B，文字顏色為#FFFFFF 
        });

        $(this).mouseout(function(){ 
            $(this).src="man-06.jpg";           
            //被mouseout(被滑鼠移出的.demo) 其css的background-color無設定，文字顏色為#000000 
        });
    }) ;
});
