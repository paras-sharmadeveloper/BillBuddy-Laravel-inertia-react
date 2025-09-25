import AuthLayout from "../../Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
          post("/login", {
            onSuccess: () => {
                console.log("✅ Login success, user redirected");
            },
            onError: (errors) => {
                console.log("❌ Validation errors", errors);
            },
            onFinish: () => {
                console.log("🔄 Request finished");
            },
        });
    };



    return ( <>
    <div className="brand-logo">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>

          <form className="pt-3" onSubmit={submit}>
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
                    <div className="text-danger small">{errors.password}</div>
                )}
            </div>
            <div className="mt-3 d-grid gap-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                >
                    {processing ? "Signing in..." : "SIGN IN"}
                </button>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <label className="form-check-label text-muted">
                        <input
                            type="checkbox"
                            className="form-check-input"
                        />{" "}
                        Keep me signed in
                    </label>
                </div>
                <a href="#" className="auth-link text-primary">
                    Forgot password?
                </a>
            </div>
            <div className="text-center mt-4 font-weight-light">
                Don’t have an account?{" "}
                <a href="/register" className="text-primary">
                    Create
                </a>
            </div>
        </form>
    </>

    );
}
Login.layout = (page) => <AuthLayout children={page} />;
