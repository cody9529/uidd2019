//{

//variable
let count = 0
let order_number = 0
//漢堡單價
let waitminute = 15;

let months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')
let weekdays = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',')

//funcntion

//common_used
add_func = function () {
    var number = $(this).siblings('.order_number').html();
    var singalprice = Number($(this).siblings('.price_non').html())
    var now_price = Number($(this).siblings('.single_price').html())
    var total = Number($('#co').html())
    /* if(total==0){
         total+=singalprice 
     }*/
    if (number < 10) {
        number++;
        now_price += singalprice
        total += singalprice
    }
    $(this).siblings('.order_number').html(number)
    $(this).siblings('.single_price').html(now_price)
    $('#co').html(total)
}

minus_func = function () {
    var number = $(this).siblings('.order_number').html();
    var singalprice = Number($(this).siblings('.price_non').html())
    var now_price = Number($(this).siblings('.single_price').html())
    var total = Number($('#co').html())
    if (number != 1) {
        number--;
        now_price -= singalprice
        total -= singalprice
    }
    $(this).siblings('.order_number').html(number)
    $(this).siblings('.single_price').html(now_price)
    $('#co').html(total)

}

delete_func = function () {
    //$(this).parent().addClass('animated bounceOutLeft 0.5s ')
    //$(this).parent().delay(10000).css('display','none');

    var minus = Number($(this).siblings('.single_price').html())
    var total = Number($('#co').html())
    var a = total - minus
    console.log(minus)
    $('#co').html(a)

    $(this).parent().addClass('animated bounceOutLeft 0.5s ')
    $(this).parent().delay(500).hide(100);
}


Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
  }


//common used


$('#start_order').click(function () {

    //debug
    count++;
    console.log('start!!boo ya')
    console.log(count)
})

$('.menber_icon').click(function () {

    //debug
    console.log('link to menber')
})


$('#add_1').on('click', function () {
    d = document.createElement('div');
    $(d).addClass('order_list animated bounceInRight 0.5s')
        .html(
            `<p class="order_name">黑胡椒</p>
            <p class="ingredient">材料</p>
            <p class="sauce">醬汁</p>
            <div class="delete_btn"></div>
            <p class="single_price">120</p>
            <p class='order_number'>1</p>
            <div class="add_btn">add</div>
            <div class="minus_btn">minus</div>
            <div class="price_non" style="display:none;">120</div>`
        )
        .attr('id', 'order_' + order_number)
        .appendTo($(".append_rigion"))

    var singalprice = Number($(d).children('.price_non').html())
    var total = Number($('#co').html())
    console.log(singalprice)
    total += singalprice
    $('#co').html(total)

    $(d).children('.delete_btn').on('click', delete_func)

    $(d).children('.add_btn').on('click', add_func)
    $(d).children('.minus_btn').on('click', minus_func)

    $('wrap').modal()
    //$('.shadow').show()
})

$('#add_2').on('click', function () {

})

$('#add_3').on('click', function () {

})

$('#add_4').on('click', function () {

})
//delete

//$('.delete_btn').on('click',delete_func)

//$('.add_btn').on('click',add_func)

//$('.minus_btn').on('click',minus_func)

//shadow return
$('.shadow').on('click', function () {
    $('.shadow').modal()
})

