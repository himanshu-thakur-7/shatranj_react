import Avatar from "./Avatar";
import LogoutButton from "./LogoutButton";
import UserName from "./UserName";

export default function TopBar() {
    return <div className="flex items-stretch">
        <div className="m-2">
            <Avatar />
        </div>
        <div className="m-2 mt-4 font-poppins text-green-700 text-md">
            <UserName />
        </div>
        <div className="ml-auto mt-4 mr-4 text-green-700 text-md">
            <LogoutButton />
        </div>
    </div>
}