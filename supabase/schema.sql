-- Project Center initial schema. Review before applying to your Supabase project.
create extension if not exists pgcrypto;

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category_id uuid references public.categories(id) on delete set null,
  summary text not null default '',
  overview text not null default '',
  problem_statement text not null default '',
  proposed_solution text not null default '',
  objectives text[] not null default '{}',
  working_principle text not null default '',
  hardware_components text[] not null default '{}',
  software_requirements text[] not null default '{}',
  technologies text[] not null default '{}',
  difficulty text not null default 'Intermediate' check (difficulty in ('Beginner','Intermediate','Advanced')),
  estimated_duration text,
  controller text,
  applications text[] not null default '{}',
  advantages text[] not null default '{}',
  limitations text[] not null default '{}',
  future_scope text not null default '',
  image_urls text[] not null default '{}',
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published','unavailable')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','editor')),
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
alter table public.projects enable row level security;
alter table public.admin_profiles enable row level security;

-- Public users can only read published projects and categories.
create policy "Public can read categories" on public.categories
  for select using (true);
create policy "Public can read published projects" on public.projects
  for select using (status = 'published');

-- Admin/editor permissions are checked server-side via admin_profiles.
-- Do not add broad authenticated write policies. Add narrowly scoped policies
-- only after implementing and testing role verification on the server.

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

-- Public read access for published project images; upload/delete policies
-- should be added only for verified admin/editor users.
create policy "Public can view project images" on storage.objects
  for select using (bucket_id = 'project-images');