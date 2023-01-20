--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12
-- Dumped by pg_dump version 12.2

-- Started on 2020-05-23 18:11:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2815 (class 0 OID 26134)
-- Dependencies: 199
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, created_user, created_at, updated_user, updated_at, userid, username, password, permissions, departmentpermissions, "position", email, phone, avatar) FROM stdin;
554e0d32-9cdf-11ea-bb37-0242ac130002	admin	2020-05-23 16:54:19.366391	admin	2020-05-23 16:54:19.366391	admin	admin	admin	M003,M003B01,M003B02,M003B03	\N	\N	\N	\N	\N
\.


-- Completed on 2020-05-23 18:11:42

--
-- PostgreSQL database dump complete
--

