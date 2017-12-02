export default function selectBook(book) {
  //selectBook is action creator and it returns action, which has type property and payload (more information about book)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};