function getSubscriptions () {
  return {
    method: 'GET',
    path: `webhooks/v1/${this.appId}/subscriptions`,
  }
}

module.exports = getSubscriptions;
