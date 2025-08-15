import React from "react";

const AddNoteForm = ({ title, setTitle, desc, setDesc, handleAddNote }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Add New Note</h2>
            <form onSubmit={handleAddNote}>
                <input
                    type="text"
                    placeholder="Note List"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-none rounded-lg px-4 py-2 focus:outline bg-white mb-6"
                />
                <textarea
                    rows="3"
                    placeholder="Note description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full border-none rounded-lg px-4 py-2 mb-7 focus:outline bg-white"
                />
                <button
                    type="submit"
                    disabled={!title.trim()}
                    className="w-full bg-indigo-600 text-white rounded-lg py-3 font-medium hover:bg-indigo-700 disabled:hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                >
                    Add New Note
                </button>
            </form>
        </div>
    );
};

export default AddNoteForm;
