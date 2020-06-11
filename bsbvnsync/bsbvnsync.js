    $.getJSON("https://spreadsheets.google.com/feeds/list/1YxRFsYqGt9OPMxXi5x2vECE3D9kQyF82wQIBW2jAZJc/1/public/full?alt=json", function (data) {
      var sheetData = data.feed.entry;


      var i;
      for (i = 0; i < 65; i++) {
        var seed = data.feed.entry[i]['gsx$bsbnsync']['$t'];
        /*var descrip = data.feed.entry[i]['gsx$desc']['$t'];*/
        $("#seed" + i).val(i+1+'. ' + seed);
/*        document.getElementById("seed" + i).title = descrip;
  */                             }

    });

//  first round northwest matchup
    function northWestSeed1() 
    {
        var inputVal = document.getElementById("seed0").value;
        var inputTitle = document.getElementById("seed0").title;
        document.getElementById("northWestRd32a" ).title = inputTitle;       
        document.getElementById("northWestRd32a").value= inputVal;
        $("#northWestRd32a").val(inputVal);
        $("#seed0").css("background-color", "seagreen");
        $("#seed63").css("background-color", "silver");
    }
    function northWestSeed16() 
    {
        var inputVal = document.getElementById("seed63").value;
        var inputTitle = document.getElementById("seed63").title;
        document.getElementById("northWestRd32a" ).title = inputTitle;  
        document.getElementById("northWestRd32a").value= inputVal;
        $("#northWestRd32a").val(inputVal);
        $("#seed63").css("background-color", "seagreen");
        $("#seed0").css("background-color", "silver");
    }
    function northWestSeed8() 
    {
        var inputVal = document.getElementById("seed31").value;
        var inputTitle = document.getElementById("seed31").title;
        document.getElementById("northWestRd32b" ).title = inputTitle; 
        document.getElementById("northWestRd32b").value= inputVal;
        $("#northWestRd32b").val(inputVal);
        $("#seed31").css("background-color", "seagreen");
        $("#seed32").css("background-color", "silver");
    }
    function northWestSeed9() 
    {
        var inputVal = document.getElementById("seed32").value;
        var inputTitle = document.getElementById("seed32").title;
        document.getElementById("northWestRd32b" ).title = inputTitle; 
        document.getElementById("northWestRd32b").value= inputVal;
        $("#northWestRd32b").val(inputVal);
        $("#seed32").css("background-color", "seagreen");
        $("#seed31").css("background-color", "silver");
    }
    function northWestSeed5() 
    {
        var inputVal = document.getElementById("seed16").value;
        var inputTitle = document.getElementById("seed16").title;
        document.getElementById("northWestRd32c" ).title = inputTitle; 
        document.getElementById("northWestRd32c").value= inputVal;
        $("#northWestRd32c").val(inputVal);
        $("#seed16").css("background-color", "seagreen");
        $("#seed47").css("background-color", "silver");
    }
    function northWestSeed12() 
    {
        var inputVal = document.getElementById("seed47").value;
        var inputTitle = document.getElementById("seed47").title;
        document.getElementById("northWestRd32c" ).title = inputTitle; 
        document.getElementById("northWestRd32c").value= inputVal;
        $("#northWestRd32c").val(inputVal);
        $("#seed47").css("background-color", "seagreen");
        $("#seed16").css("background-color", "silver");
    }
    function northWestSeed4() 
    {
        var inputVal = document.getElementById("seed15").value;
        var inputTitle = document.getElementById("seed15").title;
        document.getElementById("northWestRd32d" ).title = inputTitle; 
        document.getElementById("northWestRd32d").value= inputVal;
        $("#northWestRd32d").val(inputVal);
        $("#seed15").css("background-color", "seagreen");
        $("#seed48").css("background-color", "silver");
    }
    function northWestSeed13() 
    {
        var inputVal = document.getElementById("seed48").value;
        var inputTitle = document.getElementById("seed48").title;
        document.getElementById("northWestRd32d" ).title = inputTitle; 
        document.getElementById("northWestRd32d").value= inputVal;
        $("#northWestRd32d").val(inputVal);
        $("#seed48").css("background-color", "seagreen");
        $("#seed15").css("background-color", "silver");
    }
    function northWestSeed6() 
    {
        var inputVal = document.getElementById("seed23").value;
        var inputTitle = document.getElementById("seed23").title;
        document.getElementById("northWestRd32e" ).title = inputTitle;
        document.getElementById("northWestRd32e").value= inputVal;
        $("#northWestRd32e").val(inputVal);
        $("#seed23").css("background-color", "seagreen");
        $("#seed40").css("background-color", "silver");
    }
    function northWestSeed11() 
    {
        var inputVal = document.getElementById("seed40").value;
        var inputTitle = document.getElementById("seed40").title;
        document.getElementById("northWestRd32e" ).title = inputTitle;
        document.getElementById("northWestRd32e").value= inputVal;
        $("#northWestRd32e").val(inputVal);
        $("#seed40").css("background-color", "seagreen");
        $("#seed23").css("background-color", "silver");
    }
    function northWestSeed3() 
    {
        var inputVal = document.getElementById("seed8").value;
        var inputTitle = document.getElementById("seed8").title;
        document.getElementById("northWestRd32f" ).title = inputTitle;
        document.getElementById("northWestRd32f").value= inputVal;
        $("#northWestRd32f").val(inputVal);
        $("#seed8").css("background-color", "seagreen");
        $("#seed55").css("background-color", "silver");
    }
    function northWestSeed14() 
    {
        var inputVal = document.getElementById("seed55").value;
        var inputTitle = document.getElementById("seed55").title;
        document.getElementById("northWestRd32f" ).title = inputTitle;
        document.getElementById("northWestRd32f").value= inputVal;
        $("#northWestRd32f").val(inputVal);
        $("#seed55").css("background-color", "seagreen");
        $("#seed8").css("background-color", "silver");
    }
    function northWestSeed7() 
    {
        var inputVal = document.getElementById("seed24").value;
        var inputTitle = document.getElementById("seed24").title;
        document.getElementById("northWestRd32g" ).title = inputTitle;
        document.getElementById("northWestRd32g").value= inputVal;
        $("#northWestRd32g").val(inputVal);
        $("#seed24").css("background-color", "seagreen");
        $("#seed39").css("background-color", "silver");
    }
    function northWestSeed10() 
    {
        var inputVal = document.getElementById("seed39").value;
        var inputTitle = document.getElementById("seed39").title;
        document.getElementById("northWestRd32g" ).title = inputTitle;
        document.getElementById("northWestRd32g").value= inputVal;
        $("#northWestRd32g").val(inputVal);
        $("#seed39").css("background-color", "seagreen");
        $("#seed24").css("background-color", "silver");
    }
    function northWestSeed2() 
    {
        var inputVal = document.getElementById("seed7").value;
        var inputTitle = document.getElementById("seed7").title;
        document.getElementById("northWestRd32h" ).title = inputTitle;
        document.getElementById("northWestRd32h").value= inputVal;
        $("#northWestRd32h").val(inputVal);
        $("#seed7").css("background-color", "seagreen");
        $("#seed56").css("background-color", "silver");
    }
    function northWestSeed15() 
    {
        var inputVal = document.getElementById("seed56").value;
        var inputTitle = document.getElementById("seed56").title;
        document.getElementById("northWestRd32h" ).title = inputTitle;
        document.getElementById("northWestRd32h").value= inputVal;
        $("#northWestRd32h").val(inputVal);
        $("#seed56").css("background-color", "seagreen");
        $("#seed7").css("background-color", "silver");
    }

