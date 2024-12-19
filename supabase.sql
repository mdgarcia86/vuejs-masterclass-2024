drop table if exists projects;
drop type if exists current_status;

create type current_status as enum ('in-progress','completed');

create table
  Projects (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    name text not null,
    slug text unique not null,
    status current_status default 'in-progress' not null,
    collaborators text array default array[]::varchar[] not null
  );

  insert into projects (name, slug) values ('project one', 'project-one');