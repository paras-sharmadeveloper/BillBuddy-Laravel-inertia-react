import Sidebar from "../../../Layouts/Sidebar";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import VendorViewModal from "./VendorViewModal";
export default function List({ data, filters }) {
    const { auth } = usePage().props;

    const [search, setSearch] = useState(filters.search || "");
    const handleSearch = (value) => {
        setSearch(value);
        router.get("/vendor-list", { search: value }, { preserveState: true });
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleView = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    return (
        <>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Vendor List</h4>

                            {/* Search Form */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name, email, phone, shop..."
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                            />

                            {/* Vendor Table */}
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Name</th>
                                        <th>Shop</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.length > 0 ? (
                                        data.data.map((user) => (
                                            <tr key={user.id}>
                                                <td className="py-1">
                                                    <img
                                                        src="/assets/images/faces-clipart/pic-1.png"
                                                        alt="profile"
                                                    />
                                                </td>
                                                <td>{user.name}</td>
                                                <td>
                                                    {user.shop?.name || "N/A"}
                                                </td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td className="acd">
                                                    <a
                                                        href="#"
                                                        onClick={() =>
                                                            handleView(user.id)
                                                        }
                                                    >
                                                        {" "}
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    {auth.user.role ===
                                                        "admin" && (
                                                        <Link
                                                            href={`/vendors/${user.id}/edit`}
                                                        >
                                                            {" "}
                                                            <i class="fa fa-edit"></i>{" "}
                                                        </Link>
                                                    )}
                                                    <a href="#">
                                                        {" "}
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="text-center"
                                            >
                                                No vendors found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <div className="mt-3 d-flex justify-content-center">
                                {data.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || "#"}
                                        className={`btn btn-sm mx-1 ${
                                            link.active
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <VendorViewModal
                        show={showModal}
                        vendorId={selectedId}
                        onClose={() => setShowModal(false)}
                    />
                </div>
            </div>
        </>
    );
}
