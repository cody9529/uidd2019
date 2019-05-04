{

//variable
let count=0
let order_number=0
//º~³ù³æ»ù

//funcntion

//common_used
add_func=function(){
    var number=$(this).siblings('.order_number').html();
    var singalprice=Number($(this).siblings('.price_non').html())
    var now_price=Number($(this).siblings('.single_price').html())
    var total=Number($('#co').html())
   /* if(total==0){
        total+=singalprice 
    }*/
    if(number<10){
        number++;
        now_price+=singalprice
        total+=singalprice
    }
    $(this).siblings('.order_number').html(number)
    $(this).siblings('.single_price').html(now_price)
    $('#co').html(total)
}

minus_func=function(){
    var number=$(this).siblings('.order_number').html();
    var singalprice=Number($(this).siblings('.price_non').html())
    var now_price=Number($(this).siblings('.single_price').html())
    var total=Number($('#co').html())
    if(number!=1){
        number--;
        now_price-=singalprice
        total-=singalprice
    }
    $(this).siblings('.order_number').html(number)
    $(this).siblings('.single_price').html(now_price)
    $('#co').html(total)

}

delete_func=function(){
    //$(this).parent().addClass('animated bounceOutLeft 0.5s ')
    //$(this).parent().delay(10000).css('display','none');
    
    var minus=Number($(this).siblings('.single_price').html())
    var total=Number($('#co').html())
    var a=total-minus
    console.log(minus)
    $('#co').html(a)
    /*setTimeout(function(){
        $(this).parent().hide();
       },500) */
     $(this).parent().hide();
}

//common used


$('#start_order').click(function(){

    //debug
    count++;
    console.log('start!!boo ya')
    console.log(count)
})

$('.menber_icon').click(function(){

    //debug
    console.log('link to menber')
})


$('#add_1').on('click',function(){
    d = document.createElement('div');
    $(d).addClass('order_list animated bounceInRight 0.5s')
        .html(
            `<p class="order_name">¶Â­J´Ô</p>
            <p class="ingredient">§÷®Æ</p>
            <p class="sauce">Âæ¥Ä</p>
            <div class="delete_btn"></div>
            <p class="single_price">120</p>
            <p class='order_number'>1</p>
            <div class="add_btn">add</div>
            <div class="minus_btn">minus</div>
            <div class="price_non" style="display:none;">120</div>`
            )
        .attr('id','order_'+order_number)
        .appendTo($(".append_rigion")) 
        
    var singalprice=Number($(d).children('.price_non').html())
    var total=Number($('#co').html())
    console.log(singalprice)
    total+=singalprice 
    $('#co').html(total)

    $(d).children('.delete_btn').on('click',delete_func)

    $(d).children('.add_btn').on('click',add_func)
    $(d).children('.minus_btn').on('click',minus_func)

    $('wrap').modal()
    //$('.shadow').show()
})

$('#add_2').on('click',function(){
    
})

$('#add_3').on('click',function(){
    
})

$('#add_4').on('click',function(){
    
})
//delete

//$('.delete_btn').on('click',delete_func)

//$('.add_btn').on('click',add_func)

//$('.minus_btn').on('click',minus_func)

//shadow return
$('.shadow').on('click',function(){
    $('.shadow').modal()
})



//event





}