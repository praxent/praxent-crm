const getSubscriptions = () => ({
  method: 'GET',
  path: `webhooks/v1/${this.appId}/subscriptions`,
});

module.exports = getSubscriptions;