// second round northwest matchup
    function northWestRd32a() 
    {
        var inputVal = document.getElementById("northWestRd32a").value;
        var inputTitle = document.getElementById("northWestRd32a").title;
        document.getElementById("northWestRd16a" ).title = inputTitle;
        document.getElementById("northWestRd16a").value= inputVal;
        $("#northWestRd16a").val(inputVal);
        $("#northWestRd32a").css("background-color", "seagreen");
        $("#northWestRd32b").css("background-color", "silver");
    }
    function northWestRd32b() 
    {
        var inputVal = document.getElementById("northWestRd32b").value;
        var inputTitle = document.getElementById("northWestRd32b").title;
        document.getElementById("northWestRd16a" ).title = inputTitle;
        document.getElementById("northWestRd16a").value= inputVal;
        $("#northWestRd16a").val(inputVal);
        $("#northWestRd32b").css("background-color", "seagreen");
        $("#northWestRd32a").css("background-color", "silver");
    }

    function northWestRd32c() 
    {
        var inputVal = document.getElementById("northWestRd32c").value;
        var inputTitle = document.getElementById("northWestRd32c").title;
        document.getElementById("northWestRd16b" ).title = inputTitle;
        document.getElementById("northWestRd16b").value= inputVal;
        $("#northWestRd16b").val(inputVal);
        $("#northWestRd32c").css("background-color", "seagreen");
        $("#northWestRd32d").css("background-color", "silver");
    }
    function northWestRd32d() 
    {
        var inputVal = document.getElementById("northWestRd32d").value;
        var inputTitle = document.getElementById("northWestRd32d").title;
        document.getElementById("northWestRd16b" ).title = inputTitle;
        document.getElementById("northWestRd16b").value= inputVal;
        $("#northWestRd16b").val(inputVal);
        $("#northWestRd32d").css("background-color", "seagreen");
        $("#northWestRd32c").css("background-color", "silver");
    }
    function northWestRd32e() 
    {
        var inputVal = document.getElementById("northWestRd32e").value;
        var inputTitle = document.getElementById("northWestRd32e").title;
        document.getElementById("northWestRd16c" ).title = inputTitle;
        document.getElementById("northWestRd16c").value= inputVal;
        $("#northWestRd16c").val(inputVal);
        $("#northWestRd32e").css("background-color", "seagreen");
        $("#northWestRd32f").css("background-color", "silver");
    }
    function northWestRd32f() 
    {
        var inputVal = document.getElementById("northWestRd32f").value;
        var inputTitle = document.getElementById("northWestRd32f").title;
        document.getElementById("northWestRd16c" ).title = inputTitle;
        document.getElementById("northWestRd16c").value= inputVal;
        $("#northWestRd16c").val(inputVal);
        $("#northWestRd32f").css("background-color", "seagreen");
        $("#northWestRd32e").css("background-color", "silver");
    }

    function northWestRd32g() 
    {
        var inputVal = document.getElementById("northWestRd32g").value;
        var inputTitle = document.getElementById("northWestRd32g").title;
        document.getElementById("northWestRd16d" ).title = inputTitle;
        document.getElementById("northWestRd16d").value= inputVal;
        $("#northWestRd16d").val(inputVal);
        $("#northWestRd32g").css("background-color", "seagreen");
        $("#northWestRd32h").css("background-color", "silver");
    }
    function northWestRd32h() 
    {
        var inputVal = document.getElementById("northWestRd32h").value;
        var inputTitle = document.getElementById("northWestRd32h").title;
        document.getElementById("northWestRd16d" ).title = inputTitle;
        document.getElementById("northWestRd16d").value= inputVal;
        $("#northWestRd16d").val(inputVal);
        $("#northWestRd32h").css("background-color", "seagreen");
        $("#northWestRd32g").css("background-color", "silver");
    }

// third round northwest matchup
    function northWestRd16a() 
    {
        var inputVal = document.getElementById("northWestRd16a").value;
        var inputTitle = document.getElementById("northWestRd16a").title;
        document.getElementById("northWestRd8a" ).title = inputTitle;
        document.getElementById("northWestRd8a").value= inputVal;
        $("#northWestRd8a").val(inputVal);
        $("#northWestRd16a").css("background-color", "seagreen");
        $("#northWestRd16b").css("background-color", "silver");
    }
    function northWestRd16b() 
    {
        var inputVal = document.getElementById("northWestRd16b").value;
        var inputTitle = document.getElementById("northWestRd16b").title;
        document.getElementById("northWestRd8a" ).title = inputTitle;
        document.getElementById("northWestRd8a").value= inputVal;
        $("#northWestRd8a").val(inputVal);
        $("#northWestRd16b").css("background-color", "seagreen");
        $("#northWestRd16a").css("background-color", "silver");
    }
    function northWestRd16c() 
    {
        var inputVal = document.getElementById("northWestRd16c").value;
        var inputTitle = document.getElementById("northWestRd16c").title;
        document.getElementById("northWestRd8b" ).title = inputTitle;
        document.getElementById("northWestRd8b").value= inputVal;
        $("#northWestRd8b").val(inputVal);
        $("#northWestRd16c").css("background-color", "seagreen");
        $("#northWestRd16d").css("background-color", "silver");
    }
    function northWestRd16d() 
    {
        var inputVal = document.getElementById("northWestRd16d").value;
        var inputTitle = document.getElementById("northWestRd16d").title;
        document.getElementById("northWestRd8b" ).title = inputTitle;
        document.getElementById("northWestRd8b").value= inputVal;
        $("#northWestRd8b").val(inputVal);
        $("#northWestRd16d").css("background-color", "seagreen");
        $("#northWestRd16c").css("background-color", "silver");
    }

