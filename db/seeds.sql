INSERT INTO department (name)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),

INSERT INTO role (title, department_id AS department, salary)
VALUES ("Sales Lead", 1, 100000),
        ("Salesperson", 2, 80000),
        ("Lead Engineer", 3, 150000),
        ("Software Engineer", 4, 120000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3, 125000),
        ("Legal Team", 4, 250000),
        ("Lawyer", 4, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
        ("Mike", "Chan", 2, 1),
        ("Ashley", "Rodriguez", 3, null),
        ("Kevin", "Tupik", 4, 3),
        ("Kunal", "Singh", 5, null),
        ("Malia", "Brown", 6, 5),
        ("Sarah", "Lourd", 7, null),
        ("Tom", "Allen", 8, 7);

