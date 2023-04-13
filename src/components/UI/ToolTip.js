const ToolTip = (props) => {
    const { message, children } = props
    return (
        <>
            <div className="group relative flex">
                {children}
                <span className="absolute top-10 scale-0 transition-all rounded bg-neutral-700 p-2 text-xs text-white group-hover:scale-100">{message}
                </span>
            </div>
        </>
    )
}

export default ToolTip