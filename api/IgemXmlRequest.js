$("button").click(function() {
    $.ajax({
        url: "http://parts.igem.org/cgi/xml/part.cgi?part=K1114000",
        dataType: "xml"
        success: function(result){
            $("#igem").html(result);
    }});
});