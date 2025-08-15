import React from "react";

const Counters = ({ allCount, completedCount, openCount }) => {
    return (
        <div className="flex justify-between text-gray-600 mb-6">
            <button className="flex items-center gap-2 font-semibold text-indigo-600">
                All <span className="bg-gray-200 px-2 rounded-full">{allCount}</span>
            </button>
            <button className="flex items-center gap-2">
                Completed <span className="bg-gray-200 px-2 rounded-full">{completedCount}</span>
            </button>
            <button className="flex items-center gap-2">
                Open <span className="bg-gray-200 px-2 rounded-full">{openCount}</span>
            </button>
        </div>
    );
};

export default Counters;
