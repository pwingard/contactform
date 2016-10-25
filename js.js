    $(document).ready(function(){
        $("#submit").show('fast');
        $("#submit").click(function () {
            var name=$('#form_name').val();
            var email=$('#form_email').val();
            var msg=$('#form_msg').val();
            
            //look for valid data
            if (validatefield(name)) {
                console.log("Name valid");
            } else {
              alert("Name is empty");
              return false;
            }
            if (validateEmail(email)) {
                console.log("email valid");
            } else {
              alert("Email not valid");
              return false;
            }
            if (validatefield(msg)) {
                console.log("Msg valid");
            } else {
              alert("Message is empty");
              return false;
            }

            $.ajax({
                url: "mail.php",
                type: "POST",
                dataType:'json',
                
                data: {name: name, email:email,msg:msg },
                //async: false,//keep loading gif from showing up
                success: function (data) {
                    console.log(data);//log the data returned
                    $('#form_input').val(data);//display the returned JSON data in the input box
                    //do other stuff with the returned date
                    alert(data);
                },
                error: function () {
                    alert( "Posting failed." );
                    $('#message').html("");
                },
            });
            
            $('#form_name').val('');
            $('#form_email').val('');
            $('#form_msg').val('');
            
        return false;
        
        });
        
    });

$("#form_input")
  .focus(function() {
        if (this.value === this.defaultValue) {
            this.value = '';
        }
  })
  .blur(function() {
        if (this.value === '') {
            this.value = this.defaultValue;
        }
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatefield(field) {
    if (field==null || field==""){
         return false;
    }else{
            return true;
    }
}


