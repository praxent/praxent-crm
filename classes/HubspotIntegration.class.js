const axios = require('axios');

const createContact = require('../methods/createContact');
const createDeal = require('../methods/createDeal');
const searchContactByEmail = require('../methods/searchContactByEmail');

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

    this.webhooks = {
      settings: {
        view: viewSettings,
        update: updateSettings,
      },
      subscriptions: {
        create: createSubscription,
        get: getSubscriptions,
        update: updateSubscription,
        delete: deleteSubscription,
      }
    }
  }

  async execute({ method, path, data, query: '' }) {
    const request = {
      method,
      url: `${this.url}/${path}${query}`,
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

module.exports = ({ apiKey }) => new HubspotIntegration({
  url: 'https://api.hubapi.com',
  apiKey,
  appId,
});
