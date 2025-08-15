import React from "react";

const NoteCard = ({ note, handleDeleteNote, handleToggleCompleted }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 block w-full">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <p className="text-gray-600 text-sm">{note.description}</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        className="text-pink-500 hover:text-pink-700 text-xl transition-colors duration-200 p-1 rounded-full hover:bg-pink-100"
                        type="button"
                        onClick={() => handleDeleteNote(note.id)}
                    >
                        ❌
                    </button>
                    <input
                        type="checkbox"
                        checked={note.completed}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition duration-150"
                        onChange={() => handleToggleCompleted(note.id)}
                    />
                </div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">
                    {new Date(note.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </div>
        </div>
    );
};

export default NoteCard;
