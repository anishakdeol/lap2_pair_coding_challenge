DROP TABLE IF EXISTS publish;

CREATE TABLE publish (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL, 
    pseudonym VARCHAR NOT NULL, 
    body VARCHAR NOT NULL
);

INSERT INTO publish (title, pseudonym, body)
VALUES 
('Hello World', 'Test', 'This is a first test message'),
('Hello World', 'Bl', 'This is a Second test message'),
('Hello World', 'Pr', 'This is a Third test message');
