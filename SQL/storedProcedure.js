// CREATE OR REPLACE PROCEDURE delete_book(book_id integer)
// LANGUAGE plpgsql
// AS $$
// BEGIN
//     -- Delete a book from the 'books' table
//     DELETE FROM books WHERE id = book_id;
// END;
// $$;


// CALL delete_book(3);
// CALL delete_book(1);
