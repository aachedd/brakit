/*---Hiding the two popups until the page loads---*/
$(".modal").hide();
$('.popup').hide();

/*---start of modal and popup function---*/
$(document).ready(function(){
    $(function(){
        var overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        $(".modal").show();

        $(".confirm").click(function(){
            $(".popup").show();
            $(".modal").hide();
            event.preventDefault();
            $("#defaultOpen").trigger('click');
        });

        $(".close").click(function(){
            var user = $("#userPopup").val();

            if($.trim($("#userPopup").val()) == '') {
                alert("Please enter your name in the box below");
                event.preventDefault();
            }
            else {
                /*Update this line with name of brakit*/
                $.trim($("#username").text(user + "'s New Girl Bracket"));
                $("#username").css("font-weight","Bold");
                $("#userDivusername").val(user);
                $('.popup').hide();
                overlay.appendTo(document.body).remove();
                return false;
            }
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
    /*Update this line with new column numbers from spreadsheet*/
    var seed = data.values[i]['43'];
    var descrip = data.values[i]['44'];
    $("#seed" + i).val(i+'. ' + seed);
    document.getElementById("seed" + i).title = descrip;
                         }
});
/*---end logic to grab data from google sheet---*/

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 