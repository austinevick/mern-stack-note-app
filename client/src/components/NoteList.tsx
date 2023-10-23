import { useNote } from '../hooks/useNote'
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export const NoteList = () => {
    const { notes } = useNote()
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
                    <IconButton>
                        <Delete />
                    </IconButton>
                </div>
            </div>)}

        </div>
    )
}
