const searchContactByEmail = (data) => ({
  method: 'GET',
  path: `contacts/v1/contact/email/${data.email}/profile`,
});

module.exports = searchContactByEmail;
