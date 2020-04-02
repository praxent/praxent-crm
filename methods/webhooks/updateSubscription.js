function updateSubscriptions({ subscriptionId, data }) {
  return {
    method: 'PUT',
    path: `webhooks/v1/${this.appId}/subscriptions/${subscriptionId}`,
    data,
  }
}

module.exports = updateSubscriptions;
