
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { getFileUrl } from "@/utils/fileHelper";


export default function Edit({ vendor, shop }) {
    const [logoFile, setLogoFile] = useState(null);
       const { appUrl } = usePage().props;
    const logoUrl = getFileUrl(shop.logo, appUrl);
    // Vendor form (name, email, password)
    const vendorForm = useForm({
        name: vendor.name || "",
        email: vendor.email || "",
        password: "",
        password_confirmation: "",
    });

    // Shop form (with image/logo upload)
    const shopForm = useForm({
        name: shop?.name || "",
        address: shop?.address || "",
        phone: shop?.phone || "",
        gst_number: shop?.gst_number || "",
        city: shop?.city || "",
    });

    const submitVendor = (e) => {
        e.preventDefault();
        vendorForm.put(`/vendors/${vendor.id}`, {
            onSuccess: () => alert("Vendor updated ✅"),
        });
    };

    const submitShop = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(shopForm.data).forEach((k) =>
            formData.append(k, shopForm.data[k])
        );
        if (logoFile) formData.append("logo", logoFile);
        formData.append("_method", "PUT");

        fetch(`/shops/${shop.id}`, {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
            },
            body: formData,
        }).then((res) => {
            if (res.ok) alert("Shop updated ✅");
        });
    };

    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setLogoFile(file);
        if (file) {
            setPreview(URL.createObjectURL(file)); // 👈 preview URL generate
        }
    };

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Vendor Update</h4>

                                <form className="forms-sample" onSubmit={submitVendor}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={vendorForm.data.name}
                                            onChange={(e) =>
                                                vendorForm.setData("name", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={vendorForm.data.email}
                                            onChange={(e) =>
                                                vendorForm.setData("email", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={vendorForm.data.password}
                                            onChange={(e) =>
                                                vendorForm.setData("password", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={vendorForm.data.password_confirmation}
                                            onChange={(e) =>
                                                vendorForm.setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={vendorForm.processing}
                                        className="btn btn-gradient-primary me-2"
                                    >
                                        Save Vendor
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Shop Form */}
                    <div className="col-12 grid-margin stretch-card mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Shop Update</h4>

                                <form className="forms-sample" onSubmit={submitShop}>
                                    <div className="form-group">
                                        <label>Shop Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shopForm.data.name}
                                            onChange={(e) =>
                                                shopForm.setData("name", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shopForm.data.phone}
                                            onChange={(e) =>
                                                shopForm.setData("phone", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>GST Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shopForm.data.gst_number}
                                            onChange={(e) =>
                                                shopForm.setData("gst_number", e.target.value)
                                            }
                                        />
                                    </div>

                                    {/* <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shopForm.data.city}
                                            onChange={(e) =>
                                                shopForm.setData("city", e.target.value)
                                            }
                                        />
                                    </div> */}

                                    <div className="form-group">
                                        <label>Logo Upload</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) => setLogoFile(e.target.files[0])}
                                        />
                                        {preview && (
                                            <div className="mt-2">
                                                <img
                                                    src={preview}
                                                    alt="Logo Preview"
                                                    style={{ maxWidth: "150px", borderRadius: "8px" }}
                                                />
                                            </div>
                                        )}
                                        {!preview && shop?.logo && (
                                            <img src={logoUrl} alt="Shop Logo" style={{ maxWidth: "150px" }} />
                                            )}
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            value={shopForm.data.address}
                                            onChange={(e) =>
                                                shopForm.setData("address", e.target.value)
                                            }
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={shopForm.processing}
                                        className="btn btn-gradient-primary me-2"
                                    >
                                        Save Shop
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
