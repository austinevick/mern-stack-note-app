import { Box, CircularProgress, Modal } from '@mui/material';

interface Props {
    open: boolean
    handleClose: () => void
}
export default function LoadingDialog({ open, handleClose }: Props) {

    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: 2
    };

    return (<div>
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={styles}>
                <CircularProgress />
            </Box>
        </Modal>
    </div>
    );
}
