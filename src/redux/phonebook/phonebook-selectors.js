export const getContacts = state => state.contacts.data;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
};