// fourth round northwest matchup
    function northWestRd8a() 
    {
        var inputVal = document.getElementById("northWestRd8a").value;
        var inputTitle = document.getElementById("northWestRd8a").title;
        document.getElementById("northWestRd4" ).title = inputTitle;
        document.getElementById("northWestRd4").value= inputVal;
        $("#northWestRd4").val(inputVal);
        $("#northWestRd8a").css("background-color", "seagreen");
        $("#northWestRd8b").css("background-color", "silver");
    }
    function northWestRd8b() 
    {
        var inputVal = document.getElementById("northWestRd8b").value;
        var inputTitle = document.getElementById("northWestRd8b").title;
        document.getElementById("northWestRd4" ).title = inputTitle;
        document.getElementById("northWestRd4").value= inputVal;
        $("#northWestRd4").val(inputVal);
        $("#northWestRd8b").css("background-color", "seagreen");
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
        $("#seed1").css("background-color", "seagreen");
        $("#seed62").css("background-color", "silver");
    }
    function northEastSeed16() 
    {
        var inputVal = document.getElementById("seed62").value;
        var inputTitle = document.getElementById("seed62").title;
        document.getElementById("northEastRd32a" ).title = inputTitle;
        document.getElementById("northEastRd32a").value= inputVal;
        $("#northEastRd32a").val(inputVal);
        $("#seed62").css("background-color", "seagreen");
        $("#seed1").css("background-color", "silver");
    }
    function northEastSeed8() 
    {
        var inputVal = document.getElementById("seed30").value;
        var inputTitle = document.getElementById("seed30").title;
        document.getElementById("northEastRd32b" ).title = inputTitle;
        document.getElementById("northEastRd32b").value= inputVal;
        $("#northEastRd32b").val(inputVal);
        $("#seed30").css("background-color", "seagreen");
        $("#seed33").css("background-color", "silver");
    }
    function northEastSeed9() 
    {
        var inputVal = document.getElementById("seed33").value;
        var inputTitle = document.getElementById("seed33").title;
        document.getElementById("northEastRd32b" ).title = inputTitle;
        document.getElementById("northEastRd32b").value= inputVal;
        $("#northEastRd32b").val(inputVal);
        $("#seed33").css("background-color", "seagreen");
        $("#seed30").css("background-color", "silver");
    }
    function northEastSeed5() 
    {
        var inputVal = document.getElementById("seed17").value;
        var inputTitle = document.getElementById("seed17").title;
        document.getElementById("northEastRd32c" ).title = inputTitle;
        document.getElementById("northEastRd32c").value= inputVal;
        $("#northEastRd32c").val(inputVal);
        $("#seed17").css("background-color", "seagreen");
        $("#seed46").css("background-color", "silver");
    }
    function northEastSeed12() 
    {
        var inputVal = document.getElementById("seed46").value;
        var inputTitle = document.getElementById("seed46").title;
        document.getElementById("northEastRd32c" ).title = inputTitle;
        document.getElementById("northEastRd32c").value= inputVal;
        $("#northEastRd32c").val(inputVal);
        $("#seed46").css("background-color", "seagreen");
        $("#seed17").css("background-color", "silver");
    }
    function northEastSeed4() 
    {
        var inputVal = document.getElementById("seed14").value;
        var inputTitle = document.getElementById("seed14").title;
        document.getElementById("northEastRd32d" ).title = inputTitle;
        document.getElementById("northEastRd32d").value= inputVal;
        $("#northEastRd32d").val(inputVal);
        $("#seed14").css("background-color", "seagreen");
        $("#seed49").css("background-color", "silver");
    }
    function northEastSeed13() 
    {
        var inputVal = document.getElementById("seed49").value;
        var inputTitle = document.getElementById("seed49").title;
        document.getElementById("northEastRd32d" ).title = inputTitle;
        document.getElementById("northEastRd32d").value= inputVal;
        $("#northEastRd32d").val(inputVal);
        $("#seed49").css("background-color", "seagreen");
        $("#seed14").css("background-color", "silver");
    }
    function northEastSeed6() 
    {
        var inputVal = document.getElementById("seed22").value;
        var inputTitle = document.getElementById("seed22").title;
        document.getElementById("northEastRd32e" ).title = inputTitle;
        document.getElementById("northEastRd32e").value= inputVal;
        $("#northEastRd32e").val(inputVal);
        $("#seed22").css("background-color", "seagreen");
        $("#seed41").css("background-color", "silver");
    }
    function northEastSeed11() 
    {
        var inputVal = document.getElementById("seed41").value;
        var inputTitle = document.getElementById("seed41").title;
        document.getElementById("northEastRd32e" ).title = inputTitle;
        document.getElementById("northEastRd32e").value= inputVal;
        $("#northEastRd32e").val(inputVal);
        $("#seed41").css("background-color", "seagreen");
        $("#seed22").css("background-color", "silver");
    }
    function northEastSeed3() 
    {
        var inputVal = document.getElementById("seed9").value;
        var inputTitle = document.getElementById("seed9").title;
        document.getElementById("northEastRd32f" ).title = inputTitle;
        document.getElementById("northEastRd32f").value= inputVal;
        $("#northEastRd32f").val(inputVal);
        $("#seed9").css("background-color", "seagreen");
        $("#seed54").css("background-color", "silver");
    }
    function northEastSeed14() 
    {
        var inputVal = document.getElementById("seed54").value;
        var inputTitle = document.getElementById("seed54").title;
        document.getElementById("northEastRd32f" ).title = inputTitle;
        document.getElementById("northEastRd32f").value= inputVal;
        $("#northEastRd32f").val(inputVal);
        $("#seed54").css("background-color", "seagreen");
        $("#seed9").css("background-color", "silver");
    }
    function northEastSeed7() 
    {
        var inputVal = document.getElementById("seed25").value;
        var inputTitle = document.getElementById("seed25").title;
        document.getElementById("northEastRd32g" ).title = inputTitle;
        document.getElementById("northEastRd32g").value= inputVal;
        $("#northEastRd32g").val(inputVal);
        $("#seed25").css("background-color", "seagreen");
        $("#seed38").css("background-color", "silver");
    }
    function northEastSeed10() 
    {
        var inputVal = document.getElementById("seed38").value;
        var inputTitle = document.getElementById("seed38").title;
        document.getElementById("northEastRd32g" ).title = inputTitle;
        document.getElementById("northEastRd32g").value= inputVal;
        $("#northEastRd32g").val(inputVal);
        $("#seed38").css("background-color", "seagreen");
        $("#seed25").css("background-color", "silver");
    }
    function northEastSeed2() 
    {
        var inputVal = document.getElementById("seed6").value;
        var inputTitle = document.getElementById("seed6").title;
        document.getElementById("northEastRd32h" ).title = inputTitle;
        document.getElementById("northEastRd32h").value= inputVal;
        $("#northEastRd32h").val(inputVal);
        $("#seed6").css("background-color", "seagreen");
        $("#seed57").css("background-color", "silver");
    }
    function northEastSeed15() 
    {
        var inputVal = document.getElementById("seed57").value;
        var inputTitle = document.getElementById("seed57").title;
        document.getElementById("northEastRd32h" ).title = inputTitle;
        document.getElementById("northEastRd32h").value= inputVal;
        $("#northEastRd32h").val(inputVal);
        $("#seed57").css("background-color", "seagreen");
        $("#seed6").css("background-color", "silver");
    }

