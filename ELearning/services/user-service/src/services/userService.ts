import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const getAllUsers = async () => {
  const result = await pool.query('SELECT id, email, first_name, last_name, role, created_at FROM users');
  return result.rows;
};

export const getUserByIdService = async (id: number) => {
  const result = await pool.query('SELECT id, email, first_name, last_name, role, created_at FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

export const createUserService = async (userData: any) => {
  const { email, password, first_name, last_name, role } = userData;
  const password_hash = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, first_name, last_name, role, created_at',
    [email, password_hash, first_name, last_name, role || 'student']
  );
  return result.rows[0];
};
