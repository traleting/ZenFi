/*
# Create enquiries and coverage_checks tables (single-tenant, no auth)

1. New Tables
- `enquiries` — general contact form submissions (name, phone, email, address, message)
- `coverage_checks` — coverage lookup requests (full address, town/suburb, phone number)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms, but cannot read back submissions).
- No SELECT/UPDATE/DELETE policies — submissions are private to the company.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  address text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS coverage_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_address text NOT NULL,
  town_suburb text NOT NULL,
  phone_number text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE coverage_checks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_coverage_checks" ON coverage_checks;
CREATE POLICY "anon_insert_coverage_checks" ON coverage_checks FOR INSERT
  TO anon, authenticated WITH CHECK (true);
