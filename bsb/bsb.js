/*---Hiding the two popups until the page loads---*/
$(".modal").hide();

/*---start of modal and popup function---*/
$(document).ready(function(){
    $(function(){
        var overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        $(".modal").show();

        $(".confirm").click(function(){
            $(".modal").hide();
            event.preventDefault();
            $("#defaultOpen").trigger('click');
            /*Work on this to try to style the block*/
            $("#defaultOpen").css("background-color", "#00B2CA");
            overlay.appendTo(document.body).remove();
            return false;
        });
    });
});
/*---end of popup function---*/


/*---start logic to grab data from google sheet---*/
var gak = config.gak;
var gsid = config.gsid;

$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/" + gsid + "/values/Main?alt=json&key=" + gak, function (data) {
  var i;
  for (i = 1; i < 65; i++) {
    var seed = data.values[i]['5'];
    var descrip = data.values[i]['6'];
    $("#seed" + i).val(i+'. ' + seed);
    document.getElementById("seed" + i).title = descrip;
                         }
});
/*---end logic to grab data from google sheet---*/
