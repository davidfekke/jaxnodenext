const axios = require('axios');

async function getNextMeeting() {
    const resp = await axios.get('https://www.jaxnode.com/v1/api/meeting');
    return resp.data;
}

module.exports = getNextMeeting;
