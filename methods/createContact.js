const createContact = (data) => ({
  method: 'POST',
  path: `contacts/v1/contact/`,
  data,
});

module.exports = createContact;
