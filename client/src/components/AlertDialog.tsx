import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface Props {
    open: boolean
    handleClose: () => void
    handleDelete: () => void
}


export default function AlertDialog({ handleDelete, handleClose, open }: Props) {

    return (
        <div>
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Delete Note!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this note?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>NO</Button>
                    <Button onClick={handleDelete}>YES</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
