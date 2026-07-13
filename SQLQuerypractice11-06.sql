use web_development;
create table Students_ones(
Student_Id int,
Student_Name varchar(40),
City varchar(30),
Course_Id int identity(101,1),
entry_date datetime default getdate()
);

insert into Students_ones(Student_Id,Student_Name,City)
values(1,'Arjun','Vizag');
insert into Students_ones(Student_Id,Student_Name,City)
values(2,'Arun','Kakinada');
insert into Students_ones(Student_Id,Student_Name,City)
values(3,'Raj','Hyd');
insert into Students_ones(Student_Id,Student_Name,City)
values(4,'Nila','Chennai');
insert into Students_ones(Student_Id,Student_Name,City)
values(5,'Sekhar','Vijaywada');
insert into Students_ones(Student_Id,Student_Name,City)
values(6,'Mani','Nellore');
select *from Students_ones;
select*from Courses_one

create table Courses_one(
Course_Id int identity(101,1),
Course_Name varchar(40),
Fees int,
);
select*from Courses_one
insert into Courses_one(Course_Name,Fees)
values('Java',12000);
insert into Courses_one(Course_Name,Fees)
values('Sql',15000);
insert into Courses_one(Course_Name,Fees)
values('Node.js',16000);
insert into Courses_one(Course_Name,Fees)
values('Python',18000);
select *from Students_ones
select*from Courses_one
select A.*,B.* from Students_ones A inner join Courses_one B
on A.Course_Id=B.Course_Id;
select A.*,B.* from Students_ones A full join Courses_one B
on A.Course_Id=B.Course_Id;
select A.*,B.* from Students_ones A right join Courses_one B
on A.Course_Id=B.Course_Id;
select A.*,B.* from Students_ones A left join Courses_one B
on A.Course_Id=B.Course_Id;
select A.*,B.* from Students_ones B right join Courses_one A
on A.Course_Id=B.Course_Id;

alter table courses_one
add constraint pk_Studentss primary key(course_Id);

alter table Students_ones
add constraint fk_courses foreign key(course_Id)
references courses_one(course_Id);

sp_help Students_ones
sp_help courses_one

--union practice
select  course_Id from Students_ones
union
select course_Id from Courses_one

select  course_Id from Students_ones
union all
select course_Id from Courses_one

--exists practice
select Student_Name from Students_ones s
where exists(select *from Courses_one c
where s.Course_Id=c.course_Id);

--any practice
select Student_Name from Students_ones 
where Course_Id=any(
select Course_Id from Courses_one);
--all
select Course_Id ,course_name from  Courses_one 
where Course_Id>all(
select Course_Id from Students_ones );
--not practice
select *from Students_ones 
where not Course_Id=102

select CURRENT_USER
create login Jyothirmai
with password='Jyothi@123'