export function selectBook(book) {
  // selectBook is an ActionCreator it needs to return an action,
  // an object with a type property.
  // an  action always includes a type and sometimes contains a payload
  // type is ALWAYS an uppercase string seperated by underscores
  // because the spelling of the type is so important is usually a constant imported
  // from another file
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}