import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { UserButton, useUser } from "@clerk/clerk-react";
const Header = () => {
    const {isUser, isSignedIn} = useUser()
  return (
    <div className="px-5 p-3 flex justify-between shadow-md">
      <img src="/logo.svg" width={50} height={50} alt="logo" />
      
      {isSignedIn ? (
        <div className="flex items-center gap-2">
            <Link to='/dashboard'>
            <Button variant="outline">
                Dashboard
            </Button>
            </Link>
            <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
      
      
    
    </div>
  );
};

export default Header;
