use employee_DB;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Vinnie', 'Lopez', 1, NULL),
    ('Chad', 'Tao', 2, 1),
    ('Cyrus', 'Khamneipur', 3, NULL),
    ('Wilson', 'Lam', 4, 3),
    ('Sharlene', 'Minosa', 5, NULL),
    ('Erik', 'Hirsch', 6, 5),
    ('David', 'Gilmour', 7, NULL),
    ('Chris', 'Cornell', 8, 7);