//  second round northeast matchup
    function northEastRd32a() 
    {
        var inputVal = document.getElementById("northEastRd32a").value;
        var inputTitle = document.getElementById("northEastRd32a").title;
        document.getElementById("northEastRd16a" ).title = inputTitle;
        document.getElementById("northEastRd16a").value= inputVal;
        $("#northEastRd16a").val(inputVal);
        $("#northEastRd32a").css("background-color", "seagreen");
        $("#northEastRd32b").css("background-color", "silver");
    }
    function northEastRd32b() 
    {
        var inputVal = document.getElementById("northEastRd32b").value;
        var inputTitle = document.getElementById("northEastRd32b").title;
        document.getElementById("northEastRd16a" ).title = inputTitle;
        document.getElementById("northEastRd16a").value= inputVal;
        $("#northEastRd16a").val(inputVal);
        $("#northEastRd32b").css("background-color", "seagreen");
        $("#northEastRd32a").css("background-color", "silver");
    }
    function northEastRd32c() 
    {
        var inputVal = document.getElementById("northEastRd32c").value;
        var inputTitle = document.getElementById("northEastRd32c").title;
        document.getElementById("northEastRd16b" ).title = inputTitle;
        document.getElementById("northEastRd16b").value= inputVal;
        $("#northEastRd16b").val(inputVal);
        $("#northEastRd32c").css("background-color", "seagreen");
        $("#northEastRd32d").css("background-color", "silver");
    }
    function northEastRd32d() 
    {
        var inputVal = document.getElementById("northEastRd32d").value;
        var inputTitle = document.getElementById("northEastRd32d").title;
        document.getElementById("northEastRd16b" ).title = inputTitle;
        document.getElementById("northEastRd16b").value= inputVal;
        $("#northEastRd16b").val(inputVal);
        $("#northEastRd32d").css("background-color", "seagreen");
        $("#northEastRd32c").css("background-color", "silver");
    }
    function northEastRd32e() 
    {
        var inputVal = document.getElementById("northEastRd32e").value;
        var inputTitle = document.getElementById("northEastRd32e").title;
        document.getElementById("northEastRd16c" ).title = inputTitle;
        document.getElementById("northEastRd16c").value= inputVal;
        $("#northEastRd16c").val(inputVal);
        $("#northEastRd32e").css("background-color", "seagreen");
        $("#northEastRd32f").css("background-color", "silver");
    }
    function northEastRd32f() 
    {
        var inputVal = document.getElementById("northEastRd32f").value;
        var inputTitle = document.getElementById("northEastRd32f").title;
        document.getElementById("northEastRd16c" ).title = inputTitle;
        document.getElementById("northEastRd16c").value= inputVal;
        $("#northEastRd16c").val(inputVal);
        $("#northEastRd32f").css("background-color", "seagreen");
        $("#northEastRd32e").css("background-color", "silver");
    }
    function northEastRd32g() 
    {
        var inputVal = document.getElementById("northEastRd32g").value;
        var inputTitle = document.getElementById("northEastRd32g").title;
        document.getElementById("northEastRd16d" ).title = inputTitle;
        document.getElementById("northEastRd16d").value= inputVal;
        $("#northEastRd16d").val(inputVal);
        $("#northEastRd32g").css("background-color", "seagreen");
        $("#northEastRd32h").css("background-color", "silver");
    }
    function northEastRd32h() 
    {
        var inputVal = document.getElementById("northEastRd32h").value;
        var inputTitle = document.getElementById("northEastRd32h").title;
        document.getElementById("northEastRd16d" ).title = inputTitle;
        document.getElementById("northEastRd16d").value= inputVal;
        $("#northEastRd16d").val(inputVal);
        $("#northEastRd32h").css("background-color", "seagreen");
        $("#northEastRd32g").css("background-color", "silver");
    }

// third round northeast matchup
    function northEastRd16a() 
    {
        var inputVal = document.getElementById("northEastRd16a").value;
        var inputTitle = document.getElementById("northEastRd16a").title;
        document.getElementById("northEastRd8a" ).title = inputTitle;
        document.getElementById("northEastRd8a").value= inputVal;
        $("#northEastRd8a").val(inputVal);
        $("#northEastRd16a").css("background-color", "seagreen");
        $("#northEastRd16b").css("background-color", "silver");
    }
    function northEastRd16b() 
    {
        var inputVal = document.getElementById("northEastRd16b").value;
        var inputTitle = document.getElementById("northEastRd16b").title;
        document.getElementById("northEastRd8a" ).title = inputTitle;
        document.getElementById("northEastRd8a").value= inputVal;
        $("#northEastRd8a").val(inputVal);
        $("#northEastRd16b").css("background-color", "seagreen");
        $("#northEastRd16a").css("background-color", "silver");
    }
    function northEastRd16c() 
    {
        var inputVal = document.getElementById("northEastRd16c").value;
        var inputTitle = document.getElementById("northEastRd16c").title;
        document.getElementById("northEastRd8b" ).title = inputTitle;
        document.getElementById("northEastRd8b").value= inputVal;
        $("#northEastRd8b").val(inputVal);
        $("#northEastRd16c").css("background-color", "seagreen");
        $("#northEastRd16d").css("background-color", "silver");
    }
    function northEastRd16d() 
    {
        var inputVal = document.getElementById("northEastRd16d").value;
        var inputTitle = document.getElementById("northEastRd16d").title;
        document.getElementById("northEastRd8b" ).title = inputTitle;
        document.getElementById("northEastRd8b").value= inputVal;
        $("#northEastRd8b").val(inputVal);
        $("#northEastRd16d").css("background-color", "seagreen");
        $("#northEastRd16c").css("background-color", "silver");
    }

