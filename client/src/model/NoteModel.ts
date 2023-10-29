
export interface NoteResponse {
    status: number;
    data: NoteData[];
}

export interface NoteData {
    title: string;
    content: string;
    _id: string;
    createdAt: Date;
}