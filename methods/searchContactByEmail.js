const searchContactByEmail = ({ crmData, crmApiKey }) => ({
  method: 'GET',
  path: `contacts/v1/contact/email/${crmData.email}/profile?hapikey=${crmApiKey}`,
});

module.exports = searchContactByEmail;
