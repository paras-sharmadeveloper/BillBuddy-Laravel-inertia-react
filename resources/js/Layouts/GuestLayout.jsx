export default function GuestLayout({ children }) {
    return (
        <>
           <div class="header">
                <a href="/" class="logo">
                        Company
                </a>
                <div class="header-right">
                    <a class="active1" href="/login">Login</a>

                </div>
                </div>

            <body className="mt-10">{children}</body>
        </>
    );
}
