"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBudget = (value) => {
    setForm({ ...form, budget: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Wysłano");
      setForm({ name: "", email: "", message: "", budget: "" });
    } else {
      alert("Coś się zjebało");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-2xl max-sm:p-5"
    >
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Imię i nazwisko
        </label>
        <input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Twój Email *
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wiadomość
        </label>
        <textarea
          name="message"
          placeholder="Wiadomość"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 h-32 py-3 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Szacowany budżet
        </p>

        <div className="flex flex-wrap gap-3 max-sm:gap-2">
          {["< 5k PLN", "5k - 15k PLN", "> 15k PLN"].map((option) => (
            <label
              key={option}
              className={`px-4 py-2 border border-gray-200 cursor-pointer rounded-full text-xs text-gray-600 peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark transition-all ${
                form.budget === option ? "bg-black text-white" : ""
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={option}
                checked={form.budget === option}
                onChange={() => handleBudget(option)}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-main text-white hover:bg-blue btn-cyan cursor-pointer py-4 rounded-xl font-bold text-center mt-4 transition-all duration-300"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}
