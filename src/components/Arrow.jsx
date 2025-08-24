export function NextArrow({onClick}){
    return (
    <button
        onClick={onClick}
        className="hidden group-hover:block hover:bg-black/50 absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white py-6 px-1 z-10 duration-100"
    >
        <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="w-4 h-4 text-white"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
    </button>
  )
}

export function PrevArrow({onClick}){
    return(
        <button
            onClick={onClick}
            className="hidden group-hover:block hover:bg-black/50 absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white py-6 px-1 z-10 duration-100"
        >
            <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="w-4 h-4 text-white"><path stroke="none" d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"></path></svg>
        </button>
    )
}

export function NonInfNextArrow({onClick,className}){
    const disabled = className?.includes("slick-disabled");
    return(
        <button
            onClick={onClick}
            className={`${disabled?"hidden":"block"} group-hover:scale-150 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white border-gray-300 border-[1px] rounded-xl px-1 py-1 z-10 duration-100`}
        >
            <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="w-4 h-4 text-gray-500"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
        </button>
    )
}

export function NonInfPrevArrow({onClick,className}){
    const disabled = className?.includes("slick-disabled");
    return(
        <button
            onClick={onClick}
            className={`${disabled?"hidden":"block"} group-hover:scale-150 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-gray-300 border-[1px] rounded-xl px-1 py-1 z-10 duration-100`}
        >
            <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="w-4 h-4 text-gray-500"><path stroke="none" d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"></path></svg>
        </button>
    )
}