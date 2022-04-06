DROP TABLE IF EXISTS publish;

CREATE TABLE publish (
    id serial PRIMARY KEY,
    title VARCHAR(255),
    pseudonym VARCHAR(25),
    body VARCHAR(500),
);
