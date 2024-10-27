// app/api/login/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || '798NuJpj6pvYFDc66sUUjSd4u2Psal3BlZKj'; // Use your own secret key

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if the user exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  console.log('mali');
  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
  console.log(token);
  return NextResponse.json({ name:user.name, token });
}
