import { useEffect, useState } from "react";
import { apiClient } from "../services/api";

export interface NoteResponse {
    status: number;
    data: NoteData[];
}

export interface NoteData {
    title: string;
    content: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export const useNote = () => {
    const [notes, setNotes] = useState<NoteData[]>([])

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await apiClient({
                    endpoint: 'note',
                    method: 'GET'
                })
                const data: NoteResponse = await response.json()
                console.log(data.data);
                setNotes(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchNotes()
    }, [])

    return { notes }
}