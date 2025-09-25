
import GuestLayout from "../Layouts/GuestLayout";

export default function Home() {
    return (
            <h1 className="text-center">Welcome Home </h1>

    );
}


Home.layout = (page) => <GuestLayout children={page} />;
