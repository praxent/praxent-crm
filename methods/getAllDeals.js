function getAllDeals({ data, offset }) {
  return {
    method: 'GET',
    path: `deals/v1/deal/paged`,
    query: `?hapikey=${this.apiKey}&includeAssociations=true${data != '' ? `&${data}` : ''}${offset != '' ? `&offset=${offset}` : '' }`,
  }
};

module.exports = getAllDeals;
