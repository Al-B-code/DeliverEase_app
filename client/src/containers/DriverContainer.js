import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import { useUser } from "../contexts/UserContext";

const DriverContainer = () => {

    const { user } = useUser();



    return (
        <>
            <NavBar />
            <Profile />
        </>
    );
}

export default DriverContainer;