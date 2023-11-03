import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { NoteData, NoteResponse } from '../model/NoteModel';
import { apiClient } from '../services/api';
import { useDialog } from '../hooks/useDialog';

type NoteAppProviderProps = {
    children: ReactNode
}
type NoteContextProps = {
    notes: NoteData[]
    open: boolean
    loading: boolean
    addNote: (title: string, content: string, handleClose: () => void) => void
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    deleteNote: (id: string) => void
    updateNote: (id: string) => void
}

const NoteContext = createContext({} as NoteContextProps)

export function useNote() {
    return useContext(NoteContext)
}


export function NoteAppProvider({ children }: NoteAppProviderProps) {
    const [notes, setNotes] = useState<NoteData[]>([])
    const { open, setOpen } = useDialog()
    const [loading, setIsLoading] = useState(false)

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
    useEffect(() => {
        fetchNotes()
    }, [])

    const addNote = async (title: string, content: string, handleClose: () => void) => {
        try {
            setIsLoading(true)
            const response = await apiClient({
                endpoint: 'note',
                method: "POST", body: {
                    'title': title,
                    'content': content
                }
            })
            if (response.status === 201) {
                setIsLoading(false)
                handleClose()
                window.location.reload()
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }


    const deleteNote = async (id: string) => {

        try {
            const response = await apiClient({ endpoint: `note/${id}`, method: 'DELETE' })
            if (response.status === 200) {
                fetchNotes()
            }
            setOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    async function updateNote(id: string) {

    }


    return <NoteContext.Provider value={{
        notes,
        open,
        loading,
        setIsLoading,
        addNote,
        setOpen,
        deleteNote,
        updateNote
    }}>
        {children}</NoteContext.Provider>
}