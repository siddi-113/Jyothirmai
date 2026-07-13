create table practice10(
Name varchar(50),
Email varchar(30),
PhoneNumber bigint,
City varchar(20)
);
select *from practice10;
insert into practice10(Name,Email,PhoneNumber,City)
values('sri','sri@gmail.com',9874532693,'Hyderbad');
insert into practice10(Name,Email,PhoneNumber,City)
values('siri','siri@gmail.com',9874533693,'Vizag');
insert into practice10(Name,Email,PhoneNumber,City)
values('sravya','sravya@gmail.com',9874532694,'Kkd');
insert into practice10(Name,Email,PhoneNumber,City)
values('srinu','srinu@gmail.com',9874532683,'Mumbai');
insert into practice10(Name,Email,PhoneNumber,marks)
values('surya','surya@gmail.com',9874532653 ,87);
--truncate table practice10;
alter table practice10
add marks int;
update practice10
set marks=80
where City='Mumbai';
update practice10
set City='Chennai'
where Name='srinu';
select *from practice10
select avg(marks)as Marks from practice10
group by city

--add constarint with after creating table

alter table practice10
alter column marks int not null;
alter table practice10
add constraint pk_Studentss primary key(marks);
alter table practice10
add constraint uk_Studentss unique(name);
--alter table practice10
--drop constraint uk_Studentss;
select *from practice10
alter table practice10
add constraint df_error default 'Kkd' for City
alter table practice10
add constraint ck_name check(name like 's%')
insert into practice10(Name,Email,PhoneNumber,marks)
values('suji','suji@gmail.com',9774532653 ,82);

sp_help practice10

--constarint example with create table

create table practice2(
Emp_Id int primary key,
Emp_Name varchar(30) unique,
Salary int check (salary>15000),
City varchar (20) default 'Vizg'
);
select *from practice2;
insert into practice2(Emp_Id,Emp_Name,Salary)
values(101,'Suresh',16000);
insert into practice2(Emp_Id,Emp_Name,Salary)
values(102,'Ramesh',17000);
sp_help practice2

alter table practice2
drop constraint  PK__practice__262359AB35DCF731;
alter table  practice2
add  constraint PK__practice__262359AB35DCF731
primary key (Emp_Id)

--floor,ceil,round example
select floor(8.3)as value 
select ceiling(8.3)as value
select round(8.3877,4)as value

create table products1(
product_Id int identity,
product_Price decimal(10,2)
);
insert into products1(product_Price)
values(89.08);
insert into products1(product_Price)
values(99.35);
insert into products1(product_Price)
values(183.52);
insert into products1(product_Price)
values(305.7599);

select Product_Id,Product_Price ,
floor(product_Price)as floor_price,
ceiling(product_Price) as ceiling_price,
round(product_Price,3) as round_price
from products1

--case example
create table datas(
Name varchar(30),
City varchar(20)
);
insert into datas(name,city)
values('ravi','Kkd');
insert into datas(name,city)
values('rani','hyd');
insert into datas(name,city)
values('raju','Vizg');
select name,city,
case 
when city='hyd' then 'local'
end as status 
from datas;
--avg,sum,min,max practice
create table markss(
Name varchar(30),
fees int
);
insert into markss(name,fees)
values('ravi',12000);
insert into markss(name,fees)
values('raj',14000);
insert into markss(name,fees)
values('kumar',18000);
insert into markss(name,fees)
values('rani',10000);
select *from markss
select max(fees)as maxfee,min(fees)as minfee , 
avg(fees) as avgfee , sum(fees) as sumfee from markss;
