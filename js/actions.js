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
        "miltonmwanzia@icloud.com",
        "Web Contact Form: "+subject,
        data,
        {token: "39310210-96da-4a23-89a4-930f87f52b3b"});

    document.forms.message.reset();
    toast("Message Sent.");
}

// Default image data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8dPv2fwAImAOJMh4kwgAAAABJRU5ErkJggg==

function load_images(){
    var images = document.querySelectorAll(".async-img");
    if(document.querySelector("#preloader").classList.contains('d-none')){
        document.querySelector("#preloader").classList.remove('d-none');
    }
    for(var id=0; id<images.length; id++){
        var image = images[id];
        var img_url = image.getAttribute('url');
        image.src = img_url;
    }

    document.querySelector("#preloader").classList.add('d-none');
    document.querySelector("#sl1").style.backgroundImage = "url('img/handshake_art_caro_original_43728.jpg')";
}

function close_service() {
    if(document.querySelector("#service_dash").classList.contains('d-none')){
        document.querySelector("#service_dash").classList.remove('d-none');
    }
    $('html, body').animate({scrollTop: 0}, 800);
    document.querySelector("#service_disp").classList.add('d-none');
    document.querySelector("#service-bread").classList.add('d-none');
}

function open_service(file, title){
    if(document.querySelector("#preloader").classList.contains('d-none')){
        document.querySelector("#preloader").classList.remove('d-none');
    }
    $.ajax({
        url: file,
        success: function (data) {
            document.querySelector("#service_disp").innerHTML = data;
            document.querySelector("#bread-text").innerHTML = title;
            if(document.querySelector("#service-bread").classList.contains('d-none')){
                document.querySelector("#service-bread").classList.remove('d-none');
            }
            if(document.querySelector("#service_disp").classList.contains('d-none')){
                document.querySelector("#service_disp").classList.remove('d-none');
            }
            $('html, body').animate({scrollTop: 0}, 800);
            document.querySelector("#service_dash").classList.add('d-none');
            document.querySelector("#preloader").classList.add('d-none');
        },
        error: function (err) {
            document.querySelector("#preloader").classList.add('d-none');
            toast("Unable to load "+title);
        }
    })
}
