function changed() {
    var mainHeight = $(window).height();
    var windowHeight = $(document.body).outerHeight(true);
    if (mainHeight < windowHeight){
        $("#normalFoot").removeClass("footerNotFull");
    }
    else{
        $("#normalFoot").addClass("footerNotFull");
    }
}

// document.body.clientHeight
// document.documentElement.scrollHeight