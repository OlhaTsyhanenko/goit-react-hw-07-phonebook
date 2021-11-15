export const getItems = state => state.contacts.items;
export const getValue = state => state.contacts.filter;

export const getVisibleContacts = state => {
    const allContacts = getItems(state);
    const filter = getValue(state);
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
};