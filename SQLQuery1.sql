create table employees1(
emp_id int primary key,
emp_name varchar(100),
salary decimal(10,2),
Deparament varchar(50)
);
insert into employees1(emp_id,emp_name,salary,Deparament)
values(101,'Jyothi',35000.00,'HR');
select * from employees1;

insert into employees1(emp_id,emp_name,salary,Deparament)
values(102,'Raji',35000.00,'HR');
insert into employees1(emp_id,emp_name,salary,Deparament)
values(103,' Mouni',45000.00,'HR');
insert into employees1(emp_id,emp_name,salary,Deparament)
values(104,'Hema',45000.00,'HR');
insert into employees1(emp_id,emp_name,salary,Deparament)
values(105,'lalli',43000.00,'HR');
insert into employees1(emp_id,emp_name,salary,Deparament)
values(  'sai');

select* from employees1
order by salary desc ;
select count (emp_name) as count_name from employees1;

update employees1
set salary=46000
where emp_id=104;
