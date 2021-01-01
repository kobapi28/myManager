// 収入のカテゴリ
export type incomeCategory = 'work';
// 支出のカテゴリ
export type expensesCategory = 'eat' | 'buy';

export interface MoneyItem {
  isIncome: boolean;  // 収入かどうか
  category: incomeCategory | expensesCategory;  // カテゴリ
  memo?: string;  // memo
  amount: number;  // 金額
  date: string;  // 日付
}