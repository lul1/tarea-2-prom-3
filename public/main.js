
$(document).ready(function(){
    $('input[type="submit"]').on("click",function(event){
        event.preventDefault();

        var first_name = $('#first_name').val(); //first_name
        var last_name = $('#last_name').val(); //last_name
        var gender = $('input[name="gender"]:checked').val();
        var interest = $('input[name="interest"]:checked');
        var interests = new Array();

        for (var i = 0; i < interest.length; i++) {
          var temp_interest = interest[i];
          interests.push(temp_interest.value);
        }

        var payload = {
          'first_name':first_name,
          'last_name':last_name,
          'gender':gender,
          "interests": interests
        }

        $.post('/find', payload);
        $.get('/find', payload);



    });
});



/*$.get('find.html',{'last_name':last_name});
$.post('find.html',{'last_name':last_name});
$.post('find.html',{'gender':gender});
 /*$.get('find.html',{'femenino':femenino});
        $.post('find.html',{'femenino':femenino});
        $.get('find.html',{'masculino':,masculino});
        $.post('find.html',{'masculino':masculino});/*

        var payload = {
          'first_name':first_name,
          'last_name':last_name,
          'gender':gender,
          'interests': interests.map(function(i, element){
              return $(element).val();
          })
        };





        $.get('find.html', payload);
        $.post('find.html', payload);


/*  console.log("Hiciste click!", $('#first_name').val());
  console.log("Hiciste click!", $('#last_name').val());
  console.log("Hiciste click!", $('input[name="gender"]:checked').val());
  console.log("Hiciste click!", $('input[name="interests"]:checked').val());*/
/*var first_name = $('input[name="first_name"]').val();

String RadioValues= request.getParameter("gender");
String checkboxValues = request.getParameter("Intereses");

console.log(first_name);
event.preventDefault();*/
/*$.ajax('find.html', {
  method: 'post',
  data: {
    'first_name': first_name
  }
});*/
