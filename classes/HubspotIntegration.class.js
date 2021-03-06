const axios = require('axios');

const createContact = require('../methods/createContact');
const createDeal = require('../methods/createDeal');
const searchContactByEmail = require('../methods/searchContactByEmail');
const getAllDeals = require('../methods/getAllDeals');

const viewSettings = require('../methods/webhooks/viewSettings');
const updateSettings = require('../methods/webhooks/updateSettings');
const createSubscription = require('../methods/webhooks/createSubscription');
const getSubscriptions = require('../methods/webhooks/getSubscriptions');
const updateSubscription = require('../methods/webhooks/updateSubscription');
const deleteSubscription = require('../methods/webhooks/deleteSubscription');

class HubspotIntegration {
  constructor(props) {
    this.url = props.url;
    this.apiKey = props.apiKey;
    this.appId = props.appId;

    this.createContact = createContact;
    this.createDeal = createDeal;
    this.searchContactByEmail = searchContactByEmail;
    this.getAllDeals = getAllDeals;

    this.viewSettings = viewSettings.bind(this);
    this.updateSettings = updateSettings.bind(this);
    this.createSubscription = createSubscription.bind(this);
    this.getSubscriptions = getSubscriptions.bind(this);
    this.updateSubscription = updateSubscription.bind(this);
    this.deleteSubscription = deleteSubscription.bind(this);
  }

  async execute({ method, path, data, query }) {
    const request = {
      method,
      url: `${this.url}/${path}${query ? query : ''}`,
    };

    if (['POST', 'PUT'].includes(method)) {
      request.data = JSON.stringify(data);
      request.headers = {
        'Content-Type': 'application/json',
      };
    }

    const response = await axios(request);
    return response;
  }

  async fetch({ action, data }) {
    const response = await this.execute(this[action](data));
    return response;
  }
}

module.exports = ({ apiKey, appId }) => new HubspotIntegration({
  url: 'https://api.hubapi.com',
  apiKey,
  appId,
});
