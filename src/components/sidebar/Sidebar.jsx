import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://images.unsplash.com/photo-1606704498347-b31d388685ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYWxsJTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
            <p>
            Gaining a companion in your life is very important.
             A person who can understand your emotions, support you andstand by you in your good and bad times even when everybody turns
               their back on you, a person like that is very much precious.This is whom we call our best friend.
            </p>
        </div>
    
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">life</li>
            <li className="sidebarListItem">music</li>
            <li className="sidebarListItem">tea</li>
            <li className="sidebarListItem">nuddles</li>
            <li className="sidebarListItem">nikki</li>
            <li className="sidebarListItem">khushi</li>
        </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">LETS SEE</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>


    </div>
        </div>
            
        </div>
    )
}
