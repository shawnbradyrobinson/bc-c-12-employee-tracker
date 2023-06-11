-- DEPARTMENTS -- 
INSERT INTO departments (name)
VALUES ("Human Resources"),
("Marketing"),
("Engineering"),
("Finances"),
("Legal"),
("Research and Development");
-- ROLES -- 
INSERT INTO roles(title, salary, department_id)
VALUES ("Marketing Lead", 125000.00, 2),
("Marketing Team Member", 55000.00, 2),
("Engineer III", 125000.00, 3),
("Engineer II", 95000.00, 3),
("Engineer I", 70000.00, 3),
("Benefits", 60000.00, 1),
("Accountant", 650000.00, 4),
("Talent Acquistion", 60000.00, 1),
("Account Manager", 100000.00, 4),
("Legal Team Lead", 175000.00, 5),
("Lawyer", 135000.00, 5),
("Paralegal", 55000.00, 5),
("Research Team Lead", 100000.00, 6),
("Researcher", 95000.00, 6);

-- EMPLOYEES -- 

INSERT INTO employees(first_name, last_name, role_id)
VALUES ("Winnie", "Huffman", 1),
("Chris", "Ashley", 2),
("Khalani", "Lindsey", 2),
("Jayson", "Rose", 3),
("Keegan", "Glover", 3),
("Leo", "Carson", 4),
("Mayah", "Woodward", 5),
("Justin", "Glover", 6),
("Hana", "O'Neal", 7),
("Cole", "Hurst", 8),
("Jasmine", "Castro", 9),
("Brodie", "Hicks", 10),
("Axl", "May", 11),
("Callan", "Gomez", 12),
("Nancy", "Strong", 13),
("Adalee", "Felix", 14),
("Jasper", "Best", 3),
("Alina", "Campos", 6),
("Lennon", "Presley", 9),
("Forest", "Logan", 7);

