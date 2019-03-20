(function($) {
  "use strict"; 
    
    $('#collapsibleA, #collapsibleB, #collapsibleC, #collapsibleD').click(function(){
        $(this).find('i').toggleClass('fa-caret-square-down fa-caret-square-up')
    });
    
    $("#searchBar").keyup(function () {
        var value = this.value.toLowerCase().trim();

        $("table tr").each(function (index) {
            if (!index) return;
            $(this).find("td").each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
    });
    
    //Adds toggle to visable table for cs-home searchbar
    $("#searchUsrLanding").keyup(function () {
        
        if(!$( "#myDropdown" ).is(":visible"))
            $( "#myDropdown" ).toggleClass("show");
        
        var value = this.value.toLowerCase().trim();

        $("table tr").each(function (index) {
            if (!index) return;
            $(this).find("td").each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
        
    });
    
    //Adds toggle to visable when window is clicked
    $(window).click(function(e) {
        if(!$(e.target).hasClass('')) //td has no class
            {
                $( "#myDropdown" ).removeClass("show");
            }
    });
    //setting text of search bar to clicked td element text
    $("table > tbody > tr").click(function () {
            $( "#searchUsrLanding" ).val($(this).closest('tr').children('td:first').text());
            $( "#myDropdown" ).toggleClass("show");
    });

})(jQuery); // End of use strict
