import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="setting" >
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">update your account</span>
                    <span className="settingDeleteTitle">Delete account</span>
                </div>
                <form className="settingForm">
                    <label>profile picture</label>
                    <div className="settingPP">
                        <img
                            src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>

                        </label>
                        <input type="file" id="fileInput" style={{ display: "none"}}
                        />
                </div>
                <label>Username</label>
                <input type="text" placeholder="enter your name here"/>
                <label>Email</label>
                <input type="email" placeholder="enter your email here"/>
                <label>Password</label>
                <input type="password" placeholder="enter your password here"/>
                <button className="settingSubmit">update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
