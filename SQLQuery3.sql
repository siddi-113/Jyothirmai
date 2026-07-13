use web_development;
create table practice_two(
Username varchar(50),
Id int identity(1,1),
PhoneNumber bigint,
Email varchar(30),
Gender char,
Logintime time
);
select *from practice_two;
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('sai',9874532692,'sai@gmail.com','m','12:32:56');
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('siri',9874532694,'siri@gmail.com','f','12:55:56');
insert into practice_two(Username,Email,Gender,Logintime)
values('teju','teju@gmail.com','f','01:39:35');
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('anu',9874532652,'anu@gmail.com','f','01:25:35');
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('nani',9874533652,'nani@gmail.com','m','01:15:35');
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('balu',9878533652,'balu@gmail.com','m','01:55:55');
insert into practice_two(Username,PhoneNumber,Email,Gender,Logintime)
values('saras',9878533652,'saras@gmail.com','m','02:25:55');
insert into practice_two(Username,PhoneNumber,Gender,Logintime)
values('banti',9878533652,'m','01:55:55');
insert into practice_two(Username,PhoneNumber,Gender,Email)
values('sailu',9878933652,'m','saili@gmail.com');
alter table  practice_two
add Date date;
update  practice_two
set date= '2001-05-20'
where Username='siri';
select  Username,Id,Email,PhoneNumber,Gender, Date,Logintime as Time  from  practice_two
where  Date  is not null and PhoneNumber is not null;
--select *from practice_two
--where Id between 1 and 6;
select *from practice_two
where Date between '2001-05-20' and '2004-04-09';
alter table practice_two
alter column PhoneNumber varchar(30);




