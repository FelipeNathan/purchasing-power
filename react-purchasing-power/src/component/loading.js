import React from 'react'

export default function Loading() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}