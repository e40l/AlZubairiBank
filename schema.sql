-- جداول مبسطة
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name TEXT,
  phone TEXT UNIQUE,
  password_hash TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE wallet_providers (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE,
  name TEXT,
  description TEXT,
  api_base_url TEXT
);

CREATE TABLE linked_wallets (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  provider_id INT REFERENCES wallet_providers(id),
  provider_user_id TEXT,
  created_at TIMESTAMP DEFAULT now()
);
