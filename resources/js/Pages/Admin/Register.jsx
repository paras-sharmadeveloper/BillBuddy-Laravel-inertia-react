import AuthLayout from "../../Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        shop_name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <>
            <div className="brand-logo">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">
                Register your shop and start billing digitally.
            </h6>

            <form className="pt-3" onSubmit={submit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <div className="text-danger small">{errors.name}</div>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Shop Name"
                        value={data.shop_name}
                        onChange={(e) => setData("shop_name", e.target.value)}
                    />
                    {errors.shop_name && (
                        <div className="text-danger small">
                            {errors.shop_name}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                    />
                    {errors.phone && (
                        <div className="text-danger small">{errors.phone}</div>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <div className="text-danger small">{errors.email}</div>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && (
                        <div className="text-danger small">
                            {errors.password}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                </div>

                <div className="mt-3 d-grid gap-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                    >
                        {processing ? "Registering..." : "SIGN UP"}
                    </button>
                </div>

                <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary">
                        Login
                    </a>
                </div>
            </form>
        </>
    );
}

Register.layout = (page) => <AuthLayout children={page} />;
