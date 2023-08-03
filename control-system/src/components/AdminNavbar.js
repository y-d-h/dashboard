import { useLocation, Link } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signout } from "service/ApiService";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;

  return (
    <nav className="bg-light-blue-500 md:ml-64 pt-6 pb-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <Icon name="menu" size="2xl" color="white" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <Icon name="close" size="2xl" color="white" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-white text-md tracking-wider mt-1">
            관제시스템
          </h4>

          <div className="flex">
            <Link onClick={() => signout()}>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
                로그아웃
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