// fourth round northeast matchup
    function northEastRd8a() 
    {
        var inputVal = document.getElementById("northEastRd8a").value;
        var inputTitle = document.getElementById("northEastRd8a").title;
        document.getElementById("northEastRd4" ).title = inputTitle;
        document.getElementById("northEastRd4").value= inputVal;
        $("#northEastRd4").val(inputVal);
        $("#northEastRd8a").css("background-color", "seagreen");
        $("#northEastRd8b").css("background-color", "silver");
    }
    function northEastRd8b() 
    {
        var inputVal = document.getElementById("northEastRd8b").value;
        var inputTitle = document.getElementById("northEastRd8b").title;
        document.getElementById("northEastRd4" ).title = inputTitle;
        document.getElementById("northEastRd4").value= inputVal;
        $("#northEastRd4").val(inputVal);
        $("#northEastRd8b").css("background-color", "seagreen");
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
        $("#seed3").css("background-color", "seagreen");
        $("#seed60").css("background-color", "silver");
    }
    function southWestSeed16() 
    {
        var inputVal = document.getElementById("seed60").value;
        var inputTitle = document.getElementById("seed60").title;
        document.getElementById("southWestRd32a" ).title = inputTitle;
        document.getElementById("southWestRd32a").value= inputVal;
        $("#southWestRd32a").val(inputVal);
        $("#seed60").css("background-color", "seagreen");
        $("#seed3").css("background-color", "silver");
    }
    function southWestSeed8() 
    {
        var inputVal = document.getElementById("seed28").value;
        var inputTitle = document.getElementById("seed28").title;
        document.getElementById("southWestRd32b" ).title = inputTitle;
        document.getElementById("southWestRd32b").value= inputVal;
        $("#southWestRd32b").val(inputVal);
        $("#seed28").css("background-color", "seagreen");
        $("#seed35").css("background-color", "silver");
    }
    function southWestSeed9() 
    {
        var inputVal = document.getElementById("seed35").value;
        var inputTitle = document.getElementById("seed35").title;
        document.getElementById("southWestRd32b" ).title = inputTitle;
        document.getElementById("southWestRd32b").value= inputVal;
        $("#southWestRd32b").val(inputVal);
        $("#seed35").css("background-color", "seagreen");
        $("#seed28").css("background-color", "silver");
    }
    function southWestSeed5() 
    {
        var inputVal = document.getElementById("seed19").value;
        var inputTitle = document.getElementById("seed19").title;
        document.getElementById("southWestRd32c" ).title = inputTitle;
        document.getElementById("southWestRd32c").value= inputVal;
        $("#southWestRd32c").val(inputVal);
        $("#seed19").css("background-color", "seagreen");
        $("#seed44").css("background-color", "silver");
    }
    function southWestSeed12() 
    {
        var inputVal = document.getElementById("seed44").value;
        var inputTitle = document.getElementById("seed44").title;
        document.getElementById("southWestRd32c" ).title = inputTitle;
        document.getElementById("southWestRd32c").value= inputVal;
        $("#southWestRd32c").val(inputVal);
        $("#seed44").css("background-color", "seagreen");
        $("#seed19").css("background-color", "silver");
    }
    function southWestSeed4() 
    {
        var inputVal = document.getElementById("seed12").value;
        var inputTitle = document.getElementById("seed12").title;
        document.getElementById("southWestRd32d" ).title = inputTitle;
        document.getElementById("southWestRd32d").value= inputVal;
        $("#southWestRd32d").val(inputVal);
        $("#seed12").css("background-color", "seagreen");
        $("#seed51").css("background-color", "silver");
    }
    function southWestSeed13() 
    {
        var inputVal = document.getElementById("seed51").value;
        var inputTitle = document.getElementById("seed51").title;
        document.getElementById("southWestRd32d" ).title = inputTitle;
        document.getElementById("southWestRd32d").value= inputVal;
        $("#southWestRd32d").val(inputVal);
        $("#seed51").css("background-color", "seagreen");
        $("#seed12").css("background-color", "silver");
    }
    function southWestSeed6() 
    {
        var inputVal = document.getElementById("seed20").value;
        var inputTitle = document.getElementById("seed20").title;
        document.getElementById("southWestRd32e" ).title = inputTitle;
        document.getElementById("southWestRd32e").value= inputVal;
        $("#southWestRd32e").val(inputVal);
        $("#seed20").css("background-color", "seagreen");
        $("#seed43").css("background-color", "silver");
    }
    function southWestSeed11() 
    {
        var inputVal = document.getElementById("seed43").value;
        var inputTitle = document.getElementById("seed43").title;
        document.getElementById("southWestRd32e" ).title = inputTitle;
        document.getElementById("southWestRd32e").value= inputVal;
        $("#southWestRd32e").val(inputVal);
        $("#seed43").css("background-color", "seagreen");
        $("#seed20").css("background-color", "silver");
    }
    function southWestSeed3() 
    {
        var inputVal = document.getElementById("seed11").value;
        var inputTitle = document.getElementById("seed11").title;
        document.getElementById("southWestRd32f" ).title = inputTitle;
        document.getElementById("southWestRd32f").value= inputVal;
        $("#southWestRd32f").val(inputVal);
        $("#seed11").css("background-color", "seagreen");
        $("#seed52").css("background-color", "silver");
    }
    function southWestSeed14() 
    {
        var inputVal = document.getElementById("seed52").value;
        var inputTitle = document.getElementById("seed52").title;
        document.getElementById("southWestRd32f" ).title = inputTitle;
        document.getElementById("southWestRd32f").value= inputVal;
        $("#southWestRd32f").val(inputVal);
        $("#seed52").css("background-color", "seagreen");
        $("#seed11").css("background-color", "silver");
    }
    function southWestSeed7() 
    {
        var inputVal = document.getElementById("seed27").value;
        var inputTitle = document.getElementById("seed27").title;
        document.getElementById("southWestRd32g" ).title = inputTitle;
        document.getElementById("southWestRd32g").value= inputVal;
        $("#southWestRd32g").val(inputVal);
        $("#seed27").css("background-color", "seagreen");
        $("#seed36").css("background-color", "silver");
    }
    function southWestSeed10() 
    {
        var inputVal = document.getElementById("seed36").value;
        var inputTitle = document.getElementById("seed36").title;
        document.getElementById("southWestRd32g" ).title = inputTitle;
        document.getElementById("southWestRd32g").value= inputVal;
        $("#southWestRd32g").val(inputVal);
        $("#seed36").css("background-color", "seagreen");
        $("#seed27").css("background-color", "silver");
    }
    function southWestSeed2() 
    {
        var inputVal = document.getElementById("seed4").value;
        var inputTitle = document.getElementById("seed4").title;
        document.getElementById("southWestRd32h" ).title = inputTitle;
        document.getElementById("southWestRd32h").value= inputVal;
        $("#southWestRd32h").val(inputVal);
        $("#seed4").css("background-color", "seagreen");
        $("#seed59").css("background-color", "silver");
    }
    function southWestSeed15() 
    {
        var inputVal = document.getElementById("seed59").value;
        var inputTitle = document.getElementById("seed59").title;
        document.getElementById("southWestRd32h" ).title = inputTitle;
        document.getElementById("southWestRd32h").value= inputVal;
        $("#southWestRd32h").val(inputVal);
        $("#seed59").css("background-color", "seagreen");
        $("#seed4").css("background-color", "silver");
    }

