const createSubscription = (data) => ({
  method: 'POST',
  path: `webhooks/v1/${this.appId}/subscriptions`,
  data,
});

module.exports = createSubscription;
