/*
  # Initial Database Schema for Cœur Numérique

  ## Overview
  Creates the core tables for the Cœur Numérique platform, supporting quote requests,
  donation tracking, and ecological impact counter.

  ## New Tables
  
  ### `quote_requests`
  Stores service quote requests from customers for REVITALISER and MODIFIER services
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Request timestamp
  - `first_name` (text) - Customer first name
  - `last_name` (text) - Customer last name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `device_type` (text) - Type of device (PC, Console, etc.)
  - `description` (text) - Detailed description of needs
  - `service_type` (text) - Either 'revitaliser' or 'modifier'
  - `interested_in_donation` (boolean) - Whether customer wants to participate in donation program

  ### `donations`
  Tracks device donations from the community
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Donation timestamp
  - `first_name` (text) - Donor first name
  - `last_name` (text) - Donor last name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `device_type` (text) - Type of donated device
  - `device_condition` (text) - Condition description
  - `notes` (text) - Additional notes

  ### `ecological_counter`
  Maintains the count of devices saved from landfill
  - `id` (uuid, primary key) - Unique identifier
  - `devices_saved` (integer) - Total count of devices saved
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Allow anonymous INSERT for quote_requests and donations (public forms)
  - Allow anonymous SELECT for ecological_counter (public display)
  - No UPDATE or DELETE permissions for public users (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  device_type text NOT NULL,
  description text NOT NULL,
  service_type text NOT NULL CHECK (service_type IN ('revitaliser', 'modifier')),
  interested_in_donation boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  device_type text NOT NULL,
  device_condition text NOT NULL,
  notes text DEFAULT ''
);

CREATE TABLE IF NOT EXISTS ecological_counter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  devices_saved integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecological_counter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous to submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous to submit donations"
  ON donations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow everyone to view ecological counter"
  ON ecological_counter
  FOR SELECT
  TO anon
  USING (true);

INSERT INTO ecological_counter (devices_saved) VALUES (127)
ON CONFLICT DO NOTHING;