// second round southwest matchup
    function southWestRd32a() 
    {
        var inputVal = document.getElementById("southWestRd32a").value;
        var inputTitle = document.getElementById("southWestRd32a").title;
        document.getElementById("southWestRd16a" ).title = inputTitle;
        document.getElementById("southWestRd16a").value= inputVal;
        $("#southWestRd16a").val(inputVal);
        $("#southWestRd32a").css("background-color", "seagreen");
        $("#southWestRd32b").css("background-color", "silver");
    }
    function southWestRd32b() 
    {
        var inputVal = document.getElementById("southWestRd32b").value;
        var inputTitle = document.getElementById("southWestRd32b").title;
        document.getElementById("southWestRd16a" ).title = inputTitle;
        document.getElementById("southWestRd16a").value= inputVal;
        $("#southWestRd16a").val(inputVal);
        $("#southWestRd32b").css("background-color", "seagreen");
        $("#southWestRd32a").css("background-color", "silver");
    }
    function southWestRd32c() 
    {
        var inputVal = document.getElementById("southWestRd32c").value;
        var inputTitle = document.getElementById("southWestRd32c").title;
        document.getElementById("southWestRd16b" ).title = inputTitle;
        document.getElementById("southWestRd16b").value= inputVal;
        $("#southWestRd16b").val(inputVal);
        $("#southWestRd32c").css("background-color", "seagreen");
        $("#southWestRd32d").css("background-color", "silver");
    }
    function southWestRd32d() 
    {
        var inputVal = document.getElementById("southWestRd32d").value;
        var inputTitle = document.getElementById("southWestRd32d").title;
        document.getElementById("southWestRd16b" ).title = inputTitle;
        document.getElementById("southWestRd16b").value= inputVal;
        $("#southWestRd16b").val(inputVal);
        $("#southWestRd32d").css("background-color", "seagreen");
        $("#southWestRd32c").css("background-color", "silver");
    }
    function southWestRd32e() 
    {
        var inputVal = document.getElementById("southWestRd32e").value;
        var inputTitle = document.getElementById("southWestRd32e").title;
        document.getElementById("southWestRd16c" ).title = inputTitle;
        document.getElementById("southWestRd16c").value= inputVal;
        $("#southWestRd16c").val(inputVal);
        $("#southWestRd32e").css("background-color", "seagreen");
        $("#southWestRd32f").css("background-color", "silver");
    }
    function southWestRd32f() 
    {
        var inputVal = document.getElementById("southWestRd32f").value;
        var inputTitle = document.getElementById("southWestRd32f").title;
        document.getElementById("southWestRd16c" ).title = inputTitle;
        document.getElementById("southWestRd16c").value= inputVal;
        $("#southWestRd16c").val(inputVal);
        $("#southWestRd32f").css("background-color", "seagreen");
        $("#southWestRd32e").css("background-color", "silver");
    }
    function southWestRd32g() 
    {
        var inputVal = document.getElementById("southWestRd32g").value;
        var inputTitle = document.getElementById("southWestRd32g").title;
        document.getElementById("southWestRd16d" ).title = inputTitle;
        document.getElementById("southWestRd16d").value= inputVal;
        $("#southWestRd16d").val(inputVal);
        $("#southWestRd32g").css("background-color", "seagreen");
        $("#southWestRd32h").css("background-color", "silver");
    }
    function southWestRd32h() 
    {
        var inputVal = document.getElementById("southWestRd32h").value;
        var inputTitle = document.getElementById("southWestRd32h").title;
        document.getElementById("southWestRd16d" ).title = inputTitle;
        document.getElementById("southWestRd16d").value= inputVal;
        $("#southWestRd16d").val(inputVal);
        $("#southWestRd32h").css("background-color", "seagreen");
        $("#southWestRd32g").css("background-color", "silver");
    }

// third round southwest matchup
    function southWestRd16a() 
    {
        var inputVal = document.getElementById("southWestRd16a").value;
        var inputTitle = document.getElementById("southWestRd16a").title;
        document.getElementById("southWestRd8a" ).title = inputTitle;
        document.getElementById("southWestRd8a").value= inputVal;
        $("#southWestRd8a").val(inputVal);
        $("#southWestRd16a").css("background-color", "seagreen");
        $("#southWestRd16b").css("background-color", "silver");
    }
    function southWestRd16b() 
    {
        var inputVal = document.getElementById("southWestRd16b").value;
        var inputTitle = document.getElementById("southWestRd16b").title;
        document.getElementById("southWestRd8a" ).title = inputTitle;
        document.getElementById("southWestRd8a").value= inputVal;
        $("#southWestRd8a").val(inputVal);
        $("#southWestRd16b").css("background-color", "seagreen");
        $("#southWestRd16a").css("background-color", "silver");
    }
    function southWestRd16c() 
    {
        var inputVal = document.getElementById("southWestRd16c").value;
        var inputTitle = document.getElementById("southWestRd16c").title;
        document.getElementById("southWestRd8b" ).title = inputTitle;
        document.getElementById("southWestRd8b").value= inputVal;
        $("#southWestRd8b").val(inputVal);
        $("#southWestRd16c").css("background-color", "seagreen");
        $("#southWestRd16d").css("background-color", "silver");
    }
    function southWestRd16d() 
    {
        var inputVal = document.getElementById("southWestRd16d").value;
        var inputTitle = document.getElementById("southWestRd16d").title;
        document.getElementById("southWestRd8b" ).title = inputTitle;
        document.getElementById("southWestRd8b").value= inputVal;
        $("#southWestRd8b").val(inputVal);
        $("#southWestRd16d").css("background-color", "seagreen");
        $("#southWestRd16c").css("background-color", "silver");
    }

