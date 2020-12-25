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
        });

        $(".close").click(function(){
            var user = $("#userPopup").val();

            if($.trim($("#userPopup").val()) == '') {
                alert("Please enter your name in the box below");
                event.preventDefault();
            }
            else {
                $.trim($("#username").text(user + "'s BSB Greatest Hits Bracket"));
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
$.getJSON("https://spreadsheets.google.com/feeds/list/1YxRFsYqGt9OPMxXi5x2vECE3D9kQyF82wQIBW2jAZJc/1/public/full?alt=json", function (data) {

  var i;
  for (i = 0; i < 65; i++) {
    var seed = data.feed.entry[i]['gsx$bsb']['$t'];
    var descrip = data.feed.entry[i]['gsx$bsblinks']['$t'];
    $("#seed" + i).val(i+1+'. ' + seed);
    document.getElementById("seed" + i).title = descrip;
                         }
});
/*---end logic to grab data from google sheet---*/

/*---start logic for table functionality---*/
//  first round northwest matchup
function northWestSeed1() 
{
    var inputVal = document.getElementById("seed0").value;
    var inputTitle = document.getElementById("seed0").title;
    document.getElementById("northWestRd32a" ).title = inputTitle;       
    document.getElementById("northWestRd32a").value= inputVal;
    $("#northWestRd32a").val(inputVal);
    $("#seed0").css("background-color", "#72B01D");
    $("#seed63").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed0").mouseover(function() {
        var inputTitle = document.getElementById("seed0").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed0").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed16() 
{
    var inputVal = document.getElementById("seed63").value;
    var inputTitle = document.getElementById("seed63").title;
    document.getElementById("northWestRd32a" ).title = inputTitle;  
    document.getElementById("northWestRd32a").value= inputVal;
    $("#northWestRd32a").val(inputVal);
    $("#seed63").css("background-color", "#72B01D");
    $("#seed0").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed63").mouseover(function() {
        var inputTitle = document.getElementById("seed63").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed63").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed8() 
{
    var inputVal = document.getElementById("seed31").value;
    var inputTitle = document.getElementById("seed31").title;
    document.getElementById("northWestRd32b" ).title = inputTitle; 
    document.getElementById("northWestRd32b").value= inputVal;
    $("#northWestRd32b").val(inputVal);
    $("#seed31").css("background-color", "#72B01D");
    $("#seed32").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed31").mouseover(function() {
        var inputTitle = document.getElementById("seed31").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed31").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed9() 
{
    var inputVal = document.getElementById("seed32").value;
    var inputTitle = document.getElementById("seed32").title;
    document.getElementById("northWestRd32b" ).title = inputTitle; 
    document.getElementById("northWestRd32b").value= inputVal;
    $("#northWestRd32b").val(inputVal);
    $("#seed32").css("background-color", "#72B01D");
    $("#seed31").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed32").mouseover(function() {
        var inputTitle = document.getElementById("seed32").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed32").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed5() 
{
    var inputVal = document.getElementById("seed16").value;
    var inputTitle = document.getElementById("seed16").title;
    document.getElementById("northWestRd32c" ).title = inputTitle; 
    document.getElementById("northWestRd32c").value= inputVal;
    $("#northWestRd32c").val(inputVal);
    $("#seed16").css("background-color", "#72B01D");
    $("#seed47").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed16").mouseover(function() {
        var inputTitle = document.getElementById("seed16").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed16").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed12() 
{
    var inputVal = document.getElementById("seed47").value;
    var inputTitle = document.getElementById("seed47").title;
    document.getElementById("northWestRd32c" ).title = inputTitle; 
    document.getElementById("northWestRd32c").value= inputVal;
    $("#northWestRd32c").val(inputVal);
    $("#seed47").css("background-color", "#72B01D");
    $("#seed16").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed47").mouseover(function() {
        var inputTitle = document.getElementById("seed47").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed47").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed4() 
{
    var inputVal = document.getElementById("seed15").value;
    var inputTitle = document.getElementById("seed15").title;
    document.getElementById("northWestRd32d" ).title = inputTitle; 
    document.getElementById("northWestRd32d").value= inputVal;
    $("#northWestRd32d").val(inputVal);
    $("#seed15").css("background-color", "#72B01D");
    $("#seed48").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed15").mouseover(function() {
        var inputTitle = document.getElementById("seed15").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed15").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed13() 
{
    var inputVal = document.getElementById("seed48").value;
    var inputTitle = document.getElementById("seed48").title;
    document.getElementById("northWestRd32d" ).title = inputTitle; 
    document.getElementById("northWestRd32d").value= inputVal;
    $("#northWestRd32d").val(inputVal);
    $("#seed48").css("background-color", "#72B01D");
    $("#seed15").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed48").mouseover(function() {
        var inputTitle = document.getElementById("seed48").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed48").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed6() 
{
    var inputVal = document.getElementById("seed23").value;
    var inputTitle = document.getElementById("seed23").title;
    document.getElementById("northWestRd32e" ).title = inputTitle;
    document.getElementById("northWestRd32e").value= inputVal;
    $("#northWestRd32e").val(inputVal);
    $("#seed23").css("background-color", "#72B01D");
    $("#seed40").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed23").mouseover(function() {
        var inputTitle = document.getElementById("seed23").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed23").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed11() 
{
    var inputVal = document.getElementById("seed40").value;
    var inputTitle = document.getElementById("seed40").title;
    document.getElementById("northWestRd32e" ).title = inputTitle;
    document.getElementById("northWestRd32e").value= inputVal;
    $("#northWestRd32e").val(inputVal);
    $("#seed40").css("background-color", "#72B01D");
    $("#seed23").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed40").mouseover(function() {
        var inputTitle = document.getElementById("seed40").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed40").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed3() 
{
    var inputVal = document.getElementById("seed8").value;
    var inputTitle = document.getElementById("seed8").title;
    document.getElementById("northWestRd32f" ).title = inputTitle;
    document.getElementById("northWestRd32f").value= inputVal;
    $("#northWestRd32f").val(inputVal);
    $("#seed8").css("background-color", "#72B01D");
    $("#seed55").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed8").mouseover(function() {
        var inputTitle = document.getElementById("seed8").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed8").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed14() 
{
    var inputVal = document.getElementById("seed55").value;
    var inputTitle = document.getElementById("seed55").title;
    document.getElementById("northWestRd32f" ).title = inputTitle;
    document.getElementById("northWestRd32f").value= inputVal;
    $("#northWestRd32f").val(inputVal);
    $("#seed55").css("background-color", "#72B01D");
    $("#seed8").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed55").mouseover(function() {
        var inputTitle = document.getElementById("seed55").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed55").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed7() 
{
    var inputVal = document.getElementById("seed24").value;
    var inputTitle = document.getElementById("seed24").title;
    document.getElementById("northWestRd32g" ).title = inputTitle;
    document.getElementById("northWestRd32g").value= inputVal;
    $("#northWestRd32g").val(inputVal);
    $("#seed24").css("background-color", "#72B01D");
    $("#seed39").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed24").mouseover(function() {
        var inputTitle = document.getElementById("seed24").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed24").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed10() 
{
    var inputVal = document.getElementById("seed39").value;
    var inputTitle = document.getElementById("seed39").title;
    document.getElementById("northWestRd32g" ).title = inputTitle;
    document.getElementById("northWestRd32g").value= inputVal;
    $("#northWestRd32g").val(inputVal);
    $("#seed39").css("background-color", "#72B01D");
    $("#seed24").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed39").mouseover(function() {
        var inputTitle = document.getElementById("seed39").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed39").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed2() 
{
    var inputVal = document.getElementById("seed7").value;
    var inputTitle = document.getElementById("seed7").title;
    document.getElementById("northWestRd32h" ).title = inputTitle;
    document.getElementById("northWestRd32h").value= inputVal;
    $("#northWestRd32h").val(inputVal);
    $("#seed7").css("background-color", "#72B01D");
    $("#seed56").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed7").mouseover(function() {
        var inputTitle = document.getElementById("seed7").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed7").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestSeed15() 
{
    var inputVal = document.getElementById("seed56").value;
    var inputTitle = document.getElementById("seed56").title;
    document.getElementById("northWestRd32h" ).title = inputTitle;
    document.getElementById("northWestRd32h").value= inputVal;
    $("#northWestRd32h").val(inputVal);
    $("#seed56").css("background-color", "#72B01D");
    $("#seed7").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed56").mouseover(function() {
        var inputTitle = document.getElementById("seed56").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed56").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });



// second round northwest matchup
function northWestRd32a() 
{
    var inputVal = document.getElementById("northWestRd32a").value;
    var inputTitle = document.getElementById("northWestRd32a").title;
    document.getElementById("northWestRd16a" ).title = inputTitle;
    document.getElementById("northWestRd16a").value= inputVal;
    $("#northWestRd16a").val(inputVal);
    $("#northWestRd32a").css("background-color", "#72B01D");
    $("#northWestRd32b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32a").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32a").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32a").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32b() 
{
    var inputVal = document.getElementById("northWestRd32b").value;
    var inputTitle = document.getElementById("northWestRd32b").title;
    document.getElementById("northWestRd16a" ).title = inputTitle;
    document.getElementById("northWestRd16a").value= inputVal;
    $("#northWestRd16a").val(inputVal);
    $("#northWestRd32b").css("background-color", "#72B01D");
    $("#northWestRd32a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32b").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32b").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32b").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32c() 
{
    var inputVal = document.getElementById("northWestRd32c").value;
    var inputTitle = document.getElementById("northWestRd32c").title;
    document.getElementById("northWestRd16b" ).title = inputTitle;
    document.getElementById("northWestRd16b").value= inputVal;
    $("#northWestRd16b").val(inputVal);
    $("#northWestRd32c").css("background-color", "#72B01D");
    $("#northWestRd32d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32c").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32c").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32c").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32d() 
{
    var inputVal = document.getElementById("northWestRd32d").value;
    var inputTitle = document.getElementById("northWestRd32d").title;
    document.getElementById("northWestRd16b" ).title = inputTitle;
    document.getElementById("northWestRd16b").value= inputVal;
    $("#northWestRd16b").val(inputVal);
    $("#northWestRd32d").css("background-color", "#72B01D");
    $("#northWestRd32c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32d").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32d").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32d").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32e() 
{
    var inputVal = document.getElementById("northWestRd32e").value;
    var inputTitle = document.getElementById("northWestRd32e").title;
    document.getElementById("northWestRd16c" ).title = inputTitle;
    document.getElementById("northWestRd16c").value= inputVal;
    $("#northWestRd16c").val(inputVal);
    $("#northWestRd32e").css("background-color", "#72B01D");
    $("#northWestRd32f").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32e").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32e").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32e").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32f() 
{
    var inputVal = document.getElementById("northWestRd32f").value;
    var inputTitle = document.getElementById("northWestRd32f").title;
    document.getElementById("northWestRd16c" ).title = inputTitle;
    document.getElementById("northWestRd16c").value= inputVal;
    $("#northWestRd16c").val(inputVal);
    $("#northWestRd32f").css("background-color", "#72B01D");
    $("#northWestRd32e").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32f").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32f").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32f").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32g() 
{
    var inputVal = document.getElementById("northWestRd32g").value;
    var inputTitle = document.getElementById("northWestRd32g").title;
    document.getElementById("northWestRd16d" ).title = inputTitle;
    document.getElementById("northWestRd16d").value= inputVal;
    $("#northWestRd16d").val(inputVal);
    $("#northWestRd32g").css("background-color", "#72B01D");
    $("#northWestRd32h").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32g").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32g").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32g").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd32h() 
{
    var inputVal = document.getElementById("northWestRd32h").value;
    var inputTitle = document.getElementById("northWestRd32h").title;
    document.getElementById("northWestRd16d" ).title = inputTitle;
    document.getElementById("northWestRd16d").value= inputVal;
    $("#northWestRd16d").val(inputVal);
    $("#northWestRd32h").css("background-color", "#72B01D");
    $("#northWestRd32g").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd32h").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd32h").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd32h").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


// third round northwest matchup
function northWestRd16a() 
{
    var inputVal = document.getElementById("northWestRd16a").value;
    var inputTitle = document.getElementById("northWestRd16a").title;
    document.getElementById("northWestRd8a" ).title = inputTitle;
    document.getElementById("northWestRd8a").value= inputVal;
    $("#northWestRd8a").val(inputVal);
    $("#northWestRd16a").css("background-color", "#72B01D");
    $("#northWestRd16b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd16a").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd16a").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd16a").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd16b() 
{
    var inputVal = document.getElementById("northWestRd16b").value;
    var inputTitle = document.getElementById("northWestRd16b").title;
    document.getElementById("northWestRd8a" ).title = inputTitle;
    document.getElementById("northWestRd8a").value= inputVal;
    $("#northWestRd8a").val(inputVal);
    $("#northWestRd16b").css("background-color", "#72B01D");
    $("#northWestRd16a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd16b").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd16b").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd16b").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd16c() 
{
    var inputVal = document.getElementById("northWestRd16c").value;
    var inputTitle = document.getElementById("northWestRd16c").title;
    document.getElementById("northWestRd8b" ).title = inputTitle;
    document.getElementById("northWestRd8b").value= inputVal;
    $("#northWestRd8b").val(inputVal);
    $("#northWestRd16c").css("background-color", "#72B01D");
    $("#northWestRd16d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd16c").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd16c").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd16c").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


function northWestRd16d() 
{
    var inputVal = document.getElementById("northWestRd16d").value;
    var inputTitle = document.getElementById("northWestRd16d").title;
    document.getElementById("northWestRd8b" ).title = inputTitle;
    document.getElementById("northWestRd8b").value= inputVal;
    $("#northWestRd8b").val(inputVal);
    $("#northWestRd16d").css("background-color", "#72B01D");
    $("#northWestRd16c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northWestRd16d").mouseover(function() {
        var inputTitle = document.getElementById("northWestRd16d").title;
        $('#northWestPic').attr('src', inputTitle).show();
    }); 
        $("#northWestRd16d").mouseout(function(){
        $("#northWestPic").hide();
    }); 
  });


// fourth round northwest matchup
function northWestRd8a() 
{
    var inputVal = document.getElementById("northWestRd8a").value;
    var inputTitle = document.getElementById("northWestRd8a").title;
    document.getElementById("northWestRd4" ).title = inputTitle;
    document.getElementById("northWestRd4").value= inputVal;
    $("#northWestRd4").val(inputVal);
    $("#northWestRd8a").css("background-color", "#72B01D");
    $("#northWestRd8b").css("background-color", "silver");
}
function northWestRd8b() 
{
    var inputVal = document.getElementById("northWestRd8b").value;
    var inputTitle = document.getElementById("northWestRd8b").title;
    document.getElementById("northWestRd4" ).title = inputTitle;
    document.getElementById("northWestRd4").value= inputVal;
    $("#northWestRd4").val(inputVal);
    $("#northWestRd8b").css("background-color", "#72B01D");
    $("#northWestRd8a").css("background-color", "silver");
}


// first round northeast matchup
function northEastSeed1() 
{
    var inputVal = document.getElementById("seed1").value;
    var inputTitle = document.getElementById("seed1").title;
    document.getElementById("northEastRd32a" ).title = inputTitle;
    document.getElementById("northEastRd32a").value= inputVal;
    $("#northEastRd32a").val(inputVal);
    $("#seed1").css("background-color", "#72B01D");
    $("#seed62").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed1").mouseover(function() {
        var inputTitle = document.getElementById("seed1").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed1").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed16() 
{
    var inputVal = document.getElementById("seed62").value;
    var inputTitle = document.getElementById("seed62").title;
    document.getElementById("northEastRd32a" ).title = inputTitle;
    document.getElementById("northEastRd32a").value= inputVal;
    $("#northEastRd32a").val(inputVal);
    $("#seed62").css("background-color", "#72B01D");
    $("#seed1").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed62").mouseover(function() {
        var inputTitle = document.getElementById("seed62").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed62").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed8() 
{
    var inputVal = document.getElementById("seed30").value;
    var inputTitle = document.getElementById("seed30").title;
    document.getElementById("northEastRd32b" ).title = inputTitle;
    document.getElementById("northEastRd32b").value= inputVal;
    $("#northEastRd32b").val(inputVal);
    $("#seed30").css("background-color", "#72B01D");
    $("#seed33").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed30").mouseover(function() {
        var inputTitle = document.getElementById("seed30").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed30").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed9() 
{
    var inputVal = document.getElementById("seed33").value;
    var inputTitle = document.getElementById("seed33").title;
    document.getElementById("northEastRd32b" ).title = inputTitle;
    document.getElementById("northEastRd32b").value= inputVal;
    $("#northEastRd32b").val(inputVal);
    $("#seed33").css("background-color", "#72B01D");
    $("#seed30").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed33").mouseover(function() {
        var inputTitle = document.getElementById("seed33").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed33").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed5() 
{
    var inputVal = document.getElementById("seed17").value;
    var inputTitle = document.getElementById("seed17").title;
    document.getElementById("northEastRd32c" ).title = inputTitle;
    document.getElementById("northEastRd32c").value= inputVal;
    $("#northEastRd32c").val(inputVal);
    $("#seed17").css("background-color", "#72B01D");
    $("#seed46").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed17").mouseover(function() {
        var inputTitle = document.getElementById("seed17").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed17").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed12() 
{
    var inputVal = document.getElementById("seed46").value;
    var inputTitle = document.getElementById("seed46").title;
    document.getElementById("northEastRd32c" ).title = inputTitle;
    document.getElementById("northEastRd32c").value= inputVal;
    $("#northEastRd32c").val(inputVal);
    $("#seed46").css("background-color", "#72B01D");
    $("#seed17").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed46").mouseover(function() {
        var inputTitle = document.getElementById("seed46").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed46").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed4() 
{
    var inputVal = document.getElementById("seed14").value;
    var inputTitle = document.getElementById("seed14").title;
    document.getElementById("northEastRd32d" ).title = inputTitle;
    document.getElementById("northEastRd32d").value= inputVal;
    $("#northEastRd32d").val(inputVal);
    $("#seed14").css("background-color", "#72B01D");
    $("#seed49").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed14").mouseover(function() {
        var inputTitle = document.getElementById("seed14").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed14").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed13() 
{
    var inputVal = document.getElementById("seed49").value;
    var inputTitle = document.getElementById("seed49").title;
    document.getElementById("northEastRd32d" ).title = inputTitle;
    document.getElementById("northEastRd32d").value= inputVal;
    $("#northEastRd32d").val(inputVal);
    $("#seed49").css("background-color", "#72B01D");
    $("#seed14").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed49").mouseover(function() {
        var inputTitle = document.getElementById("seed49").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed49").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed6() 
{
    var inputVal = document.getElementById("seed22").value;
    var inputTitle = document.getElementById("seed22").title;
    document.getElementById("northEastRd32e" ).title = inputTitle;
    document.getElementById("northEastRd32e").value= inputVal;
    $("#northEastRd32e").val(inputVal);
    $("#seed22").css("background-color", "#72B01D");
    $("#seed41").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed22").mouseover(function() {
        var inputTitle = document.getElementById("seed22").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed22").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed11() 
{
    var inputVal = document.getElementById("seed41").value;
    var inputTitle = document.getElementById("seed41").title;
    document.getElementById("northEastRd32e" ).title = inputTitle;
    document.getElementById("northEastRd32e").value= inputVal;
    $("#northEastRd32e").val(inputVal);
    $("#seed41").css("background-color", "#72B01D");
    $("#seed22").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed41").mouseover(function() {
        var inputTitle = document.getElementById("seed41").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed41").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed3() 
{
    var inputVal = document.getElementById("seed9").value;
    var inputTitle = document.getElementById("seed9").title;
    document.getElementById("northEastRd32f" ).title = inputTitle;
    document.getElementById("northEastRd32f").value= inputVal;
    $("#northEastRd32f").val(inputVal);
    $("#seed9").css("background-color", "#72B01D");
    $("#seed54").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed9").mouseover(function() {
        var inputTitle = document.getElementById("seed9").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed9").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed14() 
{
    var inputVal = document.getElementById("seed54").value;
    var inputTitle = document.getElementById("seed54").title;
    document.getElementById("northEastRd32f" ).title = inputTitle;
    document.getElementById("northEastRd32f").value= inputVal;
    $("#northEastRd32f").val(inputVal);
    $("#seed54").css("background-color", "#72B01D");
    $("#seed9").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed54").mouseover(function() {
        var inputTitle = document.getElementById("seed54").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed54").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed7() 
{
    var inputVal = document.getElementById("seed25").value;
    var inputTitle = document.getElementById("seed25").title;
    document.getElementById("northEastRd32g" ).title = inputTitle;
    document.getElementById("northEastRd32g").value= inputVal;
    $("#northEastRd32g").val(inputVal);
    $("#seed25").css("background-color", "#72B01D");
    $("#seed38").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed25").mouseover(function() {
        var inputTitle = document.getElementById("seed25").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed25").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed10() 
{
    var inputVal = document.getElementById("seed38").value;
    var inputTitle = document.getElementById("seed38").title;
    document.getElementById("northEastRd32g" ).title = inputTitle;
    document.getElementById("northEastRd32g").value= inputVal;
    $("#northEastRd32g").val(inputVal);
    $("#seed38").css("background-color", "#72B01D");
    $("#seed25").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed38").mouseover(function() {
        var inputTitle = document.getElementById("seed38").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed38").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed2() 
{
    var inputVal = document.getElementById("seed6").value;
    var inputTitle = document.getElementById("seed6").title;
    document.getElementById("northEastRd32h" ).title = inputTitle;
    document.getElementById("northEastRd32h").value= inputVal;
    $("#northEastRd32h").val(inputVal);
    $("#seed6").css("background-color", "#72B01D");
    $("#seed57").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed6").mouseover(function() {
        var inputTitle = document.getElementById("seed6").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed6").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastSeed15() 
{
    var inputVal = document.getElementById("seed57").value;
    var inputTitle = document.getElementById("seed57").title;
    document.getElementById("northEastRd32h" ).title = inputTitle;
    document.getElementById("northEastRd32h").value= inputVal;
    $("#northEastRd32h").val(inputVal);
    $("#seed57").css("background-color", "#72B01D");
    $("#seed6").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed57").mouseover(function() {
        var inputTitle = document.getElementById("seed57").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed57").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


//  second round northeast matchup
function northEastRd32a() 
{
    var inputVal = document.getElementById("northEastRd32a").value;
    var inputTitle = document.getElementById("northEastRd32a").title;
    document.getElementById("northEastRd16a" ).title = inputTitle;
    document.getElementById("northEastRd16a").value= inputVal;
    $("#northEastRd16a").val(inputVal);
    $("#northEastRd32a").css("background-color", "#72B01D");
    $("#northEastRd32b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32a").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32a").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32a").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32b() 
{
    var inputVal = document.getElementById("northEastRd32b").value;
    var inputTitle = document.getElementById("northEastRd32b").title;
    document.getElementById("northEastRd16a" ).title = inputTitle;
    document.getElementById("northEastRd16a").value= inputVal;
    $("#northEastRd16a").val(inputVal);
    $("#northEastRd32b").css("background-color", "#72B01D");
    $("#northEastRd32a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32b").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32b").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32b").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32c() 
{
    var inputVal = document.getElementById("northEastRd32c").value;
    var inputTitle = document.getElementById("northEastRd32c").title;
    document.getElementById("northEastRd16b" ).title = inputTitle;
    document.getElementById("northEastRd16b").value= inputVal;
    $("#northEastRd16b").val(inputVal);
    $("#northEastRd32c").css("background-color", "#72B01D");
    $("#northEastRd32d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32c").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32c").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32c").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32d() 
{
    var inputVal = document.getElementById("northEastRd32d").value;
    var inputTitle = document.getElementById("northEastRd32d").title;
    document.getElementById("northEastRd16b" ).title = inputTitle;
    document.getElementById("northEastRd16b").value= inputVal;
    $("#northEastRd16b").val(inputVal);
    $("#northEastRd32d").css("background-color", "#72B01D");
    $("#northEastRd32c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32d").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32d").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32d").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32e() 
{
    var inputVal = document.getElementById("northEastRd32e").value;
    var inputTitle = document.getElementById("northEastRd32e").title;
    document.getElementById("northEastRd16c" ).title = inputTitle;
    document.getElementById("northEastRd16c").value= inputVal;
    $("#northEastRd16c").val(inputVal);
    $("#northEastRd32e").css("background-color", "#72B01D");
    $("#northEastRd32f").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32e").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32e").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32e").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32f() 
{
    var inputVal = document.getElementById("northEastRd32f").value;
    var inputTitle = document.getElementById("northEastRd32f").title;
    document.getElementById("northEastRd16c" ).title = inputTitle;
    document.getElementById("northEastRd16c").value= inputVal;
    $("#northEastRd16c").val(inputVal);
    $("#northEastRd32f").css("background-color", "#72B01D");
    $("#northEastRd32e").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32f").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32f").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32f").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32g() 
{
    var inputVal = document.getElementById("northEastRd32g").value;
    var inputTitle = document.getElementById("northEastRd32g").title;
    document.getElementById("northEastRd16d" ).title = inputTitle;
    document.getElementById("northEastRd16d").value= inputVal;
    $("#northEastRd16d").val(inputVal);
    $("#northEastRd32g").css("background-color", "#72B01D");
    $("#northEastRd32h").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32g").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32g").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32g").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd32h() 
{
    var inputVal = document.getElementById("northEastRd32h").value;
    var inputTitle = document.getElementById("northEastRd32h").title;
    document.getElementById("northEastRd16d" ).title = inputTitle;
    document.getElementById("northEastRd16d").value= inputVal;
    $("#northEastRd16d").val(inputVal);
    $("#northEastRd32h").css("background-color", "#72B01D");
    $("#northEastRd32g").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd32h").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd32h").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd32h").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


// third round northeast matchup
function northEastRd16a() 
{
    var inputVal = document.getElementById("northEastRd16a").value;
    var inputTitle = document.getElementById("northEastRd16a").title;
    document.getElementById("northEastRd8a" ).title = inputTitle;
    document.getElementById("northEastRd8a").value= inputVal;
    $("#northEastRd8a").val(inputVal);
    $("#northEastRd16a").css("background-color", "#72B01D");
    $("#northEastRd16b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd16a").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd16a").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd16a").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd16b() 
{
    var inputVal = document.getElementById("northEastRd16b").value;
    var inputTitle = document.getElementById("northEastRd16b").title;
    document.getElementById("northEastRd8a" ).title = inputTitle;
    document.getElementById("northEastRd8a").value= inputVal;
    $("#northEastRd8a").val(inputVal);
    $("#northEastRd16b").css("background-color", "#72B01D");
    $("#northEastRd16a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd16b").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd16b").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd16b").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd16c() 
{
    var inputVal = document.getElementById("northEastRd16c").value;
    var inputTitle = document.getElementById("northEastRd16c").title;
    document.getElementById("northEastRd8b" ).title = inputTitle;
    document.getElementById("northEastRd8b").value= inputVal;
    $("#northEastRd8b").val(inputVal);
    $("#northEastRd16c").css("background-color", "#72B01D");
    $("#northEastRd16d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd16c").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd16c").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd16c").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


function northEastRd16d() 
{
    var inputVal = document.getElementById("northEastRd16d").value;
    var inputTitle = document.getElementById("northEastRd16d").title;
    document.getElementById("northEastRd8b" ).title = inputTitle;
    document.getElementById("northEastRd8b").value= inputVal;
    $("#northEastRd8b").val(inputVal);
    $("#northEastRd16d").css("background-color", "#72B01D");
    $("#northEastRd16c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#northEastRd16d").mouseover(function() {
        var inputTitle = document.getElementById("northEastRd16d").title;
        $('#northEastPic').attr('src', inputTitle).show();
    }); 
        $("#northEastRd16d").mouseout(function(){
        $("#northEastPic").hide();
    }); 
  });


// fourth round northeast matchup
function northEastRd8a() 
{
    var inputVal = document.getElementById("northEastRd8a").value;
    var inputTitle = document.getElementById("northEastRd8a").title;
    document.getElementById("northEastRd4" ).title = inputTitle;
    document.getElementById("northEastRd4").value= inputVal;
    $("#northEastRd4").val(inputVal);
    $("#northEastRd8a").css("background-color", "#72B01D");
    $("#northEastRd8b").css("background-color", "silver");
}
function northEastRd8b() 
{
    var inputVal = document.getElementById("northEastRd8b").value;
    var inputTitle = document.getElementById("northEastRd8b").title;
    document.getElementById("northEastRd4" ).title = inputTitle;
    document.getElementById("northEastRd4").value= inputVal;
    $("#northEastRd4").val(inputVal);
    $("#northEastRd8b").css("background-color", "#72B01D");
    $("#northEastRd8a").css("background-color", "silver");
}


//  first round southwest matchup
function southWestSeed1() 
{
    var inputVal = document.getElementById("seed3").value;
    var inputTitle = document.getElementById("seed3").title;
    document.getElementById("southWestRd32a" ).title = inputTitle;
    document.getElementById("southWestRd32a").value= inputVal;
    $("#southWestRd32a").val(inputVal);
    $("#seed3").css("background-color", "#72B01D");
    $("#seed60").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed3").mouseover(function() {
        var inputTitle = document.getElementById("seed3").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed3").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed16() 
{
    var inputVal = document.getElementById("seed60").value;
    var inputTitle = document.getElementById("seed60").title;
    document.getElementById("southWestRd32a" ).title = inputTitle;
    document.getElementById("southWestRd32a").value= inputVal;
    $("#southWestRd32a").val(inputVal);
    $("#seed60").css("background-color", "#72B01D");
    $("#seed3").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed60").mouseover(function() {
        var inputTitle = document.getElementById("seed60").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed60").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed8() 
{
    var inputVal = document.getElementById("seed28").value;
    var inputTitle = document.getElementById("seed28").title;
    document.getElementById("southWestRd32b" ).title = inputTitle;
    document.getElementById("southWestRd32b").value= inputVal;
    $("#southWestRd32b").val(inputVal);
    $("#seed28").css("background-color", "#72B01D");
    $("#seed35").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed28").mouseover(function() {
        var inputTitle = document.getElementById("seed28").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed28").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed9() 
{
    var inputVal = document.getElementById("seed35").value;
    var inputTitle = document.getElementById("seed35").title;
    document.getElementById("southWestRd32b" ).title = inputTitle;
    document.getElementById("southWestRd32b").value= inputVal;
    $("#southWestRd32b").val(inputVal);
    $("#seed35").css("background-color", "#72B01D");
    $("#seed28").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed35").mouseover(function() {
        var inputTitle = document.getElementById("seed35").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed35").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed5() 
{
    var inputVal = document.getElementById("seed19").value;
    var inputTitle = document.getElementById("seed19").title;
    document.getElementById("southWestRd32c" ).title = inputTitle;
    document.getElementById("southWestRd32c").value= inputVal;
    $("#southWestRd32c").val(inputVal);
    $("#seed19").css("background-color", "#72B01D");
    $("#seed44").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed19").mouseover(function() {
        var inputTitle = document.getElementById("seed19").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed19").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed12() 
{
    var inputVal = document.getElementById("seed44").value;
    var inputTitle = document.getElementById("seed44").title;
    document.getElementById("southWestRd32c" ).title = inputTitle;
    document.getElementById("southWestRd32c").value= inputVal;
    $("#southWestRd32c").val(inputVal);
    $("#seed44").css("background-color", "#72B01D");
    $("#seed19").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed44").mouseover(function() {
        var inputTitle = document.getElementById("seed44").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed44").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed4() 
{
    var inputVal = document.getElementById("seed12").value;
    var inputTitle = document.getElementById("seed12").title;
    document.getElementById("southWestRd32d" ).title = inputTitle;
    document.getElementById("southWestRd32d").value= inputVal;
    $("#southWestRd32d").val(inputVal);
    $("#seed12").css("background-color", "#72B01D");
    $("#seed51").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed12").mouseover(function() {
        var inputTitle = document.getElementById("seed12").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed12").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed13() 
{
    var inputVal = document.getElementById("seed51").value;
    var inputTitle = document.getElementById("seed51").title;
    document.getElementById("southWestRd32d" ).title = inputTitle;
    document.getElementById("southWestRd32d").value= inputVal;
    $("#southWestRd32d").val(inputVal);
    $("#seed51").css("background-color", "#72B01D");
    $("#seed12").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed51").mouseover(function() {
        var inputTitle = document.getElementById("seed51").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed51").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed6() 
{
    var inputVal = document.getElementById("seed20").value;
    var inputTitle = document.getElementById("seed20").title;
    document.getElementById("southWestRd32e" ).title = inputTitle;
    document.getElementById("southWestRd32e").value= inputVal;
    $("#southWestRd32e").val(inputVal);
    $("#seed20").css("background-color", "#72B01D");
    $("#seed43").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed20").mouseover(function() {
        var inputTitle = document.getElementById("seed20").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed20").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed11() 
{
    var inputVal = document.getElementById("seed43").value;
    var inputTitle = document.getElementById("seed43").title;
    document.getElementById("southWestRd32e" ).title = inputTitle;
    document.getElementById("southWestRd32e").value= inputVal;
    $("#southWestRd32e").val(inputVal);
    $("#seed43").css("background-color", "#72B01D");
    $("#seed20").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed43").mouseover(function() {
        var inputTitle = document.getElementById("seed43").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed43").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed3() 
{
    var inputVal = document.getElementById("seed11").value;
    var inputTitle = document.getElementById("seed11").title;
    document.getElementById("southWestRd32f" ).title = inputTitle;
    document.getElementById("southWestRd32f").value= inputVal;
    $("#southWestRd32f").val(inputVal);
    $("#seed11").css("background-color", "#72B01D");
    $("#seed52").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed11").mouseover(function() {
        var inputTitle = document.getElementById("seed11").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed11").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed14() 
{
    var inputVal = document.getElementById("seed52").value;
    var inputTitle = document.getElementById("seed52").title;
    document.getElementById("southWestRd32f" ).title = inputTitle;
    document.getElementById("southWestRd32f").value= inputVal;
    $("#southWestRd32f").val(inputVal);
    $("#seed52").css("background-color", "#72B01D");
    $("#seed11").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed52").mouseover(function() {
        var inputTitle = document.getElementById("seed52").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed52").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed7() 
{
    var inputVal = document.getElementById("seed27").value;
    var inputTitle = document.getElementById("seed27").title;
    document.getElementById("southWestRd32g" ).title = inputTitle;
    document.getElementById("southWestRd32g").value= inputVal;
    $("#southWestRd32g").val(inputVal);
    $("#seed27").css("background-color", "#72B01D");
    $("#seed36").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed27").mouseover(function() {
        var inputTitle = document.getElementById("seed27").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed27").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed10() 
{
    var inputVal = document.getElementById("seed36").value;
    var inputTitle = document.getElementById("seed36").title;
    document.getElementById("southWestRd32g" ).title = inputTitle;
    document.getElementById("southWestRd32g").value= inputVal;
    $("#southWestRd32g").val(inputVal);
    $("#seed36").css("background-color", "#72B01D");
    $("#seed27").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed36").mouseover(function() {
        var inputTitle = document.getElementById("seed36").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed36").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed2() 
{
    var inputVal = document.getElementById("seed4").value;
    var inputTitle = document.getElementById("seed4").title;
    document.getElementById("southWestRd32h" ).title = inputTitle;
    document.getElementById("southWestRd32h").value= inputVal;
    $("#southWestRd32h").val(inputVal);
    $("#seed4").css("background-color", "#72B01D");
    $("#seed59").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed4").mouseover(function() {
        var inputTitle = document.getElementById("seed4").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed4").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestSeed15() 
{
    var inputVal = document.getElementById("seed59").value;
    var inputTitle = document.getElementById("seed59").title;
    document.getElementById("southWestRd32h" ).title = inputTitle;
    document.getElementById("southWestRd32h").value= inputVal;
    $("#southWestRd32h").val(inputVal);
    $("#seed59").css("background-color", "#72B01D");
    $("#seed4").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed59").mouseover(function() {
        var inputTitle = document.getElementById("seed59").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#seed59").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


// second round southwest matchup
function southWestRd32a() 
{
    var inputVal = document.getElementById("southWestRd32a").value;
    var inputTitle = document.getElementById("southWestRd32a").title;
    document.getElementById("southWestRd16a" ).title = inputTitle;
    document.getElementById("southWestRd16a").value= inputVal;
    $("#southWestRd16a").val(inputVal);
    $("#southWestRd32a").css("background-color", "#72B01D");
    $("#southWestRd32b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32a").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32a").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32a").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32b() 
{
    var inputVal = document.getElementById("southWestRd32b").value;
    var inputTitle = document.getElementById("southWestRd32b").title;
    document.getElementById("southWestRd16a" ).title = inputTitle;
    document.getElementById("southWestRd16a").value= inputVal;
    $("#southWestRd16a").val(inputVal);
    $("#southWestRd32b").css("background-color", "#72B01D");
    $("#southWestRd32a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32b").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32b").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32b").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32c() 
{
    var inputVal = document.getElementById("southWestRd32c").value;
    var inputTitle = document.getElementById("southWestRd32c").title;
    document.getElementById("southWestRd16b" ).title = inputTitle;
    document.getElementById("southWestRd16b").value= inputVal;
    $("#southWestRd16b").val(inputVal);
    $("#southWestRd32c").css("background-color", "#72B01D");
    $("#southWestRd32d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32c").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32c").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32c").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32d() 
{
    var inputVal = document.getElementById("southWestRd32d").value;
    var inputTitle = document.getElementById("southWestRd32d").title;
    document.getElementById("southWestRd16b" ).title = inputTitle;
    document.getElementById("southWestRd16b").value= inputVal;
    $("#southWestRd16b").val(inputVal);
    $("#southWestRd32d").css("background-color", "#72B01D");
    $("#southWestRd32c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32d").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32d").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32d").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32e() 
{
    var inputVal = document.getElementById("southWestRd32e").value;
    var inputTitle = document.getElementById("southWestRd32e").title;
    document.getElementById("southWestRd16c" ).title = inputTitle;
    document.getElementById("southWestRd16c").value= inputVal;
    $("#southWestRd16c").val(inputVal);
    $("#southWestRd32e").css("background-color", "#72B01D");
    $("#southWestRd32f").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32e").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32e").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32e").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32f() 
{
    var inputVal = document.getElementById("southWestRd32f").value;
    var inputTitle = document.getElementById("southWestRd32f").title;
    document.getElementById("southWestRd16c" ).title = inputTitle;
    document.getElementById("southWestRd16c").value= inputVal;
    $("#southWestRd16c").val(inputVal);
    $("#southWestRd32f").css("background-color", "#72B01D");
    $("#southWestRd32e").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32f").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32f").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32f").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32g() 
{
    var inputVal = document.getElementById("southWestRd32g").value;
    var inputTitle = document.getElementById("southWestRd32g").title;
    document.getElementById("southWestRd16d" ).title = inputTitle;
    document.getElementById("southWestRd16d").value= inputVal;
    $("#southWestRd16d").val(inputVal);
    $("#southWestRd32g").css("background-color", "#72B01D");
    $("#southWestRd32h").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32g").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32g").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32g").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd32h() 
{
    var inputVal = document.getElementById("southWestRd32h").value;
    var inputTitle = document.getElementById("southWestRd32h").title;
    document.getElementById("southWestRd16d" ).title = inputTitle;
    document.getElementById("southWestRd16d").value= inputVal;
    $("#southWestRd16d").val(inputVal);
    $("#southWestRd32h").css("background-color", "#72B01D");
    $("#southWestRd32g").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd32h").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd32h").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd32h").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


// third round southwest matchup
function southWestRd16a() 
{
    var inputVal = document.getElementById("southWestRd16a").value;
    var inputTitle = document.getElementById("southWestRd16a").title;
    document.getElementById("southWestRd8a" ).title = inputTitle;
    document.getElementById("southWestRd8a").value= inputVal;
    $("#southWestRd8a").val(inputVal);
    $("#southWestRd16a").css("background-color", "#72B01D");
    $("#southWestRd16b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd16a").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd16a").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd16a").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd16b() 
{
    var inputVal = document.getElementById("southWestRd16b").value;
    var inputTitle = document.getElementById("southWestRd16b").title;
    document.getElementById("southWestRd8a" ).title = inputTitle;
    document.getElementById("southWestRd8a").value= inputVal;
    $("#southWestRd8a").val(inputVal);
    $("#southWestRd16b").css("background-color", "#72B01D");
    $("#southWestRd16a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd16b").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd16b").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd16b").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd16c() 
{
    var inputVal = document.getElementById("southWestRd16c").value;
    var inputTitle = document.getElementById("southWestRd16c").title;
    document.getElementById("southWestRd8b" ).title = inputTitle;
    document.getElementById("southWestRd8b").value= inputVal;
    $("#southWestRd8b").val(inputVal);
    $("#southWestRd16c").css("background-color", "#72B01D");
    $("#southWestRd16d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd16c").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd16c").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd16c").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


function southWestRd16d() 
{
    var inputVal = document.getElementById("southWestRd16d").value;
    var inputTitle = document.getElementById("southWestRd16d").title;
    document.getElementById("southWestRd8b" ).title = inputTitle;
    document.getElementById("southWestRd8b").value= inputVal;
    $("#southWestRd8b").val(inputVal);
    $("#southWestRd16d").css("background-color", "#72B01D");
    $("#southWestRd16c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southWestRd16d").mouseover(function() {
        var inputTitle = document.getElementById("southWestRd16d").title;
        $('#southWestPic').attr('src', inputTitle).show();
    }); 
        $("#southWestRd16d").mouseout(function(){
        $("#southWestPic").hide();
    }); 
  });


// fourth round southwest matchup
function southWestRd8a() 
{
    var inputVal = document.getElementById("southWestRd8a").value;
    var inputTitle = document.getElementById("southWestRd8a").title;
    document.getElementById("southWestRd4" ).title = inputTitle;
    document.getElementById("southWestRd4").value= inputVal;
    $("#southWestRd4").val(inputVal);
    $("#southWestRd8a").css("background-color", "#72B01D");
    $("#southWestRd8b").css("background-color", "silver");
}

function southWestRd8b() 
{
    var inputVal = document.getElementById("southWestRd8b").value;
    var inputTitle = document.getElementById("southWestRd8b").title;
    document.getElementById("southWestRd4" ).title = inputTitle;
    document.getElementById("southWestRd4").value= inputVal;
    $("#southWestRd4").val(inputVal);
    $("#southWestRd8b").css("background-color", "#72B01D");
    $("#southWestRd8a").css("background-color", "silver");
}


// first round southeast matchup
function southEastSeed1() 
{
    var inputVal = document.getElementById("seed2").value;
    var inputTitle = document.getElementById("seed2").title;
    document.getElementById("southEastRd32a" ).title = inputTitle;
    document.getElementById("southEastRd32a").value= inputVal;
    $("#southEastRd32a").val(inputVal);
    $("#seed2").css("background-color", "#72B01D");
    $("#seed61").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed2").mouseover(function() {
        var inputTitle = document.getElementById("seed2").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed2").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed16() 
{
    var inputVal = document.getElementById("seed61").value;
    var inputTitle = document.getElementById("seed61").title;
    document.getElementById("southEastRd32a" ).title = inputTitle;
    document.getElementById("southEastRd32a").value= inputVal;
    $("#southEastRd32a").val(inputVal);
    $("#seed61").css("background-color", "#72B01D");
    $("#seed2").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed61").mouseover(function() {
        var inputTitle = document.getElementById("seed61").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed61").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed8() 
{
    var inputVal = document.getElementById("seed29").value;
    var inputTitle = document.getElementById("seed29").title;
    document.getElementById("southEastRd32b" ).title = inputTitle;
    document.getElementById("southEastRd32b").value= inputVal;
    $("#southEastRd32b").val(inputVal);
    $("#seed29").css("background-color", "#72B01D");
    $("#seed34").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed29").mouseover(function() {
        var inputTitle = document.getElementById("seed29").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed29").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed9() 
{
    var inputVal = document.getElementById("seed34").value;
    var inputTitle = document.getElementById("seed34").title;
    document.getElementById("southEastRd32b" ).title = inputTitle;
    document.getElementById("southEastRd32b").value= inputVal;
    $("#southEastRd32b").val(inputVal);
    $("#seed34").css("background-color", "#72B01D");
    $("#seed29").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed34").mouseover(function() {
        var inputTitle = document.getElementById("seed34").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed34").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed5() 
{
    var inputVal = document.getElementById("seed18").value;
    var inputTitle = document.getElementById("seed18").title;
    document.getElementById("southEastRd32c" ).title = inputTitle;
    document.getElementById("southEastRd32c").value= inputVal;
    $("#southEastRd32c").val(inputVal);
    $("#seed18").css("background-color", "#72B01D");
    $("#seed45").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed18").mouseover(function() {
        var inputTitle = document.getElementById("seed18").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed18").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed12() 
{
    var inputVal = document.getElementById("seed45").value;
    var inputTitle = document.getElementById("seed45").title;
    document.getElementById("southEastRd32c" ).title = inputTitle;
    document.getElementById("southEastRd32c").value= inputVal;
    $("#southEastRd32c").val(inputVal);
    $("#seed45").css("background-color", "#72B01D");
    $("#seed18").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed45").mouseover(function() {
        var inputTitle = document.getElementById("seed45").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed45").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed4() 
{
    var inputVal = document.getElementById("seed13").value;
    var inputTitle = document.getElementById("seed13").title;
    document.getElementById("southEastRd32d" ).title = inputTitle;
    document.getElementById("southEastRd32d").value= inputVal;
    $("#southEastRd32d").val(inputVal);
    $("#seed13").css("background-color", "#72B01D");
    $("#seed50").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed13").mouseover(function() {
        var inputTitle = document.getElementById("seed13").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed13").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed13() 
{
    var inputVal = document.getElementById("seed50").value;
    var inputTitle = document.getElementById("seed50").title;
    document.getElementById("southEastRd32d" ).title = inputTitle;
    document.getElementById("southEastRd32d").value= inputVal;
    $("#southEastRd32d").val(inputVal);
    $("#seed50").css("background-color", "#72B01D");
    $("#seed13").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed50").mouseover(function() {
        var inputTitle = document.getElementById("seed50").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed50").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed6() 
{
    var inputVal = document.getElementById("seed21").value;
    var inputTitle = document.getElementById("seed21").title;
    document.getElementById("southEastRd32e" ).title = inputTitle;
    document.getElementById("southEastRd32e").value= inputVal;
    $("#southEastRd32e").val(inputVal);
    $("#seed21").css("background-color", "#72B01D");
    $("#seed42").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed21").mouseover(function() {
        var inputTitle = document.getElementById("seed21").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed21").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed11() 
{
    var inputVal = document.getElementById("seed42").value;
    var inputTitle = document.getElementById("seed42").title;
    document.getElementById("southEastRd32e" ).title = inputTitle;
    document.getElementById("southEastRd32e").value= inputVal;
    $("#southEastRd32e").val(inputVal);
    $("#seed42").css("background-color", "#72B01D");
    $("#seed21").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed42").mouseover(function() {
        var inputTitle = document.getElementById("seed42").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed42").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed3() 
{
    var inputVal = document.getElementById("seed10").value;
    var inputTitle = document.getElementById("seed10").title;
    document.getElementById("southEastRd32f" ).title = inputTitle;
    document.getElementById("southEastRd32f").value= inputVal;
    $("#southEastRd32f").val(inputVal);
    $("#seed10").css("background-color", "#72B01D");
    $("#seed53").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed10").mouseover(function() {
        var inputTitle = document.getElementById("seed10").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed10").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed14() 
{
    var inputVal = document.getElementById("seed53").value;
    var inputTitle = document.getElementById("seed53").title;
    document.getElementById("southEastRd32f" ).title = inputTitle;
    document.getElementById("southEastRd32f").value= inputVal;
    $("#southEastRd32f").val(inputVal);
    $("#seed53").css("background-color", "#72B01D");
    $("#seed10").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed53").mouseover(function() {
        var inputTitle = document.getElementById("seed53").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed53").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed7() 
{
    var inputVal = document.getElementById("seed26").value;
    var inputTitle = document.getElementById("seed26").title;
    document.getElementById("southEastRd32g" ).title = inputTitle;
    document.getElementById("southEastRd32g").value= inputVal;
    $("#southEastRd32g").val(inputVal);
    $("#seed26").css("background-color", "#72B01D");
    $("#seed37").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed26").mouseover(function() {
        var inputTitle = document.getElementById("seed26").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed26").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed10() 
{
    var inputVal = document.getElementById("seed37").value;
    var inputTitle = document.getElementById("seed37").title;
    document.getElementById("southEastRd32g" ).title = inputTitle;
    document.getElementById("southEastRd32g").value= inputVal;
    $("#southEastRd32g").val(inputVal);
    $("#seed37").css("background-color", "#72B01D");
    $("#seed26").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed37").mouseover(function() {
        var inputTitle = document.getElementById("seed37").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed37").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed2() 
{
    var inputVal = document.getElementById("seed5").value;
    var inputTitle = document.getElementById("seed5").title;
    document.getElementById("southEastRd32h" ).title = inputTitle;
    document.getElementById("southEastRd32h").value= inputVal;
    $("#southEastRd32h").val(inputVal);
    $("#seed5").css("background-color", "#72B01D");
    $("#seed58").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed5").mouseover(function() {
        var inputTitle = document.getElementById("seed5").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed5").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastSeed15() 
{
    var inputVal = document.getElementById("seed58").value;
    var inputTitle = document.getElementById("seed58").title;
    document.getElementById("southEastRd32h" ).title = inputTitle;
    document.getElementById("southEastRd32h").value= inputVal;
    $("#southEastRd32h").val(inputVal);
    $("#seed58").css("background-color", "#72B01D");
    $("#seed5").css("background-color", "silver");
}

$(document).ready(function(){
        $("#seed58").mouseover(function() {
        var inputTitle = document.getElementById("seed58").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#seed58").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


//  second round southeast matchup
function southEastRd32a() 
{
    var inputVal = document.getElementById("southEastRd32a").value;
    var inputTitle = document.getElementById("southEastRd32a").title;
    document.getElementById("southEastRd16a" ).title = inputTitle;
    document.getElementById("southEastRd16a").value= inputVal;
    $("#southEastRd16a").val(inputVal);
    $("#southEastRd32a").css("background-color", "#72B01D");
    $("#southEastRd32b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32a").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32a").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32a").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32b() 
{
    var inputVal = document.getElementById("southEastRd32b").value;
    var inputTitle = document.getElementById("southEastRd32b").title;
    document.getElementById("southEastRd16a" ).title = inputTitle;
    document.getElementById("southEastRd16a").value= inputVal;
    $("#southEastRd16a").val(inputVal);
    $("#southEastRd32b").css("background-color", "#72B01D");
    $("#southEastRd32a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32b").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32b").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32b").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32c() 
{
    var inputVal = document.getElementById("southEastRd32c").value;
    var inputTitle = document.getElementById("southEastRd32c").title;
    document.getElementById("southEastRd16b" ).title = inputTitle;
    document.getElementById("southEastRd16b").value= inputVal;
    $("#southEastRd16b").val(inputVal);
    $("#southEastRd32c").css("background-color", "#72B01D");
    $("#southEastRd32d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32c").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32c").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32c").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32d() 
{
    var inputVal = document.getElementById("southEastRd32d").value;
    var inputTitle = document.getElementById("southEastRd32d").title;
    document.getElementById("southEastRd16b" ).title = inputTitle;
    document.getElementById("southEastRd16b").value= inputVal;
    $("#southEastRd16b").val(inputVal);
    $("#southEastRd32d").css("background-color", "#72B01D");
    $("#southEastRd32c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32d").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32d").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32d").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32e() 
{
    var inputVal = document.getElementById("southEastRd32e").value;
    var inputTitle = document.getElementById("southEastRd32e").title;
    document.getElementById("southEastRd16c" ).title = inputTitle;
    document.getElementById("southEastRd16c").value= inputVal;
    $("#southEastRd16c").val(inputVal);
    $("#southEastRd32e").css("background-color", "#72B01D");
    $("#southEastRd32f").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32e").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32e").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32e").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32f() 
{
    var inputVal = document.getElementById("southEastRd32f").value;
    var inputTitle = document.getElementById("southEastRd32f").title;
    document.getElementById("southEastRd16c" ).title = inputTitle;
    document.getElementById("southEastRd16c").value= inputVal;
    $("#southEastRd16c").val(inputVal);
    $("#southEastRd32f").css("background-color", "#72B01D");
    $("#southEastRd32e").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32f").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32f").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32f").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32g() 
{
    var inputVal = document.getElementById("southEastRd32g").value;
    var inputTitle = document.getElementById("southEastRd32g").title;
    document.getElementById("southEastRd16d" ).title = inputTitle;
    document.getElementById("southEastRd16d").value= inputVal;
    $("#southEastRd16d").val(inputVal);
    $("#southEastRd32g").css("background-color", "#72B01D");
    $("#southEastRd32h").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32g").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32g").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32g").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd32h() 
{
    var inputVal = document.getElementById("southEastRd32h").value;
    var inputTitle = document.getElementById("southEastRd32h").title;
    document.getElementById("southEastRd16d" ).title = inputTitle;
    document.getElementById("southEastRd16d").value= inputVal;
    $("#southEastRd16d").val(inputVal);
    $("#southEastRd32h").css("background-color", "#72B01D");
    $("#southEastRd32g").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd32h").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd32h").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd32h").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


// third round southeast matchup
function southEastRd16a() 
{
    var inputVal = document.getElementById("southEastRd16a").value;
    var inputTitle = document.getElementById("southEastRd16a").title;
    document.getElementById("southEastRd8a" ).title = inputTitle;
    document.getElementById("southEastRd8a").value= inputVal;
    $("#southEastRd8a").val(inputVal);
    $("#southEastRd16a").css("background-color", "#72B01D");
    $("#southEastRd16b").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd16a").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd16a").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd16a").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd16b() 
{
    var inputVal = document.getElementById("southEastRd16b").value;
    var inputTitle = document.getElementById("southEastRd16b").title;
    document.getElementById("southEastRd8a" ).title = inputTitle;
    document.getElementById("southEastRd8a").value= inputVal;
    $("#southEastRd8a").val(inputVal);
    $("#southEastRd16b").css("background-color", "#72B01D");
    $("#southEastRd16a").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd16b").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd16b").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd16b").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd16c() 
{
    var inputVal = document.getElementById("southEastRd16c").value;
    var inputTitle = document.getElementById("southEastRd16c").title;
    document.getElementById("southEastRd8b" ).title = inputTitle;
    document.getElementById("southEastRd8b").value= inputVal;
    $("#southEastRd8b").val(inputVal);
    $("#southEastRd16c").css("background-color", "#72B01D");
    $("#southEastRd16d").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd16c").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd16c").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd16c").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


function southEastRd16d() 
{
    var inputVal = document.getElementById("southEastRd16d").value;
    var inputTitle = document.getElementById("southEastRd16d").title;
    document.getElementById("southEastRd8b" ).title = inputTitle;
    document.getElementById("southEastRd8b").value= inputVal;
    $("#southEastRd8b").val(inputVal);
    $("#southEastRd16d").css("background-color", "#72B01D");
    $("#southEastRd16c").css("background-color", "silver");
}

$(document).ready(function(){
        $("#southEastRd16d").mouseover(function() {
        var inputTitle = document.getElementById("southEastRd16d").title;
        $('#southEastPic').attr('src', inputTitle).show();
    }); 
        $("#southEastRd16d").mouseout(function(){
        $("#southEastPic").hide();
    }); 
  });


// fourth round southeast matchup
function southEastRd8a() 
{
    var inputVal = document.getElementById("southEastRd8a").value;
    var inputTitle = document.getElementById("southEastRd8a").title;
    document.getElementById("southEastRd4" ).title = inputTitle;
    document.getElementById("southEastRd4").value= inputVal;
    $("#southEastRd4").val(inputVal);
    $("#southEastRd8a").css("background-color", "#72B01D");
    $("#southEastRd8b").css("background-color", "silver");
}

function southEastRd8b() 
{
    var inputVal = document.getElementById("southEastRd8b").value;
    var inputTitle = document.getElementById("southEastRd8b").title;
    document.getElementById("southEastRd4" ).title = inputTitle;
    document.getElementById("southEastRd4").value= inputVal;
    $("#southEastRd4").val(inputVal);
    $("#southEastRd8b").css("background-color", "#72B01D");
    $("#southEastRd8a").css("background-color", "silver");
}


//final round function
function northWestRd4() 
{
    var inputVal = document.getElementById("northWestRd4").value;
    var inputTitle = document.getElementById("northWestRd4").title;
    document.getElementById("westRd2" ).title = inputTitle;
    document.getElementById("westRd2").value= inputVal;
    $("#westRd2").val(inputVal);
    $("#northWestRd4").css("background-color", "#72B01D");
    $("#southWestRd4").css("background-color", "silver");
}

function southWestRd4() 
{
    var inputVal = document.getElementById("southWestRd4").value;
    var inputTitle = document.getElementById("southWestRd4").title;
    document.getElementById("westRd2" ).title = inputTitle;
    document.getElementById("westRd2").value= inputVal;
    $("#westRd2").val(inputVal);
    $("#southWestRd4").css("background-color", "#72B01D");
    $("#northWestRd4").css("background-color", "silver");
}

function northEastRd4() 
{
    var inputVal = document.getElementById("northEastRd4").value;
    var inputTitle = document.getElementById("northEastRd4").title;
    document.getElementById("eastRd2" ).title = inputTitle;
    document.getElementById("eastRd2").value= inputVal;
    $("#eastRd2").val(inputVal);
    $("#northEastRd4").css("background-color", "#72B01D");
    $("#southEastRd4").css("background-color", "silver");
}

function southEastRd4() 
{
    var inputVal = document.getElementById("southEastRd4").value;
    var inputTitle = document.getElementById("southEastRd4").title;
    document.getElementById("eastRd2" ).title = inputTitle;
    document.getElementById("eastRd2").value= inputVal;
    $("#eastRd2").val(inputVal);
    $("#southEastRd4").css("background-color", "#72B01D");
    $("#northEastRd4").css("background-color", "silver");
}


//winner function
function westRd2() 
{
    var inputVal = document.getElementById("westRd2").value;
    var inputTitle = document.getElementById("westRd2").title;
    document.getElementById("winner" ).title = inputTitle;
    document.getElementById("winner").value= inputVal;
    $("#winner").val(inputVal);
    $("#westRd2").css("background-color", "#72B01D");
    $("#eastRd2").css("background-color", "silver");
    $("#winner").css("background-color", "#72B01D");
}

function eastRd2() 
{
    var inputVal = document.getElementById("eastRd2").value;
    var inputTitle = document.getElementById("eastRd2").title;
    document.getElementById("winner" ).title = inputTitle;
    document.getElementById("winner").value= inputVal;
    $("#winner").val(inputVal);
    $("#eastRd2").css("background-color", "#72B01D");
    $("#westRd2").css("background-color", "silver");
    $("#winner").css("background-color", "#72B01D");
}

function winner() 
{
    var winner = $("#winner").val();
    alert('WINNNER IS '+ winner + '!!!!!!!')
}
/*---end logic for table functionality---*/