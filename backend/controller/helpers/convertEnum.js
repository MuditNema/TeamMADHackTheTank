const eventTypeEnumerator = ['view','TnC','bookmark','peerReview','downloadRulebook','applied','docUpload','visitSponsor','enquiry','email','reUpload']
function convert(s){
    return eventTypeEnumerator.indexOf(s);
}

module.exports = {eventTypeEnumerator,convert}