// fourth round southwest matchup
    function southWestRd8a() 
    {
        var inputVal = document.getElementById("southWestRd8a").value;
        var inputTitle = document.getElementById("southWestRd8a").title;
        document.getElementById("southWestRd4" ).title = inputTitle;
        document.getElementById("southWestRd4").value= inputVal;
        $("#southWestRd4").val(inputVal);
        $("#southWestRd8a").css("background-color", "seagreen");
        $("#southWestRd8b").css("background-color", "silver");
    }
    function southWestRd8b() 
    {
        var inputVal = document.getElementById("southWestRd8b").value;
        var inputTitle = document.getElementById("southWestRd8b").title;
        document.getElementById("southWestRd4" ).title = inputTitle;
        document.getElementById("southWestRd4").value= inputVal;
        $("#southWestRd4").val(inputVal);
        $("#southWestRd8b").css("background-color", "seagreen");
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
        $("#seed2").css("background-color", "seagreen");
        $("#seed61").css("background-color", "silver");
    }
    function southEastSeed16() 
    {
        var inputVal = document.getElementById("seed61").value;
        var inputTitle = document.getElementById("seed61").title;
        document.getElementById("southEastRd32a" ).title = inputTitle;
        document.getElementById("southEastRd32a").value= inputVal;
        $("#southEastRd32a").val(inputVal);
        $("#seed61").css("background-color", "seagreen");
        $("#seed2").css("background-color", "silver");
    }
    function southEastSeed8() 
    {
        var inputVal = document.getElementById("seed29").value;
        var inputTitle = document.getElementById("seed29").title;
        document.getElementById("southEastRd32b" ).title = inputTitle;
        document.getElementById("southEastRd32b").value= inputVal;
        $("#southEastRd32b").val(inputVal);
        $("#seed29").css("background-color", "seagreen");
        $("#seed34").css("background-color", "silver");
    }
    function southEastSeed9() 
    {
        var inputVal = document.getElementById("seed34").value;
        var inputTitle = document.getElementById("seed34").title;
        document.getElementById("southEastRd32b" ).title = inputTitle;
        document.getElementById("southEastRd32b").value= inputVal;
        $("#southEastRd32b").val(inputVal);
        $("#seed34").css("background-color", "seagreen");
        $("#seed29").css("background-color", "silver");
    }
    function southEastSeed5() 
    {
        var inputVal = document.getElementById("seed18").value;
        var inputTitle = document.getElementById("seed18").title;
        document.getElementById("southEastRd32c" ).title = inputTitle;
        document.getElementById("southEastRd32c").value= inputVal;
        $("#southEastRd32c").val(inputVal);
        $("#seed18").css("background-color", "seagreen");
        $("#seed45").css("background-color", "silver");
    }
    function southEastSeed12() 
    {
        var inputVal = document.getElementById("seed45").value;
        var inputTitle = document.getElementById("seed45").title;
        document.getElementById("southEastRd32c" ).title = inputTitle;
        document.getElementById("southEastRd32c").value= inputVal;
        $("#southEastRd32c").val(inputVal);
        $("#seed45").css("background-color", "seagreen");
        $("#seed18").css("background-color", "silver");
    }
    function southEastSeed4() 
    {
        var inputVal = document.getElementById("seed13").value;
        var inputTitle = document.getElementById("seed13").title;
        document.getElementById("southEastRd32d" ).title = inputTitle;
        document.getElementById("southEastRd32d").value= inputVal;
        $("#southEastRd32d").val(inputVal);
        $("#seed13").css("background-color", "seagreen");
        $("#seed50").css("background-color", "silver");
    }
    function southEastSeed13() 
    {
        var inputVal = document.getElementById("seed50").value;
        var inputTitle = document.getElementById("seed50").title;
        document.getElementById("southEastRd32d" ).title = inputTitle;
        document.getElementById("southEastRd32d").value= inputVal;
        $("#southEastRd32d").val(inputVal);
        $("#seed50").css("background-color", "seagreen");
        $("#seed13").css("background-color", "silver");
    }
    function southEastSeed6() 
    {
        var inputVal = document.getElementById("seed21").value;
        var inputTitle = document.getElementById("seed21").title;
        document.getElementById("southEastRd32e" ).title = inputTitle;
        document.getElementById("southEastRd32e").value= inputVal;
        $("#southEastRd32e").val(inputVal);
        $("#seed21").css("background-color", "seagreen");
        $("#seed42").css("background-color", "silver");
    }
    function southEastSeed11() 
    {
        var inputVal = document.getElementById("seed42").value;
        var inputTitle = document.getElementById("seed42").title;
        document.getElementById("southEastRd32e" ).title = inputTitle;
        document.getElementById("southEastRd32e").value= inputVal;
        $("#southEastRd32e").val(inputVal);
        $("#seed42").css("background-color", "seagreen");
        $("#seed21").css("background-color", "silver");
    }
    function southEastSeed3() 
    {
        var inputVal = document.getElementById("seed10").value;
        var inputTitle = document.getElementById("seed10").title;
        document.getElementById("southEastRd32f" ).title = inputTitle;
        document.getElementById("southEastRd32f").value= inputVal;
        $("#southEastRd32f").val(inputVal);
        $("#seed10").css("background-color", "seagreen");
        $("#seed53").css("background-color", "silver");
    }
    function southEastSeed14() 
    {
        var inputVal = document.getElementById("seed53").value;
        var inputTitle = document.getElementById("seed53").title;
        document.getElementById("southEastRd32f" ).title = inputTitle;
        document.getElementById("southEastRd32f").value= inputVal;
        $("#southEastRd32f").val(inputVal);
        $("#seed53").css("background-color", "seagreen");
        $("#seed10").css("background-color", "silver");
    }
    function southEastSeed7() 
    {
        var inputVal = document.getElementById("seed26").value;
        var inputTitle = document.getElementById("seed26").title;
        document.getElementById("southEastRd32g" ).title = inputTitle;
        document.getElementById("southEastRd32g").value= inputVal;
        $("#southEastRd32g").val(inputVal);
        $("#seed26").css("background-color", "seagreen");
        $("#seed37").css("background-color", "silver");
    }
    function southEastSeed10() 
    {
        var inputVal = document.getElementById("seed37").value;
        var inputTitle = document.getElementById("seed37").title;
        document.getElementById("southEastRd32g" ).title = inputTitle;
        document.getElementById("southEastRd32g").value= inputVal;
        $("#southEastRd32g").val(inputVal);
        $("#seed37").css("background-color", "seagreen");
        $("#seed26").css("background-color", "silver");
    }
    function southEastSeed2() 
    {
        var inputVal = document.getElementById("seed5").value;
        var inputTitle = document.getElementById("seed5").title;
        document.getElementById("southEastRd32h" ).title = inputTitle;
        document.getElementById("southEastRd32h").value= inputVal;
        $("#southEastRd32h").val(inputVal);
        $("#seed5").css("background-color", "seagreen");
        $("#seed58").css("background-color", "silver");
    }
    function southEastSeed15() 
    {
        var inputVal = document.getElementById("seed58").value;
        var inputTitle = document.getElementById("seed58").title;
        document.getElementById("southEastRd32h" ).title = inputTitle;
        document.getElementById("southEastRd32h").value= inputVal;
        $("#southEastRd32h").val(inputVal);
        $("#seed58").css("background-color", "seagreen");
        $("#seed5").css("background-color", "silver");
    }

