import { useState } from 'react';
import './App.css';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import AddNoteModal from './components/AddNoteModal';
import { NoteList } from './components/NoteList';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <NoteList />
      <div className="add" onClick={handleOpen}>
        <IconButton >
          <Add sx={{
            fontSize: '50px'
          }} />
        </IconButton>
      </div>
      <AddNoteModal handleClose={handleClose}
        open={open} />
    </div>
  );
}

export default App;
