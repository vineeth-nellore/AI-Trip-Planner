import React, { useEffect, useState } from "react";
import { Button } from "../button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  // const navigation = useNavigation();
  useEffect(() => {
    console.log(user);
  }, []);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => {
      console.log(error);
    },
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpenDailog(false);
        window.location.reload();
      });
  };
  const [openDailog, setOpenDailog] = useState(false);
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>
        {user ? (
          <div className="flex items-center gap-5 h-[40px]">
            {/* <Button variant="clean" className="rounded-full">My Trips</Button> */}
            <a href="/create-trip">
            <Button
              variant="ghost"
              className="!bg-transparent !text-black !border !border-black h-[30px] px-4 !rounded-full text-sm hover:bg-gray-100"
            >
              Create Trip
            </Button>
            </a>
            <a href="/my-trips">
            <Button
              variant="ghost"
              className="!bg-transparent !text-black !border !border-black h-[30px] px-4 !rounded-full text-sm hover:bg-gray-100"
            >
              My Trips
            </Button>
            </a>
            <Popover>
              {/* <PopoverTrigger variant="ghost" className="!bg-transparent !text-black  h-[30px] px-4 rounded-full text-sm hover:bg-gray-100">
                <img
                  src={user?.picture}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
              </PopoverTrigger> */}
              <PopoverTrigger asChild>
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden border border-black cursor-pointer">
                  <img
                    src={user?.picture}
                    className="w-full h-full object-cover"
                    alt="User Avatar"
                  />
                </div>
              </PopoverTrigger>

              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => {
              setOpenDailog(true);
            }}
          >
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="text-lg font-bold mt-7">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely.</p>
              <Button
                //disabled={loading}
                onClick={login}
                className="w-full mt-5 flex items-center gap-4 hover:bg-black/80 cursor-pointer"
              >
                <FcGoogle className="w-7 h-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
