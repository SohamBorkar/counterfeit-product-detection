import { NextResponse } from "next/server";
import { query } from "@/lib/ds";

export const POST = async (req, res) => {

    const data = await req.json();

    let message, status, role;
    const username = data.username;
    const password = data.password;

    const login = await query({
        query: "SELECT * FROM login_info WHERE username = ? AND password = ?",
        values: [username, password],
    });

    // get the role of the user
    if (login.length > 0) {
        role = login[0].role;
    }

    if (login.error) {
        message = "Error in login";
        status = 500;
    } else if (login.length === 0) {
        message = "Invalid username or password";
        status = 401;
    } else {
        message = "Login successful";
        status = 200;
    }
    console.log(role);
    return NextResponse.json({ message: message, role: role }, { status: status });
}