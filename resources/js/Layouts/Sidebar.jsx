import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";


export default function Sidebar() {
       const { auth } = usePage().props;

       console.log("auth",auth)
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img
                                    src="assets/images/faces/face1.jpg"
                                    alt="profile"
                                />
                                <span className="login-status online" />
                                {/*change to offline or busy as needed*/}
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">
                                   {auth.user?.name}
                                </span>
                                <span className="text-secondary text-small">
                                   {auth.user?.role}
                                </span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/dashboard">
                            <span className="menu-title">Dashboard</span>
                            <i className="mdi mdi-home menu-icon" />
                        </Link>


                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/vendor-list">
                            <span className="menu-title">Vendor List</span>
                            <i className="mdi mdi-home menu-icon" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false"
                            aria-controls="ui-basic"
                        >
                            <span className="menu-title">
                                Basic UI Elements
                            </span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-crosshairs-gps menu-icon" />
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="pages/ui-features/buttons.html"
                                    >
                                        Buttons
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="pages/ui-features/dropdowns.html"
                                    >
                                        Dropdowns
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="pages/ui-features/typography.html"
                                    >
                                        Typography
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>





                </ul>
            </nav>
        </>
    );
}
