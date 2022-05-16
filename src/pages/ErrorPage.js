import React from "react";

function ErrorPage() {
    const styles = {
        container: {
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }
    };
    return (
        <div style={styles.container}>
            <p>You've found a page that doesn't exist</p>
        </div>
    )
}

export default ErrorPage;
