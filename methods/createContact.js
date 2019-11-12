const createContact = ({ crmData, crmApiKey }) => ({
  method: 'POST',
  path: `contacts/v1/contact/?hapikey=${crmApiKey}`,
  data: crmData,
});

module.exports = createContact;
