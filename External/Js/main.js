function sendMessage() {
    var tb = document.getElementById("tb").value;
    var username = "Cropz's Friends";
    var avatar = "https://i.imgur.com/tnPF5S2.png";
    var link = "https://discord.com/api/webhooks/1035134092573949992/EYCIY7EeXY2CJdMzcxIqC1oKVw6jtd5Go-wPJSI938qF_TQcjRmnlKl1DWd4n5RthR3w";

    var webhookURL = "https://gentle-chamber-50744.herokuapp.com/"+link;
    // var webhookURL2 = "https://immense-waters-29062.herokuapp.com/";


    // Webhook details
    const data = 
    { 

        "username": "Cropz's Friends",
        "avatar_url": "https://i.imgur.com/tnPF5S2.png",
        "content": tb
    
    };

    if(tb === null || tb === "")
    {

        swal("Ah Oh...", "Cannot send air, please enter something to send", "error");

    }//else if(tb === ["badword1", "badword2"])
    // {        
    //      swal("Ah Oh...", "I don't want to hear this word again!", "error");
    // }
    else
    {

        fetch('https://static-global-s-msn-com.akamaized.net/hp-neu/sc/2b/a5ea21.ico?d='+Date.now())
        
        .then(response => {
            const request = new XMLHttpRequest();

            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("X-Requested-With", 'accept');
            headers.append("origin", "localhost:80");
            headers.append("dataType", "json");

            request.open("POST", link, {headers:headers});

            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            request.send(JSON.stringify(data));
            console.log("Message was sent successfully!")
            swal("Congrats!", "Message was sent successfully!", "success");

        })

        // .then(response => {
        //     if (!response.ok){
        //         throw new Error('Network response was not ok');
        //     }


        //     fetch(webhookURL, {
        //         "access-control-allow-origin": "https://cropz.cf",
        //         method: 'POST',
        //         headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //          'Access-Control-Allow-Origin':'https://cropz.cf',
        //           "access-control-allow-credentials": "true",
        //           "access-control-allow-headers": "Content-Type, Authorization, X-Audit-Log-Reason, X-Track, X-Super-Properties, X-Context-Properties, X-Failed-Requests, X-Fingerprint, X-RPC-Proxy, X-Discord-Locale, X-Debug-Options, x-client-trace-id, If-None-Match, Range, X-RateLimit-Precision"
        //         }, // this line is important, if this content-type is not set it wont work
        //         body: JSON.stringify(data)
        //     });
        // })

        .catch(error => {
            console.log("Something went wrong..\nCheck your internet connection just in case.\n\nError:\n" +error);
            // alert("You don't have an internet connection to send messages!");
            swal("Ah Oh...", "Something went wrong...\n", "error");
        });
    }

}   