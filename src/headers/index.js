import Avatar from "./avatar/avatar";
import Information from "./information";
import "./styles.css"


export default function Header() {
    return (
        <div className="main-header">
            <div>
                <Avatar />
            </div>
            <div>
                <Information />
            </div>
        </div>
        
    )
}