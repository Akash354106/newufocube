import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [whatsAppLink, setWhatsAppLink] = useState("");

  useEffect(() => {
    const phoneNumber = "917870175908"; // ✅ Your number
    const message = encodeURIComponent("Hi Manoj! I came from your website.");
    const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
      setWhatsAppLink(`https://wa.me/${phoneNumber}?text=${message}`);
    } else {
      setWhatsAppLink(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
    }
  }, []);

  return (
    <div className="fixed bottom-[30%] right-4 z-50">
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={28}  />
      </a>
    </div>
  );
}
