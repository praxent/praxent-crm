function updateSettings(data) {
  return {
    method: 'PUT',
    path: `webhooks/v1/${this.appId}/settings`,
    data,
  }
}

module.exports = updateSettings;
