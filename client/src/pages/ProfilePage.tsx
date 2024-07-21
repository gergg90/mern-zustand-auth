import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const logOut = useAuthStore((state) => state.logOut);
  const profile = useAuthStore((state) => state.profile);

  console.log(profile);

  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <p>{profile.email}</p>

      <Button variant="destructive" onClick={handleClick}>
        LogOut
      </Button>
    </div>
  );
}

export default ProfilePage;
