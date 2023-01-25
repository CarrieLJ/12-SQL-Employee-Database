INSERT INTO department (name)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 1, 100000),
        ("Salesperson", 2, 80000),
        ("Lead Engineer", 3, 150000),
        ("Software Engineer", 4, 120000),
        ("Account Manager", 5, 160000),
        ("Accountant", 6, 125000),
        ("Legal Team", 7, 250000),
        ("Lawyer", 8, 190000),

INSERT INTO employee (first_name, last_name, title, department, salary, role_id, manager_id)
VALUES ("John", "Doe", "Sales Lead", "Sales", 1000000, null),
        ("Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe"),
        ("Ashley", "Rodriguez", "Lead Engineer", 150000, null),
        ("Kevin", "Tupik", "Software Engineer", "Finance", 120000, "Ashley Rodriguez"),
        ("Kunal", "Singh", "Account Manager", "Finance", 160000),
        ("Malia", "Brown", "Accountant", "Finance", 125000, "Kunal Singh"),
        ("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, null),
        ("Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd"),


