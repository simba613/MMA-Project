$(document).ready(function(){
    $('#nav_change').click(function(){
        var preHeadline = $('.preheadline');
        preHeadline.remove();
        var new_preHeadline = '<div class="preheadline">10<span style="text-transform:lowercase;">th</span> - 12<span  style="text-transform:lowercase;">th</span> November 2016</div><h1>Mastermind Accelerator <br>3-Day London Workshop</h1>        <p><a class="btn btn-primary btn-lg" href="https://property.infusionsoft.com/app/orderForms/MMA-London" role="button">Book Your Place</a></p>';
        $('.jambroton .container').append(new_preHeadline);
        alert("wefwef");
    });
});