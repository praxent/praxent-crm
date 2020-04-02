function viewSettings(data) {
  return {
    method: 'GET',
    path: `webhooks/v1/${this.appId}/settings`,
  }
}

module.exports = viewSettings;
