import React from "react";
import Link from "next/link";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const errorPage = () => {
    return (
        <div>
            <h1>Oh no! something went wrong.</h1>
            <p>Try <Link href="/">going home</Link>.</p>
        </div>
    );
};

export default errorPage;