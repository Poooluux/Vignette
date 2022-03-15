--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Block; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Block" (
    titre character varying,
    "Image_id " integer,
    id integer NOT NULL,
    "Audio_id" integer,
    "Video_id" integer
);


ALTER TABLE public."Block" OWNER TO postgres;

--
-- Name: Image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Image" (
    "id " integer NOT NULL,
    url character varying
);


ALTER TABLE public."Image" OWNER TO postgres;

--
-- Name: Utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Utilisateur" (
    "idUtilisateur" integer NOT NULL,
    "Email" character varying,
    "MDP" character varying
);


ALTER TABLE public."Utilisateur" OWNER TO postgres;

--
-- Name: Video; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Video" (
    id integer NOT NULL,
    url character varying
);


ALTER TABLE public."Video" OWNER TO postgres;

--
-- Data for Name: Block; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Block" (titre, "Image_id ", id, "Audio_id", "Video_id") FROM stdin;
\.


--
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Image" ("id ", url) FROM stdin;
\.


--
-- Data for Name: Utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Utilisateur" ("idUtilisateur", "Email", "MDP") FROM stdin;
\.


--
-- Data for Name: Video; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Video" (id, url) FROM stdin;
\.


--
-- Name: Block Block_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Block"
    ADD CONSTRAINT "Block_pkey" PRIMARY KEY (id);


--
-- Name: Image Image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id ");


--
-- Name: Utilisateur Utilisateur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("idUtilisateur");


--
-- Name: Video Vidéo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Vidéo_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

