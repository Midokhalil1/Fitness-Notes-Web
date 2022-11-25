import { Link } from "react-router-dom"
import { Button } from "antd"
export default function Header() {
    return(
        <ul className="header-container">
            <a href="/">Home</a>
           
            <Link to={'/add-new'}>
            <Button type="link" htmlType="button">
                Add Notes
            </Button>
            </Link>
            <Link to={'/sign-in'}>
            <Button type="link" htmlType="button">
                Sign-in
            </Button>
            </Link>
            {/* <a href="/add note">Add Note</a> */}
        </ul>
    )
}