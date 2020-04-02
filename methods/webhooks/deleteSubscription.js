const deleteSubscriptions = (data) => ({
  method: 'DELETE',
  path: `webhooks/v1/${this.appId}/subscriptions/${data.subscriptionId}`,
});

module.exports = deleteSubscriptions;
