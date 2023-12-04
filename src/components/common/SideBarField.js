function SideBarField({ title, icon, isHovered }) {
    return (
        <div className={`py-3 pl-4 pr-20 rounded-lg justify-start gap-2 flex ${isHovered ? 'bg-pink-400' : ''}`}>
            <div className="mt-0.5">{icon}</div>
            <div className={`font-semibold ${isHovered ? 'text-white' : ''}`}>{title}</div>
        </div>
    )
}

export default SideBarField;