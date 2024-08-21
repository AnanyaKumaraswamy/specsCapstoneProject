
Hello,

For my capstone project i have developed a yoga accessories e-commerce web application using react JS, express server and postgress database.

This application has home, products and cart page, and modals for checkout and order confirmation.

Database has 3 tables:
Menu table (products)
Order table
Order Items table

Below is schema for the 3 tables:

create DATABASE   "anaYogaEssentials_CapstoneProject";--

CREATE TABLE public.menus (
    "ItemID" integer NOT NULL,
    "ItemName" character varying(255),
    "ItemDescription" character varying(255),
    "ImageURL" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    itemprice double precision,
    category integer
);

CREATE TABLE public.orders (
    "OrderID" integer NOT NULL,
    "OrderNumber" character varying(255),
    "OrderName" character varying(255),
    "OrderEmail" character varying(255),
    "OrderAddress" character varying(255),
    "OrderCity" character varying(255),
    "OrderZIP" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "CardNumber" double precision,
    "CardExpiry" character varying(255),
    "CardCVV" integer
);

CREATE TABLE public."orderItems" (
    "OrderItemID" integer NOT NULL,
    "OrderID" integer,
    "ItemID" integer,
    "ItemQuantity" integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);