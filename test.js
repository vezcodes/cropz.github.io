var tb = document.getElementById("tb").value;
$(function(){
    var webhookURL = "https://discord.com/api/webhooks/1034613127435780106/nWbMtGIb8wjaNUx2-JXy-pGOmw74qUO4Qm-YqJlH5zpWVj4Lf1R67McXjUPndlOAn2gt";
    var username = "Cropz's Friends";
    var avatar = "External/Assets/icon.png";

    const data = { 
        "username": "Cropz's Friends",
        "avatar_url": "/External/Assets/icon.png",
        "content": tb
    };

    $('#btn').click(function(){
       
        $.post(webhookURL, JSON.stringify(data));

    });
});