
BEGIN;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(18) NOT NULL,
    last_name VARCHAR(18),
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

INSERT INTO users(first_name,last_name,email,password) VALUES ('ALAA2','BADRA2','alaabadra2@hotmail.com','1232'); 
-- INSERT INTO users(first_name,last_name,email,password) VALUES ('ALAA3','BADRA3','alaabadra3@hotmail.com','12323'); 

COMMIT;