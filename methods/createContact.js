function createContact(data) {
  return {
    method: 'POST',
    path: `contacts/v1/contact/`,
    query: `?hapikey=${this.apiKey}`,
    data,
  }
}

module.exports = createContact;
