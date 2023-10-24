import { useNote } from '../hooks/useNote'
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { apiClient } from '../services/api'
import AlertDialog from './AlertDialog'
import { useState } from 'react'


export const NoteList = () => {
    const { notes } = useNote()
    const [open, setOpen] = useState(false);


    const deleteNote = async (id: string) => {
        try {
            const response = await apiClient({ endpoint: `note/${id}`, method: 'DELETE' })
            if (response.status === 200) {
                alert('Note was deleted successfully ' + id)
                window.location.reload()
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='notes'>

            {notes?.map((e) => <div key={e._id} className="note-card">
                <div>
                    <div className="title">
                        {e.title}
                    </div>
                    <div className="content">
                        {e.content}
                    </div>
                </div>

                <div className="delete">
                    <IconButton onClick={() => setOpen(true)}>
                        <Delete />
                    </IconButton>
                </div>
                <AlertDialog open={open}
                    handleClose={() => setOpen(false)}
                    handleDelete={() => {
                        setOpen(false)
                        deleteNote(e._id)
                    }}
                />
            </div>)}

        </div>
    )
}
