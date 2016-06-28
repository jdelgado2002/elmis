// jQuery snippet for changing HTML form into JSON
$('#investorForm').submit(function(e) {
    // prevent default submiting form
    e.preventDefault();
    //analytics
    ga('send', 'event', 'Buttons', 'click', 'inversion'); 
    // serialize data to JSON
    $.post("https://sheetsu.com/apis/v1.0/cdaa04467cd6",{
        InputName: $("#InputName").val(),
        InputEmail: $("#InputEmail").val()
    },
    function (data, status){
        toastr.success('Gracias nos comunicaremos muy pronto!', $("#InputName").val());     
        $("#InputName").val("");
        $("#InputEmail").val("");
    }
          );
      return false;
    });