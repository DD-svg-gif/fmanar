import { useState } from "react";

const COUNTRIES = [
  "Italy", "United States", "United Kingdom", "France", "Germany", "Spain",
  "Switzerland", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait",
  "China", "Japan", "Singapore", "Australia", "Canada", "Other",
];

const TOPICS = [
  "Product inquiry",
  "Trade / Interior designer",
  "Press",
  "General question",
  "Showroom visit",
];

type FormState = {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  postalCode: string;
  country: string;
  topic: string;
  message: string;
  accepted: boolean;
};

const initial: FormState = {
  name: "", lastName: "", email: "", telephone: "",
  postalCode: "", country: "", topic: "", message: "", accepted: false,
};

export function RequestInfo() {
  const [f, setF] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hp, setHp] = useState("");

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((prev) => ({ ...prev, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!f.accepted) {
      setErrorMsg("Please accept the privacy policy.");
      return;
    }

    if (!f.name || !f.lastName || !f.email || !f.telephone || !f.postalCode || !f.country || !f.topic || !f.message) {
      setErrorMsg("Please complete all required fields.");
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("name", f.name);
      formData.append("lastName", f.lastName);
      formData.append("email", f.email);
      formData.append("telephone", f.telephone);
      formData.append("postalCode", f.postalCode);
      formData.append("country", f.country);
      formData.append("topic", f.topic);
      formData.append("message", f.message);
      
      //【修复点】将防垃圾机器人蜜罐字段加入 FormData 一起提交
      formData.append("company", hp);

      const res = await fetch("https://formspree.io/f/mljrvwoy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("sent");
      setF(initial);
      setHp("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const fieldBase =
    "w-full bg-[#f3ede3] px-5 py-4 text-sm text-[#1a1a1a] placeholder:text-[#8a7f70] outline-none focus:ring-1 focus:ring-[--gold] transition";

  return (
    <section id="request-info" className="border-t border-border/40 bg-white px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-4xl font-semibold text-[#1a1a1a] md:text-5xl">
            Request info
          </h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Honeypot — hidden from users, filled only by spam bots */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className={fieldBase} placeholder="Name*" value={f.name}
              onChange={(e) => upd("name", e.target.value)} maxLength={100} required />
            <input className={fieldBase} placeholder="Last Name*" value={f.lastName}
              onChange={(e) => upd("lastName", e.target.value)} maxLength={100} required />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="email" className={fieldBase} placeholder="Email*" value={f.email}
              onChange={(e) => upd("email", e.target.value)} maxLength={255} required />
            <input className={fieldBase} placeholder="Telephone*" value={f.telephone}
              onChange={(e) => upd("telephone", e.target.value)} maxLength={50} required />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className={fieldBase} placeholder="Postal Code*" value={f.postalCode}
              onChange={(e) => upd("postalCode", e.target.value)} maxLength={20} required />
            <select className={`${fieldBase} appearance-none`} value={f.country}
              onChange={(e) => upd("country", e.target.value)} required>
              <option value="" disabled>Select a country*</option>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <select className={`${fieldBase} appearance-none`} value={f.topic}
            onChange={(e) => upd("topic", e.target.value)} required>
            <option value="" disabled>Select a topic*</option>
            {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>

          <textarea className={`${fieldBase} min-h-[200px] resize-y`} placeholder="Message*"
            value={f.message} onChange={(e) => upd("message", e.target.value)}
            maxLength={2000} required />

          <label className="flex items-start gap-3 pt-2 text-sm text-[#1a1a1a]">
            <input type="checkbox" checked={f.accepted}
              onChange={(e) => upd("accepted", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[--gold]" />
            <span>
              I have read and I accept the{" "}
              <a href="#" className="underline underline-offset-2">privacy policy</a>. *
            </span>
          </label>

          {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
          {status === "sent" && (
            <p className="text-sm text-[--gold]">Thank you — your request has been sent.</p>
          )}

          <div className="pt-4">
            <button type="submit" disabled={status === "sending"}
              className="inline-block border-b border-[#1a1a1a] pb-1 text-base font-medium text-[#1a1a1a] transition hover:text-[--gold] hover:border-[--gold] disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
