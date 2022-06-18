CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  location varchar(50) NOT NULL,
  username varchar(20) NOT NULL,
  password TEXT NOT NULL,
  date_created timestamp DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO users (first_name,last_name,location,username,password) 
VALUES ('Keron', 'Cyrus','Brazil','kc','123');
INSERT INTO users (first_name,last_name,location,username,password) 
VALUES ('Jon', 'Snow','TnT','jon','123');
INSERT INTO users (first_name,last_name,location,username,password) 
VALUES ('Dianna', 'Prince','wonderwoman','ww','123');