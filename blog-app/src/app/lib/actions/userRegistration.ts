'use server';

import { redirect } from 'next/navigation';
import { prisma } from '../prisma';

// ActionStateの型定義
type ActionState = {
  success: boolean;
  errors: { email?: string[]; password?: string[] };
  serverError?: string;
};

export const userRegistration = async (formData: FormData): Promise<ActionState> => {
  // 入力された値を取得
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // DB登録
  // メールアドレスが存在しているかを確認
  const existingRecord = await prisma.userInfo.findUnique({ where: { email: email } });
  if (existingRecord) {
    return { success: false, errors: { email: ['このメールアドレスはすでに登録されています。'], password: [] } };
  }

  await prisma.userInfo.create({
    data: { email, password },
  });

  redirect('/');
};
