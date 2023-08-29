    import React,{ useContext } from "react";
    import { AppContext } from "../context/AppContext";

    export default function Pagination() {
    const {pages, handlePageChange, totalPages} = useContext(AppContext);   

    if (!totalPages) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 bg-[#6d44fc] text-white py-2.5 border-t-2 border-t-gray-300">
        <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
            {pages > 1 && (
            <button
                onClick={() => handlePageChange(pages - 1)}
                className="border-2 border-gray-300 py-1 px-4 rounded-md"
            >
                Previous
            </button>
            )}
            {pages < totalPages && (
            <button
                onClick={() => handlePageChange(pages + 1)}
                className="border-2 border-gray-300 py-1 px-4 rounded-md"
            >
                Next
            </button>
            )}
            <p className="text-sm font-semibold ml-auto">
            Page {pages} of {totalPages}
            </p>
        </div>
        </div>
    );
    }