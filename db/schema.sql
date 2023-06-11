-- make business department db --
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db; 

USE business_db; 

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL, 
    name VARCHAR(30),
    PRIMARY KEY (id)
);
-- DEPARTMENT TABLE -- 
-- id INT (PK)-- 
-- name VARCHAR(30) -- 

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30),
    salary DECIMAL, 
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL 
);

-- ROLE TABLE -- 
-- id INT (PK)-- 
-- title VARCHAR(30) -- 
-- salary DECIMAL -- 
-- department_id INT (FK) == connected to department id-- 

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

-- EMPLOYEE TABLE -- 
-- id INT (PK) -- 
-- first_name VARCHAR(100) -- 
-- last_name VARCHAR(100) -- 
-- role_id INT (FK) == connected to role id-- 
-- manager_id INT (FK) == connected to employee id -- 