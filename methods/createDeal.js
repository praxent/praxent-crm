const createDeal = (data) => ({
  method: 'POST',
  path: `deals/v1/deal`,
  query: `?hapikey=${this.apiKey}`,
  data,
});

module.exports = createDeal;
