import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return <>
        <section className="games">
            <nav className="bg-gray-800  w-full top-0  z-30  md:w-2/3 lg:w-3/4 mx-auto rounded-lg ">
                <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
                    <a aria-current="page" className="active" href="/">
                        <h5 className=" text-uppercase mb-0 flex items-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABmCAYAAADBPx+VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzM0FEQkY3NENFMTFFQUEwNTdDNERGM0IyRkZBRTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzM0FEQkU3NENFMTFFQUEwNTdDNERGM0IyRkZBRTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTE0N0U0QzIyMkUxMUVBOEYzQUU1QzM0RDQ4M0Q1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTE0N0U0RDIyMkUxMUVBOEYzQUU1QzM0RDQ4M0Q1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv+w73MAAAxESURBVHja7F17bFZn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" alt="logo photo" className="max-w-xs" style={{ maxWidth: 40 }} />
                            Game Reviews</h5></a>
                    <button onClick={toggleNavbar} className=" md:hidden" type="button">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12 ' : "M4 6h16M4 12h15m-7 6h7"} />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' :'hidden'} w-full md:flex md:items-center md:w-auto`} id="navbarSupportedContent">
                        <ul className="flex flex-col md:flex-row md:ml-auto space-y-2 md:space-y-0 md:space-x-4">
                            <a className href="/Mmorpg">
                                <button className="nav-link active text-uppercase" aria-current="page" data-category="mmorpg">mmorpg</button></a>
                            <a className href="/Shooter">
                                <button className="nav-link text-uppercase" data-category="shooter">shooter</button></a>
                            <a className href="/Sailing">
                                <button className="nav-link text-uppercase" data-category="sailing">sailing</button></a>
                            <a className href="/Permadeath">
                                <button className="nav-link text-uppercase" data-category="permadeath">permadeath</button></a>
                            <a className href="/Superhero">
                                <button className="nav-link text-uppercase" data-category="superhero">superhero</button></a>
                            <a className href="/Pixel"><button className="nav-link text-uppercase" data-category="pixel">pixel</button></a>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto my-5">
                <section className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="gameData" />
                </section>
            </main>
        </section>
    </>
}