//in third page
$('#step1_btn').on('click', function () {
    $('#step1_btn').addClass('red')
    $('#step2_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
})

$('#step2_btn').on('click', function () {
    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    $('.time_block').animate({ height: "50%" })
    $('#next1').fadeIn()
    $('#self_defind').fadeIn()
    $('.step3').addClass('animated fadeOutRight 0.5s')

})

$('#step3_btn').on('click', function () {
    $('#step3_btn').addClass('red')
    $('#step2_btn').removeClass('red')
    $('#step1_btn').removeClass('red')
})


$('#self_defind').on('click', function () {
    $('#default').addClass('opacity')
    $('#defa').addClass('opacity')
    $('#self_defind').removeClass('opacity')

    $('#cost').removeClass('animated fadeOutLeft 0.5s')
    $('#cost').addClass('animated fadeInLeft 0.5s')
    
    $('#cost').show()
    $('.time_table').removeClass('animated fadeOutLeft 0.5s')
    $('.time_table').addClass('animated fadeInLeft 0.5s')
    $('.time_table').show()

    $('#next1').hide()

    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')

    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
    var day = new Date()
    var d=new Date()
    console.log(day)
    var hour = day.getHours()
    var minute = day.getMinutes()
    minute += waitminute
    if (minute > 60) {
        minute -= 60
        hour++
    }
    
    var Dtomorrow=new Date(d.addDays(1))
    var Ddayafter=new Date(d.addDays(1))

    $('#week_').html(weekdays[day.getDay()])
    $('#month_').html(months[day.getMonth()])
    $('#day_').html(day.getDate())
    $('#hour_').html(hour)
    $('#minute_').html(minute)

    $('#tod').html(day.getDate())
    $('#tom').html(Dtomorrow.getDate())
    $('#dat').html(Ddayafter.getDate())
    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
})


$('#default').on('click', function () {
    $('.time_block').animate({ height: "50%" })

    $('#default').removeClass('opacity')
    $('#defa').removeClass('opacity')
    $('#self_defind').addClass('opacity')

    $('#cost').addClass('animated fadeOutLeft 0.5s')
    //$('#cost').delay(500).hide(500)
    $('.time_table').addClass('animated fadeOutLeft 0.5s')
    //$('.time_table').delay(500).hide()

    $('#next1').show()

    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    $('#self_defind').fadeIn()
    $('.step3').addClass('animated fadeOutRight 0.5s')

    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
    var day = new Date()
    console.log(day)
    var hour = day.getHours()
    var minute = day.getMinutes()
    minute += waitminute
    if (minute > 60) {
        minute -= 60
        hour++
    }
    $('#week').html(weekdays[day.getDay()])
    $('#month').html(months[day.getMonth()])
    $('#day').html(day.getDate())
    $('#hour').html(hour)
    $('#minute').html(minute)
    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
})

$('#next1').on('click', function () {
    $('#step2_btn').removeClass('red')
    $('#step3_btn').addClass('red')
    $('#next1').fadeOut()
    $('#self_defind').fadeOut()
    $('.time_block').animate({ height: "27%" })
    $('.step3').removeClass('animated fadeOutRight 0.5s')
    $('.step3').addClass('animated fadeInRight 0.5s')
    $('.step3').show()
})


$('#next2').on('click', function () {
    $('#step2_btn').removeClass('red')
    $('#step3_btn').addClass('red')
    $('#next1').fadeOut()
    $('#self_defind').fadeOut()
    $('.time_block').animate({ height: "27%" })
    $('.step3').removeClass('animated fadeOutRight 0.5s')
    $('.step3').addClass('animated fadeInRight 0.5s')
    $('.step3').show()

    $('#cost').addClass('animated fadeOutLeft 0.5s')
    $('#cost').delay(400).hide()
    $('.time_table').addClass('animated fadeOutLeft 0.5s')
    $('.time_table').delay(400).hide()


    $('#week').html($('#week_').html())
    $('#month').html($('#month_').html())
    $('#day').html($('#day_').html())
    $('#hour').html($('#hour_').html())
    $('#minute').html($('#minute_').html())
})


$('#line').on('click', function () {
    $('#line').removeClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
})

$('#wallet').on('click', function () {
    $('#line').addClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').removeClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
})

$('#card').on('click', function () {
    $('#line').addClass('opacity')
    $('#card').removeClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
})

$('#yoyo').on('click', function () {
    $('#line').addClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').removeClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
})

/*select time*/
$('#tod').on('click',function(){
    $('#tod').addClass('block_selected')
    $('#tom').removeClass('block_selected')
    $('#dat').removeClass('block_selected')
    $('#day_').html(Number($('#tod').html()))
}) 

$('#tom').on('click',function(){
    $('#tom').addClass('block_selected')
    $('#tod').removeClass('block_selected')
    $('#dat').removeClass('block_selected')
    $('#day_').html(Number($('#tom').html()))
}) 

$('#dat').on('click',function(){
    $('#dat').addClass('block_selected')
    $('#tom').removeClass('block_selected')
    $('#tod').removeClass('block_selected')
    $('#day_').html(Number($('#dat').html()))
}) 

$('#hour11').on('click',function(){
    $('#hour11').addClass('block_selected')
    $('#hour12').removeClass('block_selected')
    $('#hour13').removeClass('block_selected')
    $('#hour_').html(11)
}) 

$('#hour12').on('click',function(){
    $('#hour12').addClass('block_selected')
    $('#hour11').removeClass('block_selected')
    $('#hour13').removeClass('block_selected')
    $('#hour_').html(12)
}) 

$('#hour13').on('click',function(){
    $('#hour13').addClass('block_selected')
    $('#hour12').removeClass('block_selected')
    $('#hour11').removeClass('block_selected')
    $('#hour_').html(13)
}) 

$('#minute00').on('click',function(){
    $('#minute00').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(00)
}) 

$('#minute10').on('click',function(){
    $('#minute10').addClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(10)
}) 

$('#minute20').on('click',function(){
    $('#minute20').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(20)
}) 

$('#minute30').on('click',function(){
    $('#minute30').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(30)
}) 

$('#minute40').on('click',function(){
    $('#minute40').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(40)
}) 

$('#minute50').on('click',function(){
    $('#minute50').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute_').html(50)
}) 

//event



//}