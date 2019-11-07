const createContact = ({ crmData, crmApiKey }) => ({
  method: 'POST',
  path: `contacts/v1/contact/?hapikey=${data.crmApiKey}`,
  data: crmData,
});

module.exports = createContact;
