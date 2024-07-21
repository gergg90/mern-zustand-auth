import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const logOut = useAuthStore((state) => state.logOut);
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Button variant="destructive" onClick={handleClick}>
        LogOut
      </Button>
    </div>
  );
}

export default ProfilePage;
