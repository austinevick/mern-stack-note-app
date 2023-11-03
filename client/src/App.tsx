import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import AddNoteModal from './components/AddNoteModal';
import { NoteList } from './components/NoteList';
import { useDialog } from './hooks/useDialog';

import './App.css';
import { Textfield } from './components/Textfield';

function App() {
  const { open, setOpen } = useDialog()

  return (
    <div className="App">
      <Textfield />
      <div className="add" onClick={() => setOpen(true)}>
        <IconButton >
          <Add sx={{
            fontSize: '25px'
          }} />
        </IconButton>
      </div>
      <AddNoteModal handleClose={() => setOpen(false)}
        open={open} />

      <NoteList />

    </div>
  );
}

export default App;
