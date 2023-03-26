var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    "token": "zhpiqwld5v9c2lev",
    "to": "+919978900829",
    "body": "This is a general reminder for you to continue your scholarship procedure"
});

var config = {
  method: 'post',
  url: 'https://api.ultramsg.com/instance41408/messages/chat',
  headers: {  
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

module.exports = {
    sendWhatsapp: (contactNo) => {
      config.data.to = "+91"+contactNo
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
}