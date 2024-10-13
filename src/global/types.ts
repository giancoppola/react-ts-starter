export type LoadingStatus = 'loading' | 'complete' | 'failed';

export type ExpenseCategory = "training" | "travel" | "meal";
export interface ExpenseData {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: Date;
    categpry: ExpenseCategory;
    status: string;
}