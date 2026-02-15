import ContactForm from "../ContactForm.jsx";

export default function ContactSection() {
  return (
    <div className="p-4 max-w-screen-sm mx-auto sm:space-x-0 sm:space-y-1 custom-container text-white border-red-500">
      <div className="w-full mt-4 mx-auto border-red-400">
        <ContactForm />
      </div>

      <div className="w-full map-container mx-auto mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.911497219762!2d19.45460547632187!3d51.76709357967706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3403dcdfd9a3%3A0x552a1f0adf7eecca!2sPiotrkowska%20100%2C%2090-004%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
          width="100%"
          height="380"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Piotrkowska 100 Łódź"
        />
      </div>
    </div>
  );
}