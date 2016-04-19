(function () {
                
    //HTML-objects
    var art1;
    var art2;
    var art3;
    var art4;
    
    var init = function () {
        
        var setHTMLObjects = function () {
            art1 = document.getElementById("art1");
            art2 = document.getElementById("art2");
            art3 = document.getElementById("art3");
            art4 = document.getElementById("art4");    
        }();
                    
        var setEvents = function () {
            // Mouse-over:
            art1.onmouseover = setAnswer1;
            art2.onmouseover = setAnswer2;
            art3.onmouseover = setAnswer3;
            art4.onmouseover = setAnswer4;
            // Mouse-out:
            art1.onmouseout = setDefault;
            art2.onmouseout = setDefault;
            art3.onmouseout = setDefault;
            art4.onmouseout = setDefault;
        }();/*----end SetEvents----*/
        
    }();/*----end init----*/
                
    function setDefault() {
        document.getElementById("answerHere").innerHTML = "Universell utforming er å tilpasse omgivelsane til alle målgrupper gjennom ei og same løysing. Det handlar om å ta omsyn til personar med varierande funksjonsevner.";
    }
    /*----end setDefault----*/
                
    function setAnswer1() {
        document.getElementById("answerHere").innerHTML = "Utforming av kode (1/2): <br><br/> I Arbeide med universell utforming er det viktig å følge standarder for HTML og CSS, slik at nettstadar, nettleserar og hjelpemiddel kommuniserar bra med kvarandre.";
    }
    /*----end setAnswer1----*/
                
    function setAnswer2() {
        document.getElementById("answerHere").innerHTML = "Utforming av kode (2/2): <br><br/> Det er anbefalt å bygge nettsider med HTML5. Jo nyare standard, jo meir støtte for universell utforming har ein tilgang til.";
    }
    /*----end setAnswer2----*/
                
    function setAnswer3() {
        document.getElementById("answerHere").innerHTML = "Billedbruk (1/2): <br><br/> Ein betydelig andel av brukerane trenger bilder som supplerande for tekst for å forstå informasjon.";
    }
    /*----end setAnswer3----*/
                
    function setAnswer4() {
        document.getElementById("answerHere").innerHTML = "Billedbruk (2/2): <br><br/> Alle bilder i HTML skal ha alt-attributt. Dersom dette mangler kan filpasseringa og filnavnet bli lest opp av hjelpemidler.";
    }
    /*----end setAnswer4----*/
    
}());