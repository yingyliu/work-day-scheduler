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



