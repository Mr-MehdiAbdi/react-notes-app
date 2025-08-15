import React from "react";

const Header = ({ allCount, sortOrder, setSortOrder }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-3 mb-4">
            <h1 className="text-xl font-bold text-gray-800">
                My Notes ({allCount})
            </h1>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="mt-3 sm:mt-0 border rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none"
            >
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
            </select>
        </div>
    );
};

export default Header;
