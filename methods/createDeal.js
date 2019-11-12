const createDeal = (data) => ({
  method: 'POST',
  path: `deals/v1/deal`,
  data,
});

module.exports = createDeal;
