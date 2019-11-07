const axios = require('axios');

const createContact = require('../methods/createContact');
const createDeal = require('../methods/createDeal');

class HubspotIntegration {
  constructor(props) {
    this.url = props.url;

    this.createContact = createContact;
    this.createDeal = createDeal;
  }

  async execute({ method, path, data }) {
    try {
      const response = await axios({
        method,
        url: `${this.url}${path}`,
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async run({ action, data }) {
    const response = await this.execute(this[action](data));
    return response;
  }
}

const hubspotIntegration = new HubspotIntegration({
  url: process.env.url,
});

module.exports = hubspotIntegration;
