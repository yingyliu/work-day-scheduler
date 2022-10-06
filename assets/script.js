// alert('i am connected')
let currentTime = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentTime);


$(".container .line").each(function (index, element) {

    // var timeInTheElement = $(element).text();
    // // the hour w/ the post-fix
    // var currentHour = moment().format("ha").toUpperCase()

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

// look in local storage
// tyr to grabe the key
// if they give you the vale(text)
// put that text int the coreesponding text area


// grab each save button
// listen for a click
// -- when the click happens
// -- -- find out which button was clicked
// -- -- grabe the textbox that matches that button
// -- -- get the test out of that textbox
// -- -- stor that text in local storage 
// -- -- localStorage.setItem('key', text)

