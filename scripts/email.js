function sendEmail(parms) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('gmail', 'template_56f3vyo', tempParams)
        .then(function(res) {
            console.log("email sent successfully", res.status);
        })
}