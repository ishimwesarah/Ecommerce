import React from "react";
import "./dashboard-styles/contact.css";

const Contact = () => {
    const contactsList = [
        { name: "Alice Johnson", email: "alice@email.com", phone: "+123 456 7890" },
        { name: "Michael Smith", email: "michael@email.com", phone: "+234 567 8901" },
        { name: "Sophia Brown", email: "sophia@email.com", phone: "+345 678 9012" },
        { name: "David Wilson", email: "david@email.com", phone: "+456 789 0123" },
        { name: "Emma Davis", email: "emma@email.com", phone: "+567 890 1234" },
        { name: "Olivia Martinez", email: "olivia@email.com", phone: "+678 901 2345" },
        { name: "William Taylor", email: "william@email.com", phone: "+789 012 3456" },
        { name: "Ethan Anderson", email: "ethan@email.com", phone: "+890 123 4567" },
        { name: "Lucas White", email: "lucas@email.com", phone: "+901 234 5678" },
        { name: "Liam Harris", email: "liam@email.com", phone: "+012 345 6789" },
    ];

    return (
        <div className="contact-container">
            <h2>Customer Contacts</h2>
            <div className="contact-list">
                {contactsList.map((contact, index) => (
                    <div key={index} className="contact-item">
                        <h4>{contact.name}</h4>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
