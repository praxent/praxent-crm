const updateSubscriptions = ({ subscriptionId, data }) => ({
  method: 'PUT',
  path: `webhooks/v1/${this.appId}/subscriptions/${subscriptionId}`,
  data,
});

module.exports = updateSubscriptions;
