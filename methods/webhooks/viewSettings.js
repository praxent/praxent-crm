const viewSettings = (data) => ({
  method: 'GET',
  path: `webhooks/v1/${this.appId}/settings`,
});

module.exports = viewSettings;
