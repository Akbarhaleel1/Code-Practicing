// CREATE TABLE orders (
//     order_id SERIAL PRIMARY KEY,
//     order_details TEXT,
//     last_modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
// );


// CREATE OR REPLACE FUNCTION update_last_modified()
// RETURNS TRIGGER AS $$
// BEGIN
//     -- Update the last_modified column to the current timestamp
//     NEW.last_modified = CURRENT_TIMESTAMP;
//     RETURN NEW;
// END;
// $$ LANGUAGE plpgsql;


// CREATE TRIGGER trigger_update_last_modified
// BEFORE UPDATE ON orders
// FOR EACH ROW
// EXECUTE FUNCTION update_last_modified();


// -- Insert a new order
// INSERT INTO orders (order_details) VALUES ('First order');

// -- Update the order
// UPDATE orders SET order_details = 'Updated order' WHERE order_id = 1;

// -- Select to verify the last_modified timestamp has been updated
// SELECT * FROM orders;
