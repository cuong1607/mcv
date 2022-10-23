import avatar from "../../image/avatarr.jpg"
import "./styles.css"
export default function Avatar() {
    return (
        <div className="main-avatar">
            <img className="avatar" src={avatar}></img>
            <h3 className="text-name">Đỗ Văn Cường</h3>
        </div>
    )
}