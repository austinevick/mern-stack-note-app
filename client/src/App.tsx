import './App.css';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import AddNoteModal from './components/AddNoteModal';
import { NoteList } from './components/NoteList';
import { useDialog } from './hooks/useDialog';


function App() {
  const { openDialog, setOpen } = useDialog()

  return (
    <div className="App">
      <NoteList />
      <div className="add" onClick={() => setOpen(true)}>
        <IconButton >
          <Add sx={{
            fontSize: '50px'
          }} />
        </IconButton>
      </div>
      <AddNoteModal handleClose={() => setOpen(false)}
        open={openDialog} />

    </div>
  );
}

export default App;
