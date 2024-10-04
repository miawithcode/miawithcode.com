DO $$ BEGIN
 CREATE TYPE "public"."category" AS ENUM('inspirations', 'ui', 'technologies', 'svg', 'fonts', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link" text NOT NULL,
	"image_url" text NOT NULL,
	"category" "category" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
