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

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const subject = encodeURIComponent(`[FMANAR Inquiry] ${f.topic} - ${f.name} ${f.lastName}`);
    const body = encodeURIComponent(
      `Name: ${f.name} ${f.lastName}\n` +
      `Email: ${f.email}\n` +
      `Phone: ${f.telephone}\n` +
      `Postal Code: ${f.postalCode}\n` +
      `Country: ${f.country}\n` +
      `Topic: ${f.topic}\n\n` +
      `Message:\n${f.message}`
    );

    // 唤起邮件客户端直接发送至你的官方邮箱
    window.location.href = `mailto:fmnhome2015@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setF(initial);
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input 
              name="name" 
              className={fieldBase} 
              placeholder="Name*" 
              value={f.name}
              onChange={(e) => upd("name", e.target.value)} 
              maxLength={100} 
              required 
            />
            <input 
              name="lastName" 
              className={fieldBase} 
              placeholder="Last Name*" 
              value={f.lastName}
              onChange={(e) => upd("lastName", e.target.value)} 
              maxLength={100} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input 
              name="email" 
              type="email" 
              className={fieldBase} 
              placeholder="Email*" 
              value={f.email}
              onChange={(e) => upd("email", e.target.value)} 
              maxLength={255} 
              required 
            />
            <input 
              name="telephone" 
              className={fieldBase} 
              placeholder="Telephone*" 
              value={f.telephone}
              onChange={(e) => upd("telephone", e.target.value)} 
              maxLength={50} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input 
              name="postalCode" 
              className={fieldBase} 
              placeholder="Postal Code*" 
              value={f.postalCode}
              onChange={(e) => upd("postalCode", e.target.value)} 
              maxLength={20} 
              required 
            />
            <select 
              name="country" 
              className={`${fieldBase} appearance-none`} 
              value={f.country}
              onChange={(e) => upd("country", e.target.value)} 
              required
            >
              <option value="" disabled>Select a country*</option>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <select 
            name="topic" 
            className={`${fieldBase} appearance-none`} 
            value={f.topic}
            onChange={(e) => upd("topic", e.target.value)} 
            required
          >
            <option value="" disabled>Select a topic*</option>
            {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>

          <textarea 
            name="message" 
            className={`${fieldBase} min-h-[200px] resize-y`} 
            placeholder="Message*"
            value={f.message} 
            onChange={(e) => upd("message", e.target.value)}
            maxLength={2000} 
            required 
          />

          <label className="flex items-start gap-3 pt-2 text-sm text-[#1a1a1a] cursor-pointer">
            <input 
              type="checkbox" 
              checked={f.accepted}
              onChange={(e) => upd("accepted", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[--gold]" 
            />
            <span>
              I have read and I accept the{" "}
              <a href="#" className="underline underline-offset-2">privacy policy</a>. *
            </span>
          </label>

          {errorMsg && <p className="text-sm text-red-600 font-medium">{errorMsg}</p>}
          {status === "sent" && (
            <p className="text-sm text-[--gold] font-medium">Thank you — your request has been sent.</p>
          )}

          <div className="pt-4">
            <button 
              type="submit" 
              className="inline-block border-b border-[#1a1a1a] pb-1 text-base font-medium text-[#1a1a1a] transition hover:text-[--gold] hover:border-[--gold]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
