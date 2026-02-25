"use client";

import { useState } from "react";
import Input from "@/components/shared/Input";
import MapPreview from "@/components/shared/MapPreview";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionTitle from "@/components/shared/SectionTitle";
import Select from "@/components/shared/Select";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  purpose?: string;
  propertyType?: string;
  budget?: string;
  preferredContact?: string;
  message?: string;
};

export default function ContactCTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("Buy");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [budget, setBudget] = useState("EUR 150k - 300k");
  const [preferredContact, setPreferredContact] = useState("Phone");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [ok, setOk] = useState("");

  const submit = () => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (!/^\+?[0-9\s]{7,}$/.test(phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!purpose) nextErrors.purpose = "Select inquiry purpose.";
    if (!propertyType) nextErrors.propertyType = "Select property type.";
    if (!budget) nextErrors.budget = "Select budget range.";
    if (!preferredContact) nextErrors.preferredContact = "Select preferred contact method.";
    if (message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setOk("Message sent successfully. We will contact you soon.");
    setName("");
    setEmail("");
    setPhone("");
    setPurpose("Buy");
    setPropertyType("Apartment");
    setBudget("EUR 150k - 300k");
    setPreferredContact("Phone");
    setMessage("");
  };

  return (
    <section className="mt-20 mb-10">
      <SectionTitle
        eyebrow="Contact"
        title="Let Us Help You Move Forward"
        subtitle="Share your requirements and our team will prepare a tailored property or service recommendation."
      />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-card">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef7f3] via-white to-[#eef4ff] p-5 md:p-6 mb-5 border border-slate-100 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-[#229ED9]" />
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-xs tracking-[0.18em] text-muted font-semibold">CONTACT INFORMATION</p>
                <h3 className="text-brand text-xl font-semibold mt-1">Kaja Management LTD</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/35797790825"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#25D366] text-white p-2 shadow-sm"
                  aria-label="WhatsApp"
                >
                  <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                    <path d="M19.11 17.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.16-.29-.02-.45.12-.6.13-.13.29-.33.44-.49.15-.16.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.09-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.35s1 2.74 1.14 2.93c.15.19 1.96 2.99 4.75 4.19.66.28 1.17.44 1.57.56.66.21 1.26.18 1.73.11.53-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
                    <path d="M16 .53C7.45.53.53 7.45.53 16c0 2.82.76 5.57 2.2 7.98L.5 31.47l7.71-2.16A15.4 15.4 0 0 0 16 31.47c8.55 0 15.47-6.92 15.47-15.47S24.55.53 16 .53Zm0 28.11c-2.35 0-4.66-.63-6.68-1.83l-.48-.28-4.58 1.28 1.22-4.46-.31-.51a12.57 12.57 0 0 1-1.93-6.84c0-6.96 5.67-12.63 12.63-12.63S28.5 9.04 28.5 16 22.96 28.64 16 28.64Z" />
                  </svg>
                </a>
                <a
                  href="tg://resolve?phone=35797790825"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#229ED9] text-white p-2 shadow-sm"
                  aria-label="Telegram"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M9.78 15.17l-.4 5.61c.58 0 .84-.25 1.15-.55l2.75-2.63 5.7 4.18c1.04.58 1.78.28 2.06-.96l3.73-17.47h.01c.33-1.54-.56-2.14-1.58-1.76L1.43 9.42c-1.48.58-1.46 1.4-.25 1.77l5.57 1.74L19.68 5.1c.61-.4 1.17-.18.71.22" />
                  </svg>
                </a>
                <a
                  href="mailto:jack_maher@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-800 text-white p-2 shadow-sm"
                  aria-label="Email"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.2-.55 7.22 5.45c.35.26.82.26 1.16 0L19.8 6.2a.75.75 0 0 0-.55-.2H4.75c-.2 0-.39.07-.55.2Zm16.3 1.5-6.91 5.22a2.5 2.5 0 0 1-3.18 0L3.5 7.7v9.55c0 .55.45 1 1 1h14.75c.55 0 1-.45 1-1V7.7Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <article className="group rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">
                    ☎
                  </div>
                  <p className="text-[11px] tracking-[0.16em] text-emerald-700/80 font-semibold">PHONE</p>
                </div>
                <p className="text-slate-900 font-semibold mt-2 group-hover:text-brand transition">+357 97 790825</p>
              </article>

              <article className="group rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm">
                    ✉
                  </div>
                  <p className="text-[11px] tracking-[0.16em] text-blue-700/80 font-semibold">EMAIL</p>
                </div>
                <p className="text-slate-900 font-semibold mt-2 break-all group-hover:text-brand transition">
                  jack_maher@gmail.com
                </p>
              </article>

              <article className="group rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm">
                    ⏰
                  </div>
                  <p className="text-[11px] tracking-[0.16em] text-amber-700/80 font-semibold">WORKING HOURS</p>
                </div>
                <p className="text-slate-900 font-semibold mt-2 group-hover:text-brand transition">Mon-Sat: 08:00 - 19:00</p>
              </article>
            </div>
          </div>

          <Input label="Name" value={name} onChange={setName} error={errors.name} />
          <Input label="Email" value={email} onChange={setEmail} error={errors.email} />
          <Input label="Phone" value={phone} onChange={setPhone} error={errors.phone} />
          <div className="grid md:grid-cols-2 gap-3">
            <Select
              label="Inquiry Purpose"
              value={purpose}
              onChange={setPurpose}
              options={[
                { label: "Buy", value: "Buy" },
                { label: "Rent", value: "Rent" },
                { label: "Sell", value: "Sell" },
                { label: "Property Management", value: "Property Management" },
                { label: "Cleaning & Turnovers", value: "Cleaning & Turnovers" }
              ]}
            />
            <Select
              label="Property Type"
              value={propertyType}
              onChange={setPropertyType}
              options={[
                { label: "Apartment", value: "Apartment" },
                { label: "Villa", value: "Villa" },
                { label: "Office", value: "Office" },
                { label: "Penthouse", value: "Penthouse" }
              ]}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Select
              label="Budget Range"
              value={budget}
              onChange={setBudget}
              options={[
                { label: "EUR 150k - 300k", value: "EUR 150k - 300k" },
                { label: "EUR 300k - 600k", value: "EUR 300k - 600k" },
                { label: "EUR 600k - 1M", value: "EUR 600k - 1M" },
                { label: "EUR 1M+", value: "EUR 1M+" }
              ]}
            />
            <Select
              label="Preferred Contact"
              value={preferredContact}
              onChange={setPreferredContact}
              options={[
                { label: "Phone", value: "Phone" },
                { label: "WhatsApp", value: "WhatsApp" },
                { label: "Telegram", value: "Telegram" },
                { label: "Email", value: "Email" }
              ]}
            />
          </div>
          <Input label="Message" value={message} onChange={setMessage} multiline error={errors.message} />
          <PrimaryButton onClick={submit} className="w-auto min-h-[42px] px-4 py-2.5 text-sm rounded-lg shadow-sm">
            Send Inquiry
          </PrimaryButton>
          {ok ? <p className="text-emerald-700 text-sm mt-2">{ok}</p> : null}
        </div>
        <MapPreview />
      </div>
    </section>
  );
}
