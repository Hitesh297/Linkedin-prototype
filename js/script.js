$("#aboutux-button").click(function () {
    $("#aboutux-button").hide();
    $("#aboutux-text-content").slideDown("slow", function () {

        // Animation complete.
    });
});

$("#left-option-about").click(function () {
    $("#aboutux-button").hide();
    $("#aboutux-text-content").slideToggle("slow", function () {

        // Animation complete.
    });
});

$("#see-more-skills").click(function () {
    $("#see-more-skills").hide();
    $("#more-skills").slideDown("slow", function () {
    $("#skill-filters").show();
        // Animation complete.
    });
});

$("#salary-button").click(function () {
    $("#chart").hide();
    $("#salary-button").hide();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#salary-main").offset().top
    }, 1000);
    $("#chart-indetail").slideDown("slow", function () {

        // Animation complete.
    });
});

$("#skill-figma").click(function () {
    $('#skill-figma').addClass('figma-selected');
    $("#figma-details").slideDown("slow", function () {
        $("#recommend-skills").show();
        // Animation complete.
    });
});


$("#left-option-skills").click(function () {
    $('#see-more-skills').hide();
    $("#more-skills").slideToggle("slow", function () {
    });
});

$("#left-option-salary").click(function () {
    $("#chart").hide();
    $("#salary-button").hide();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#salary-main").offset().top
    }, 1000);
    $("#chart-indetail").slideDown("slow", function () {
    });
});


$("#see-more-careerpath").click(function () {
    $("#careerpath-chart").css("height", "330px");
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#career-path-main").offset().top
    }, 1000);
});

$("#left-option-careerpath").click(function () {
    $("#careerpath-chart").css("height", "330px");
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#career-path-main").offset().top
    }, 1000);
});

$("#recommend-skills").click(function () {
    $("#recommend-skills").css("color","white");
    $("#recommend-skills").css("background","#0a66c2");
    $("#recommend-msg").text("Thank you for your recommendation");    

});

$("#junior").click(function () {
    $("#more-details-junior").fadeIn();
    $("#more-details-junior").css("display","flex");
    $("#junior").hide();
    $("#midelevel").addClass("greyscale");
    $("#senior").addClass("greyscale"); 

});

$("#left-option-mentors").click(function (e) { 
    ShowMentors();
});

$("#left-option-learning").click(function (e) { 
    ShowLearning();
});

$("#mentor-tab").click(function (e) { 
    ShowMentors();
});
$("#learning-tab").click(function (e) { 
    ShowLearning();
});

function ShowMentors() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mentor-learning").offset().top
    }, 1000);
    $("#mentors-container").fadeIn();
    $("#learning-container").hide();
    $("#learning-tab").addClass("grey-text");
    $("#mentor-tab").removeClass("grey-text");
    $("#learning-mentor-more").text("Show more mentors");
}

function ShowLearning() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mentor-learning").offset().top
    }, 1000);
    $("#learning-container").fadeIn();
    $("#mentors-container").hide();
    $("#mentor-tab").addClass("grey-text");
    $("#learning-tab").removeClass("grey-text");
    $("#learning-mentor-more").text("Show more learning resources");
}

$("#left-option-jobs").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#job-search").offset().top
    }, 1000);
});

$("#left-option-skills").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills-main").offset().top
    }, 1000);
});

$("#left-option-community").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#community-section").offset().top
    }, 1000);
});