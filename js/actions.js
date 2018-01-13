var toast = function (message) {
    Materialize.toast(message, 6000)
};

function send_message() {
    var sender = document.querySelector("#txt_email").value;
    var phone = document.querySelector("#txt_phone").value;
    var name = document.querySelector("#txt_name").value;
    var message = document.querySelector("#txt_message").value;
    var subject = document.querySelector("#txt_subject").value;
    var data = "";
    data += "From: <a href='mailto:"+sender+"'>"+sender+"</a><br>";
    data += "Phone: <a href='tel:"+phone+"'>"+phone+"</a><br>";
    data += "Name: "+name+"<br>";
    data += "<h4>"+name+"</h4>";
    data += "<p>"+message+"</p>";

    Email.send(name+" <"+sender+">",
        "billcountrymwaniki@gmail.com",
        "Web Contact Form: "+subject,
        data,
        {token: "95c92fdb-2523-486e-bd4a-8840516ad0b3"});

    document.forms.message.reset();
    toast("Message Sent.");
}
