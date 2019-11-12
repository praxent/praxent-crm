const axios = require('axios');

const createContact = require('../methods/createContact');
const createDeal = require('../methods/createDeal');
const searchContactByEmail = require('../methods/searchContactByEmail');

class HubspotIntegration {
  constructor(props) {
    this.url = props.url;

    this.createContact = createContact;
    this.createDeal = createDeal;
    this.searchContactByEmail = searchContactByEmail;
  }

  async execute({ method, path, data }) {
    const request = {
      method,
      url: `${this.url}/${path}`,
    };

    if (method === 'POST') {
      request.data = JSON.stringify(data);
      request.headers = {
        'Content-Type': 'application/json',
      };
    }

    const response = await axios(request);
    return response;
  }

  async run({ action, data }) {
    const response = await this.execute(this[action](data));
    return response;
  }
}

const hubspotIntegration = new HubspotIntegration({
  url: 'https://api.hubapi.com',
});

module.exports = hubspotIntegration;
