import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "../ContactForm";
import ContactInfoItem from "../ContactInfoItem";
import ContactSectionStyle from "./ContactSectionStyle";
import SectionTitle from "../SectionTitle";

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+919836262393" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="srijandas18.sd@gmail.com"
            />
            <ContactInfoItem text="Howrah, West Bengal, India" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
