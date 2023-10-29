import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LoadingDialog from './LoadingDialog';
import { useNote } from '../context/NoteContext';

interface Props {
    open: boolean
    handleClose: () => void
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
};

export default function AddNoteModal({ handleClose, open }: Props) {
    const { addNote, open: openDialog, setOpen } = useNote()
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addNote(title, content, handleClose)
    }

    return (
        <div >
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}>
                <Fade in={open}>
                    <Box sx={style} >
                        <h3 > Add Note </h3>
                        <form onSubmit={handleSubmit} className='form'>
                            <input type="text"
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input type="text"
                                placeholder='Content'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <button> Submit</button>
                        </form>
                        <LoadingDialog open={openDialog} handleClose={() => setOpen(false)} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

