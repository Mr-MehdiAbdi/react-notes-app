// App.jsx
import './App.css';
import { useState } from "react";

// Components
import AddNoteForm from "./components/ AddNoteForm.jsx"; // Form to add a new note
import NotesList from "./components/NotesList.jsx";     // List of notes
import Header from "./components/ Header.jsx";           // Header with title and sort select box
import Counters from "./components/Counters.jsx";       // Counters: All, Completed, Open

function App() {

    // =======================
    // Main states
    // =======================
    const [title, setTitle] = useState("");  // New note title
    const [desc, setDesc] = useState("");    // New note description
    const [notes, setNotes] = useState([]);  // Array of notes

    // =======================
    // Counters
    // =======================
    const allCount = notes.length;                       // Total notes count
    const completedCount = notes.filter(n => n.completed).length; // Completed notes count
    const openCount = notes.filter(n => !n.completed).length;     // Open notes count

    // =======================
    // Sort select box
    // =======================
    const [sortOrder, setSortOrder] = useState("latest"); // latest: newest first, earliest: oldest first

    // Sorted notes array based on createdAt
    const sortedNotes = [...notes].sort((a, b) => {
        if (sortOrder === "latest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
    });

    // =======================
    // Delete note function
    // =======================
    const handleDeleteNote = (id) => {
        setNotes(prev => prev.filter(n => n.id !== id));
    };

    // =======================
    // Toggle completed status
    // =======================
    const handleToggleCompleted = (id) => {
        setNotes(prev =>
            prev.map(n =>
                n.id === id ? { ...n, completed: !n.completed } : n
            )
        );
    };

    // =======================
    // Add new note function
    // =======================
    const handleAddNote = (e) => {
        e.preventDefault();

        // Validation: check if title and description are not empty
        if (!title.trim() || !desc.trim()) {
            alert("Please fill in the title and description of the note.");
            return;
        }

        const newNote = {
            id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
            title: title.trim(),
            description: desc.trim(),
            completed: false,
            createdAt: new Date().toISOString(), // ISO format for consistent sorting
        };

        // Add new note to the beginning of the notes array
        setNotes(prev => [newNote, ...prev]);

        // Clear form inputs
        setTitle("");
        setDesc("");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">

                {/* Header component */}
                <Header allCount={allCount} sortOrder={sortOrder} setSortOrder={setSortOrder} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {/* Add Note Form component */}
                    <AddNoteForm
                        title={title}
                        setTitle={setTitle}
                        desc={desc}
                        setDesc={setDesc}
                        handleAddNote={handleAddNote}
                    />

                    <div>
                        {/* Counters component */}
                        <Counters allCount={allCount} completedCount={completedCount} openCount={openCount} />

                        {/* Notes List component */}
                        <NotesList
                            notes={sortedNotes}
                            handleDeleteNote={handleDeleteNote}
                            handleToggleCompleted={handleToggleCompleted}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
