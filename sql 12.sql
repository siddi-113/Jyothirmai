create table user12(
name varchar(50),
Id int identity(101,1),
City varchar(30),
Email varchar(50),
PhoneNumber varchar(20),
DateOfBirth date
);
insert into user12(name,City,Email,PhoneNumber,DateOfBirth)
values('anu','hyd','anu@gmail.com',9879561239, '2000-08-05')
insert into user12(name,City,Email,PhoneNumber,DateOfBirth)
values('raj','kkd','raj@gmail.com',9879861239, '2003-09-25');
insert into user12(name,City,Email,PhoneNumber,DateOfBirth)
values('sri','Vizag','sri@gmail.com',9989561239, '2000-03-15');

select *from user12;