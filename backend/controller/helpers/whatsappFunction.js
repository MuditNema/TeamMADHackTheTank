var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    "token": "",
    "to": "+919978900829",
    "body": "This is a general reminder for you to continue your scholarship procedure"
});

var config = {
  method: 'post',
  url: '',
  headers: {  
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

module.exports = {
    sendWhatsapp: () => {
      config.data.to = "+919978900829"
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
}
