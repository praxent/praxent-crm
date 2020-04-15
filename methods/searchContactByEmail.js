function searchContactByEmail(data) {
  return {
    method: 'GET',
    path: `contacts/v1/contact/email/${data.email}/profile`,
    query: `?hapikey=${this.apiKey}`,
  }
};

module.exports = searchContactByEmail;