//  second round southeast matchup
    function southEastRd32a() 
    {
        var inputVal = document.getElementById("southEastRd32a").value;
        var inputTitle = document.getElementById("southEastRd32a").title;
        document.getElementById("southEastRd16a" ).title = inputTitle;
        document.getElementById("southEastRd16a").value= inputVal;
        $("#southEastRd16a").val(inputVal);
        $("#southEastRd32a").css("background-color", "seagreen");
        $("#southEastRd32b").css("background-color", "silver");
    }
    function southEastRd32b() 
    {
        var inputVal = document.getElementById("southEastRd32b").value;
        var inputTitle = document.getElementById("southEastRd32b").title;
        document.getElementById("southEastRd16a" ).title = inputTitle;
        document.getElementById("southEastRd16a").value= inputVal;
        $("#southEastRd16a").val(inputVal);
        $("#southEastRd32b").css("background-color", "seagreen");
        $("#southEastRd32a").css("background-color", "silver");
    }
    function southEastRd32c() 
    {
        var inputVal = document.getElementById("southEastRd32c").value;
        var inputTitle = document.getElementById("southEastRd32c").title;
        document.getElementById("southEastRd16b" ).title = inputTitle;
        document.getElementById("southEastRd16b").value= inputVal;
        $("#southEastRd16b").val(inputVal);
        $("#southEastRd32c").css("background-color", "seagreen");
        $("#southEastRd32d").css("background-color", "silver");
    }
    function southEastRd32d() 
    {
        var inputVal = document.getElementById("southEastRd32d").value;
        var inputTitle = document.getElementById("southEastRd32d").title;
        document.getElementById("southEastRd16b" ).title = inputTitle;
        document.getElementById("southEastRd16b").value= inputVal;
        $("#southEastRd16b").val(inputVal);
        $("#southEastRd32d").css("background-color", "seagreen");
        $("#southEastRd32c").css("background-color", "silver");
    }
    function southEastRd32e() 
    {
        var inputVal = document.getElementById("southEastRd32e").value;
        var inputTitle = document.getElementById("southEastRd32e").title;
        document.getElementById("southEastRd16c" ).title = inputTitle;
        document.getElementById("southEastRd16c").value= inputVal;
        $("#southEastRd16c").val(inputVal);
        $("#southEastRd32e").css("background-color", "seagreen");
        $("#southEastRd32f").css("background-color", "silver");
    }
    function southEastRd32f() 
    {
        var inputVal = document.getElementById("southEastRd32f").value;
        var inputTitle = document.getElementById("southEastRd32f").title;
        document.getElementById("southEastRd16c" ).title = inputTitle;
        document.getElementById("southEastRd16c").value= inputVal;
        $("#southEastRd16c").val(inputVal);
        $("#southEastRd32f").css("background-color", "seagreen");
        $("#southEastRd32e").css("background-color", "silver");
    }
    function southEastRd32g() 
    {
        var inputVal = document.getElementById("southEastRd32g").value;
        var inputTitle = document.getElementById("southEastRd32g").title;
        document.getElementById("southEastRd16d" ).title = inputTitle;
        document.getElementById("southEastRd16d").value= inputVal;
        $("#southEastRd16d").val(inputVal);
        $("#southEastRd32g").css("background-color", "seagreen");
        $("#southEastRd32h").css("background-color", "silver");
    }
    function southEastRd32h() 
    {
        var inputVal = document.getElementById("southEastRd32h").value;
        var inputTitle = document.getElementById("southEastRd32h").title;
        document.getElementById("southEastRd16d" ).title = inputTitle;
        document.getElementById("southEastRd16d").value= inputVal;
        $("#southEastRd16d").val(inputVal);
        $("#southEastRd32h").css("background-color", "seagreen");
        $("#southEastRd32g").css("background-color", "silver");
    }

// third round southeast matchup
    function southEastRd16a() 
    {
        var inputVal = document.getElementById("southEastRd16a").value;
        var inputTitle = document.getElementById("southEastRd16a").title;
        document.getElementById("southEastRd8a" ).title = inputTitle;
        document.getElementById("southEastRd8a").value= inputVal;
        $("#southEastRd8a").val(inputVal);
        $("#southEastRd16a").css("background-color", "seagreen");
        $("#southEastRd16b").css("background-color", "silver");
    }
    function southEastRd16b() 
    {
        var inputVal = document.getElementById("southEastRd16b").value;
        var inputTitle = document.getElementById("southEastRd16b").title;
        document.getElementById("southEastRd8a" ).title = inputTitle;
        document.getElementById("southEastRd8a").value= inputVal;
        $("#southEastRd8a").val(inputVal);
        $("#southEastRd16b").css("background-color", "seagreen");
        $("#southEastRd16a").css("background-color", "silver");
    }
    function southEastRd16c() 
    {
        var inputVal = document.getElementById("southEastRd16c").value;
        var inputTitle = document.getElementById("southEastRd16c").title;
        document.getElementById("southEastRd8b" ).title = inputTitle;
        document.getElementById("southEastRd8b").value= inputVal;
        $("#southEastRd8b").val(inputVal);
        $("#southEastRd16c").css("background-color", "seagreen");
        $("#southEastRd16d").css("background-color", "silver");
    }
    function southEastRd16d() 
    {
        var inputVal = document.getElementById("southEastRd16d").value;
        var inputTitle = document.getElementById("southEastRd16d").title;
        document.getElementById("southEastRd8b" ).title = inputTitle;
        document.getElementById("southEastRd8b").value= inputVal;
        $("#southEastRd8b").val(inputVal);
        $("#southEastRd16d").css("background-color", "seagreen");
        $("#southEastRd16c").css("background-color", "silver");
    }

// fourth round southeast matchup
    function southEastRd8a() 
    {
        var inputVal = document.getElementById("southEastRd8a").value;
        var inputTitle = document.getElementById("southEastRd8a").title;
        document.getElementById("southEastRd4" ).title = inputTitle;
        document.getElementById("southEastRd4").value= inputVal;
        $("#southEastRd4").val(inputVal);
        $("#southEastRd8a").css("background-color", "seagreen");
        $("#southEastRd8b").css("background-color", "silver");
    }
    function southEastRd8b() 
    {
        var inputVal = document.getElementById("southEastRd8b").value;
        var inputTitle = document.getElementById("southEastRd8b").title;
        document.getElementById("southEastRd4" ).title = inputTitle;
        document.getElementById("southEastRd4").value= inputVal;
        $("#southEastRd4").val(inputVal);
        $("#southEastRd8b").css("background-color", "seagreen");
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
        $("#northWestRd4").css("background-color", "seagreen");
        $("#southWestRd4").css("background-color", "silver");
    }
    function southWestRd4() 
    {
        var inputVal = document.getElementById("southWestRd4").value;
        var inputTitle = document.getElementById("southWestRd4").title;
        document.getElementById("westRd2" ).title = inputTitle;
        document.getElementById("westRd2").value= inputVal;
        $("#westRd2").val(inputVal);
        $("#southWestRd4").css("background-color", "seagreen");
        $("#northWestRd4").css("background-color", "silver");
    }
    function northEastRd4() 
    {
        var inputVal = document.getElementById("northEastRd4").value;
        var inputTitle = document.getElementById("northEastRd4").title;
        document.getElementById("eastRd2" ).title = inputTitle;
        document.getElementById("eastRd2").value= inputVal;
        $("#eastRd2").val(inputVal);
        $("#northEastRd4").css("background-color", "seagreen");
        $("#southEastRd4").css("background-color", "silver");
    }
    function southEastRd4() 
    {
        var inputVal = document.getElementById("southEastRd4").value;
        var inputTitle = document.getElementById("southEastRd4").title;
        document.getElementById("eastRd2" ).title = inputTitle;
        document.getElementById("eastRd2").value= inputVal;
        $("#eastRd2").val(inputVal);
        $("#southEastRd4").css("background-color", "seagreen");
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
        $("#westRd2").css("background-color", "seagreen");
        $("#eastRd2").css("background-color", "silver");
        $("#winner").css("background-color", "seagreen");
    }
    function eastRd2() 
    {
        var inputVal = document.getElementById("eastRd2").value;
        var inputTitle = document.getElementById("eastRd2").title;
        document.getElementById("winner" ).title = inputTitle;
        document.getElementById("winner").value= inputVal;
        $("#winner").val(inputVal);
        $("#eastRd2").css("background-color", "seagreen");
        $("#westRd2").css("background-color", "silver");
        $("#winner").css("background-color", "seagreen");
    }

    function winner() 
    {
        var winner = $("#winner").val();
        alert('WINNNER IS '+ winner + '!!!!!!!')
    }
