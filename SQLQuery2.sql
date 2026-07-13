create table register_forms1(
Username varchar(50),
Passwords varchar(50),
Email varchar(50),
PhoneNumber varchar(20),
DateOfBirth date,
);
select *from register_forms1;
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('Jyothirmai','jyo@123','jyo@gmail.com',9879561234, '2005-04-07');
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('Raji','raji@123','raji@gmail.com',9879561235, '2004-09-15');
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('Mouni','mouni@123','mouni@gmail.com',9879561236, '2005-04-03');
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('Hema','hema@123','hema@gmail.com',9879561238, '2002-09-07');
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('lalli','lalli@123','lalli@gmail.com',9879561237, '2004-09-07');
insert into register_forms1(Username,Passwords,Email,PhoneNumber,DateOfBirth)
values('anu','anu@123','anu@gmail.com',9879561239, '2000-08-05');
select*from register_forms1
where Username='Mouni';
select Email as mail from register_forms1
where Username='Mouni';

select IS_SRVROLEMEMBER('sysadmin')
alter server role sysadmin
add member Jyothirmai

create table jyothi(
name varchar(20),
id int
);
insert into jyothi(name,id)
values('siri',1)


create table user1(
name varchar(20),
std_Id int identity(101,1),
Course varchar(20),
Email varchar(20),
City varchar(10)
);
insert into user1(name,Course,Email,City)
values('Sai','Degree','Sai@gamil.com','Kkd');
insert into user1(name,Course,Email,City)
values('Siri','B.tech','Siri@gamil.com','ptp');
insert into user1(name,Course,Email,City)
values('Sri','SSc','Sri@gamil.com','Glp');
select * from user1
