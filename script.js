// Timeblocks setting
var currentTime = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentTime);

// Day scheduler with past/present/future color
$(".container .line").each(function (index, element) {
    var milTimeOfElement = parseInt($(element).data('mil'));
    var currentMilTime = parseInt(moment().format('HH'));

    // if the timeInTheElement is equal to the current hour
    if (currentMilTime === milTimeOfElement) {
        // -- add the present class
        $(element).next().find("textarea").addClass("present");
    }

    // if the timeInTheElement is greater than the current hour
    if (currentMilTime > milTimeOfElement) {
        // -- add the past class
        $(element).next().find("textarea").addClass("past");
    }

    // if the timeInTheElement is less than the current hour
    if (currentMilTime < milTimeOfElement) {
        // -- add the future class
        $(element).next().find("textarea").addClass("future");
    }
})

// local storage
var dayPlanner = JSON.parse(localStorage.getItem("dayPlannerStringify")|| "{}");
$(".saveBtn").each(function(index,element) {
    var saveButton = element;
    $(saveButton).click(function(){
        var dailySchedule = $(".schedule").eq(index);
        var insert = "dailySchedule" + index;
        dayPlanner[insert] = dailySchedule.val().trim();

        localStorage.setItem("dayPlannerStringify", JSON.stringify(dayPlanner));
        localStorage.setItem("dayPlanner", dayPlanner);

        renderMessage();

    });
});

function renderMessage() {
    var rendertext = JSON.parse(localStorage.getItem("dayPlannerStringify")|| "{}");
    for (var i = 0; i < Object.keys(rendertext).length; i++) {
        var insert = Object.keys(rendertext)[i];
        var dailyScheduleLength = "dailySchedule".length;
        var scheduleIndex = parseInt(insert.substring(dailyScheduleLength));
        $(".container .row").eq(scheduleIndex).find("textarea").val(rendertext[insert]);
    }
}
renderMessage();

