use web_development;
create table Students_Details(
Student_Name varchar(30),
Reg_Number int identity(101,1),
City varchar(30),
Course varchar (30),
Fees int,
Registration_Date datetime default getdate()
);
select *from Students_Details
insert into Students_Details(Student_Name,City,Course,Fees)
values('Arjun','Hyderbad','Java',10000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Ajay','Hyderbad','Java',12000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Raju','Hyderbad','Java',14000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Priya','Chennai','Sql',15000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Pavani','Chennai','Sql',12000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Satya','Mumbai','Sql',12000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Sri','Mumbai','Sql',14000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('syamala','Mumbai','HTML',10000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Vedha','Pune','HTML',13000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Veni','Pune','HTML',13000);
insert into Students_Details(Student_Name,City,Course,Fees)
values('Viraj','Pune','HTML',11000);

select  count (*) as Count, city, sum(Fees) as Total_Fees from Students_Details
group by city
having sum(Fees)<30000;

 select top 3 * from Students_Details
 order by Student_Name asc;
 select *from Students_Details