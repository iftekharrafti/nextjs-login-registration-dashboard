import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSolidEditLocation } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Style from "./dashboardLeftSide.module.css";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import { useRouter } from "next/router";

const DashboardLeftSide = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("");
  const [open, setOpen] = useState(false);

  // Collect path name and show the active button
  useEffect(() => {
    const { pathname } = router;
    setActiveItem(pathname);
  }, [router]);

  const handleLogout = () => {
    // Cookies.remove("TOKEN_LOGIN");
    localStorage.removeItem("user-info");
    router.push("/");
  };

  return (
    <>
    {/* Dashboard Header */}
      <DashboardHeader open={open} setOpen={setOpen} />

      {/* Dashboard Left Side bar */}
      <div
        className={`${Style.sidebar} ${open ? Style.active : null}`}
        id="side_nav"
      >
        <div
          className={`${Style.headerBox}  px-3 pt-3 pb-4 d-flex justify-content-between`}
        >
          <h1 className="fs-4">
            <span className="bg-white text-dark rounded shadow px-2 me-2">
              DC
            </span>
            <Link href="/dashboard" className="text-decoration-none">
              <span className="text-white">DUCAA</span>
            </Link>
          </h1>
          <button
            className="btn d-md-none d-block close-btn px-1 py-0 text-white"
            onClick={() => setOpen(false)}
          >
            <FaBars />
          </button>
        </div>
        <ul className="list-unstyled px-2">
          <li className="">
            <Link
              href="/dashboard"
              className={`${Style.link} ${
                activeItem === "/dashboard" ? Style.active : ""
              } text-decoration-none px-3 py-2 d-block d-flex align-items-center`}
            >
              <AiFillDashboard className="me-1" /> Dashboard
            </Link>
          </li>
          <li className="">
            <Link
              href="/dashboard/payment"
              className={`${Style.link} ${
                activeItem === "/dashboard/payment" ? Style.active : ""
              } text-decoration-none px-3 py-2 d-block d-flex align-items-center`}
            >
              <MdCategory className="me-1" /> Payment
            </Link>
          </li>
          <li className="">
            <Link
              href="/dashboard/feedback"
              className={`${Style.link} ${
                activeItem === "/dashboard/feedback" ? Style.active : ""
              } text-decoration-none px-3 py-2 d-block d-flex align-items-center`}
            >
              <FaMoneyCheck className="me-1" /> Feedback
            </Link>
          </li>

          <li className="">
            <Link
              href="/dashboard/resign"
              className={`${Style.link} ${
                activeItem === "/dashboard/resign" ? Style.active : ""
              } text-decoration-none px-3 py-2 d-block d-flex align-items-center`}
            >
              <CgProfile className="me-1" /> Resign Member
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardLeftSide;
