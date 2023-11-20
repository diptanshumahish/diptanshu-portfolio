import React from "react";
import ContactFormInner from "./ContactFormInner";

export default function ContactForm() {
    return (
        <div className="pt-[10%]">
            <form action="" className="flex flex-col gap-4">
                <ContactFormInner
                    heading="Your full name"
                    name="form-name"
                    placeholder="Full name please"
                    key="name"
                />
                <ContactFormInner
                    heading="Your Email Address"
                    name="form-email"
                    placeholder="hey@email.com"
                    key="email"
                />
                <ContactFormInner
                    heading="Your Contact Number (Whatsapp/iMessage)"
                    name="form-contact"
                    placeholder="+91 9876543210"
                    key="num"
                />
                <ContactFormInner
                    heading="Contacting for?"
                    name="form-purpose"
                    placeholder="for my new project!"
                    key="contact"
                />
                <div className="flex flex-col  gap-3 text-white">
                    <span className="uppercase">Your Message</span>
                    <textarea
                        className="w-full p-4 bg-white bg-opacity-5 rounded-md resize-none focus:outline-none h-[200px]"
                        placeholder="So Here goes nothing."
                        name="form-message"
                    />
                </div>
                <button className="bg-white p-2 rounded-lg" type="submit">
                    Let&apos;s Go!
                </button>
            </form>
        </div>
    );
}
