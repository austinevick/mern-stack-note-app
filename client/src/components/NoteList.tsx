import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import AlertDialog from './AlertDialog'
import { useNote } from '../context/NoteContext'


export const NoteList = () => {
    const { notes, deleteNote, open, setOpen } = useNote()

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
                    handleDelete={() => deleteNote(e._id)}
                />
            </div>)}

        </div>
    )
}
