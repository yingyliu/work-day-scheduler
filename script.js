$("#currentDay").text(moment().format('dddd, MMMM Do'));


setInterval(function(){
    $(".container .line").each(function(index,item){
        var time = $(item).text();
        // console.log(moment().format('ha').toUpperCase())
        if(moment().format("ha").toUpperCase() === time) {
            $(item).next().find("textarea").addClass("present");
        }
    })
    
},1000)