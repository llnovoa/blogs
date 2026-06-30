CREATE TABLE "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"autor" text NOT NULL,
	"likes" integer DEFAULT 0 NOT NULL
);
