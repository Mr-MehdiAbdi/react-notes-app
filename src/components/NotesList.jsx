import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, handleDeleteNote, handleToggleCompleted }) => {
    if (notes.length === 0) {
        return <p className="text-gray-500 text-center">No notes added yet.</p>;
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    note={note}
                    handleDeleteNote={handleDeleteNote}
                    handleToggleCompleted={handleToggleCompleted}
                />
            ))}
        </div>
    );
};

export default NotesList;
