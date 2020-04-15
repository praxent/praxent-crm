function createDeal(data) {
  return {
    method: 'POST',
    path: `deals/v1/deal`,
    query: `?hapikey=${this.apiKey}`,
    data,
  }
};

module.exports = createDeal;
