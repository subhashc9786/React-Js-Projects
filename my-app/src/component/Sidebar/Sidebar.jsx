import React, { useState } from 'react'
import './Sidebar.css'
export const Sidebar = () => {
    const [hide, setHide] = useState(false);

    const handleSidebar = (e) => {
        console.log(e);

        setHide(e)
    }
    return (
        <div className={hide ? `sidebar-container` : `sidebar-container sidebarShow`}>
            <button onClick={(e) => handleSidebar(!hide)}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcss-tricks.com%2Fthree-line-menu-navicon%2F&psig=AOvVaw2_CpkVKrksmjUfdGXJnyyI&ust=1741868432597000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiiirXEhIwDFQAAAAAdAAAAABAE" alt="" />
            </button>
        </div>
    )
}
