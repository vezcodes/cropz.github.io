function sendMessage(){
    var tb = document.getElementById("tb").value;

    var webhookURL = "https://discord.com/api/webhooks/1035469512709001236/jhmq8U-7_rbPje2-c1Rlhw0ewDDj9e2eznnq91bULgKxd6fhmwN3-ei6wHTZwiiNFxfy";

    const data = { 
        "username": "Cropz's Friends",
        "avatar_url": "https://i.imgur.com/tnPF5S2.png",
        "content": tb
    };

       
    $.post(webhookURL, JSON.stringify(data));

};