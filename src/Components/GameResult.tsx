import UserAvatar from "../Pages/UserAvatar";
import withBorder from "./WithBorder";

const BorderWithAvatar = withBorder(UserAvatar);

const GameResult = () => {
  return (
    <div className="h-screen gap-x-6 w-full flex items-center justify-center">
      <UserAvatar />
      <BorderWithAvatar />
      <UserAvatar />
      <UserAvatar />
    </div>
  );
};

export default GameResult;
