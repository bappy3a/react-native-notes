export type INote = {
    id: number;
    title: string;
    descripton: string;
    date: string|null;
    category: string|null;
    isCompleted: boolean;
};