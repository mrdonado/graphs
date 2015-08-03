/*global $*/
var chart = $(".example-container svg");
$(window).on("resize", function() {
    var targetWidth = chart.parent().width();
    chart.each(function(e){
        this.attr("width", targetWidth);
        this.attr("height", targetWidth / chart.data('aspect'));
    });
});