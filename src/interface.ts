// 収入のカテゴリ
export type incomeCategory = '給料' | 'おこづかい' | '賞与' | '臨時収入' | 'その他';
// 支出のカテゴリ
export type expensesCategory = '食費' | '日用品' | '衣服' | '美容' | '交際費' | '医療費' | '教育費' | '光熱費' | '交通費' | '通信費' | '住居費' | 'その他';

export interface MoneyItem {
  isIncome: boolean;  // 収入かどうか
  category: incomeCategory | expensesCategory;  // カテゴリ
  id: string;  // id
  title: string;  // title
  memo: string;  // memo
  amount: number;  // 金額
  date: string;  // 日付
  isDateOfPreviosItem: boolean; //前のアイテムの日付と同じか
}


export interface InputProps {
  buttonName: string;
  buttonColor?: string;
  tileNames: string[];
  toNext: string;
  isUpdate: boolean;
  isIncome? :boolean;
}