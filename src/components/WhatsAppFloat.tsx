import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/school";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat with the Academy on WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}
