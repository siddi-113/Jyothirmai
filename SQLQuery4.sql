create table practices11(
Name varchar(30),
Email varchar(30),
PhoneNumber bigint,
Id int identity(101,1),
Marks float ,
Education text,
City varchar(30)default 'Kakinada'
);
select * from practices11;
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('siri',9874532694,'siri@gmail.com',7.8,'Web development');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('jyothi',9874532694,'jyothi@gmail.com',9.2,'Hello web developer');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('satya',9874532694,'satya@gmail.com',8.3,'Hello GoodMorning');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('lucky',9874533694,'lucky@gmail.com',8.9,'Hello Goodevening');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('mouni',9874532674,'mouni@gmail.com',8.4,'Hello GoodMorning');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('raji',9874532693,'raji@gmail.com',7.9,'Hello Goodafternoon');
insert into practices11(Name,PhoneNumber,Email,Marks,Education)
values('sri',9874532693,'sri@gmail.com',8.9,'Hello Goodafternoon');

select * from practices11
where  Name like '%a';
select * from practices11
where  Name like 'j%i';
select * from practices11
where  Name like '%i';
select * from practices11
where  Name like '_u%';
select * from practices11
where  Name like '[J_s]%';
select * from practices11
where  Id<=5;
select * from practices11
where  Id>=4;
select * from practices11
where  Id=3;
delete practices11 where Id=107;
select *from  practices11;
select top 3 * from practices11
order by marks desc;