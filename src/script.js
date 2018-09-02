$(document).ready(function() {
  $('#Qtext').val('');
  $('option')[0].setAttribute("selected","selected");
  $('#search').on('click', function(){
    var query = $('#Qtext').val();
    var val = $('#Sform').val();
    if(query == "" & val == ""){
      alert("Не выбрана поисковая система и не заполнено поле поискового запроса");
    } else if(val == ""){
      alert("Не выбрана поисковая система");
    } else if (query == "") {
      alert("Не заполнено поле поискового запроса");
    } else{
      window.open(val + query);
    }
  });
});
