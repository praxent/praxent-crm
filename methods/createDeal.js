const createDeal = ({ crmData, crmApiKey }) => ({
  method: 'POST',
  path: `deals/v1/deal?hapikey=${data.crmApiKey}`,
  data: crmData,
});

module.exports = createDeal;
