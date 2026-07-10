import { INote } from "@/types/app.types";

type INotesStore={
    notes: INote[]
    addNote: (note: INote) => void;
    deleteNote: (id: number) => void;
    markCompleted : (id: number) => void;
}

export { INotesStore };
