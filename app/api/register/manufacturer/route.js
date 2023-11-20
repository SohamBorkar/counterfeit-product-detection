import { NextResponse } from "next/server";
import { query } from "@/lib/ds";

export const POST = async (req, res) => {
    console.log('POST*******************');
    const data = await req.json();

    let message, status;
    const regNo = data.registration_number;
    const companyName = data.company_name;
    const officeAddress = data.office_address;
    const contactInfo = data.contact_information;
    const email = data.email;
    const username = data.username;
    const password = data.password;

    console.log(regNo + " " + companyName + " " + officeAddress + " " + contactInfo + " " + email);

    const addManufacturer = await query({
        query: "INSERT INTO manufacturers (rno, company_name, office_address, contact_information,email) VALUES (?,?,?,?,?)",
        values: [regNo, companyName, officeAddress, contactInfo, email],
    });
    
    const addLogin = await query({
        query: "INSERT INTO login_info (username, password, role) VALUES (?,?,?)",
        values: [username, password, 'manufacturer'],
    });

    if (addManufacturer.error || addLogin.error) {
        message = "Error in adding manufacturer";
        status = 500;
    } else {
        message = "Manufacturer added successfully";
        status = 200;
    }

    return NextResponse.json({ message: message }, { status: status });
};