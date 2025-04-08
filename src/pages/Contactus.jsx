import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, MessageSquare, FileText, Smartphone } from "lucide-react";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000); // hide after 5 sec
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
    <div className="bg-black p-[19px] lg:p-[30px]">dasd
      <img src="" alt="" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 md:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-2 text-gray-500 text-lg">We’d love to hear from you! Please fill out the form below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start space-x-4">
            <Mail className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-500">info@ufocube.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-500">+91 7870175908</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-500">Jamshedpur, Jharkhand - 831009</p>
            </div>
          </div>
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.482798456835!2d86.19840327511165!3d22.804566423322675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3a84757ebdf%3A0x8f3a9adf89f3a7b7!2sJamshedpur%2C%20Jharkhand%20831009!5e0!3m2!1sen!2sin!4v1712567987855"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-5">
          {success && (
            <div className="text-green-600 font-medium bg-green-100 p-3 rounded-lg border border-green-300 text-center">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {[
            { name: "name", placeholder: "Your Name", icon: <User className="text-gray-400" /> },
            { name: "email", placeholder: "Your Email", icon: <Mail className="text-gray-400" />, type: "email" },
            { name: "phone", placeholder: "Your Phone", icon: <Smartphone className="text-gray-400" />, type: "tel" },
            { name: "subject", placeholder: "Subject", icon: <FileText className="text-gray-400" /> }
          ].map(({ name, placeholder, icon, type = "text" }) => (
            <div key={name} className="relative">
              <span className="absolute left-3 top-3.5">{icon}</span>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="w-full pl-10 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          ))}

          <div className="relative">
            <span className="absolute left-3 top-3.5">
              <MessageSquare className="text-gray-400" />
            </span>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full pl-10 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
    </>
  );
}
