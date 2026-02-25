"use client";

import { useState } from "react";
import Input from "@/components/shared/Input";
import MapPreview from "@/components/shared/MapPreview";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionTitle from "@/components/shared/SectionTitle";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactCTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [ok, setOk] = useState("");

  const submit = () => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setOk("Message sent successfully. We will contact you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mt-20 mb-10">
      <SectionTitle eyebrow="Contact" title="Let Us Help You Move Forward" />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5">
          <p className="text-slate-700 mb-4">Contact details: +1 555 100 2000 · contact@estatejack.com</p>
          <Input label="Name" value={name} onChange={setName} error={errors.name} />
          <Input label="Email" value={email} onChange={setEmail} error={errors.email} />
          <Input label="Message" value={message} onChange={setMessage} multiline error={errors.message} />
          <PrimaryButton onClick={submit} fullWidth>
            Send message
          </PrimaryButton>
          {ok ? <p className="text-emerald-700 text-sm mt-2">{ok}</p> : null}
        </div>
        <MapPreview />
      </div>
    </section>
  );
}
