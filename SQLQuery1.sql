create table employees(
emp_id int primary key,
emp_name varchar(100),
salary decimal(10,2),
Deparament varchar(50)
);
insert into employees(emp_id,emp_name,salary,Deparament)
values(101,'Jyothi',35000.00,'HR');
select * from employees;

insert into employees(emp_id,emp_name,salary,Deparament)
values(102,'Raji',35000.00,'HR');
select * from employees;

update employees
set salary=40000
where emp_id=101;