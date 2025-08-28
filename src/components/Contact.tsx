import React, { useState } from 'react';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
   <section className="relative py-32  text-[#00ffcc]" id="contact">
  <div className="container mx-auto px-6 max-w-4xl border border-[#00ffcc44] shadow-[0_0_30px_#00ffcc33] rounded-2xl p-8 backdrop-blur-md">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-wide text-[#00ffcc] animate-terminal">
        INITIATING CONNECTION...
      </h2>
      <p className="text-[#00ffcc99] mt-4 font-mono text-sm">
        Establishing secure channel to transmit your message.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6 font-mono">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="YOUR ALIAS"
          required
          className="bg-transparent border-b border-[#00ffcc55] text-[#00ffcc] placeholder-[#00ffcc55] py-2 px-4 w-full focus:outline-none focus:border-[#00ffcc]"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ENCRYPTED EMAIL"
          required
          className="bg-transparent border-b border-[#00ffcc55] text-[#00ffcc] placeholder-[#00ffcc55] py-2 px-4 w-full focus:outline-none focus:border-[#00ffcc]"
        />
      </div>

      <input
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        placeholder="TRANSMISSION SUBJECT"
        required
        className="bg-transparent border-b border-[#00ffcc55] text-[#00ffcc] placeholder-[#00ffcc55] py-2 px-4 w-full focus:outline-none focus:border-[#00ffcc]"
      />

      <textarea
        name="message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        placeholder="TYPE YOUR MESSAGE..."
        required
        className="bg-transparent border border-[#00ffcc33] text-[#00ffcc] placeholder-[#00ffcc55] py-3 px-4 w-full rounded-xl focus:outline-none focus:border-[#00ffcc]"
      />

      <button
        type="submit"
        className="w-full bg-[#00ffcc22] border border-[#00ffcc66] hover:bg-[#00ffcc44] text-[#00ffcc] font-bold tracking-wider py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffcc55]"
      >
        TRANSMIT
      </button>
    </form>
  </div>
</section>

  );
};

export default Contact;