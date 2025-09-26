import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { getFileUrl } from "@/utils/fileHelper";
export default function VendorViewModal({ show, vendorId, onClose }) {
    const [vendor, setVendor] = useState(null);
    const [loading, setLoading] = useState(false);
    const { appUrl } = usePage().props;
    console.log("appUrl",getFileUrl(vendor.shop.logo, appUrl))
    useEffect(() => {
        if (show && vendorId) {
            setLoading(true);
            axios
                .get(`/vendors/${vendorId}`)
                .then((res) => setVendor(res.data))
                .finally(() => setLoading(false));
        }
    }, [show, vendorId]);


    if (!show) return null;


    return (
        <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Vendor Details</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {loading && <p>Loading...</p>}
                        {vendor && (
                            <>
                                <h6>Vendor</h6>
                                <p>
                                    <strong>Name:</strong> {vendor.name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {vendor.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {vendor.phone}
                                </p>

                                <hr />
                                <h6>Shop</h6>
                                {vendor.shop ? (
                                    <>
                                        <p>
                                            <strong>Name:</strong>{" "}
                                            {vendor.shop.name}
                                        </p>
                                        <p>
                                            <strong>Address:</strong>{" "}
                                            {vendor.shop.address}
                                        </p>
                                        <p>
                                            <strong>Phone:</strong>{" "}
                                            {vendor.shop.phone}
                                        </p>
                                        <p>
                                            <strong>GST:</strong>{" "}
                                            {vendor.shop.gst_number}
                                        </p>
                                        {vendor.shop.logo && (
                                            <img
                                                src={getFileUrl(vendor.shop.logo, appUrl)}
                                                alt="Shop Logo"
                                                style={{ maxWidth: "150px" }}
                                            />
                                        )}
                                    </>
                                ) : (
                                    <p>No shop assigned</p>
                                )}
                            </>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
