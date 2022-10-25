import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import SectionTitle from "@components/SectionTitle";
import Footer from "@components/Footer";
import { ContactSectionInfo, FooterInfo } from "@types";

interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  contactInfo: ContactSectionInfo;
  footerInfo: FooterInfo;
}

function ContactSection({ contactInfo, footerInfo }: ContactSectionProps) {
  const { register, handleSubmit } = useForm<ContactFormType>();

  function onSubmit(formData: ContactFormType): void {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  }

  return (
    <section
      className="mt-2 flex min-h-screen snap-start flex-col justify-between pt-16 md:pt-24"
      id="contact"
    >
      <div className="mx-auto flex max-w-7xl flex-1 flex-col px-5 pb-24 md:px-10">
        <SectionTitle title="Contact" />

        <div className="flex flex-col gap-10">
          <h3 className="text-center text-4xl font-semibold">{contactInfo.title}</h3>

          <div className="space-y-10">
            <div className="flex items-center justify-center gap-5">
              <PhoneIcon className="h-7 w-7 animate-pulse text-primary-500" />
              <p className="text-xl">{contactInfo.phoneNumber}</p>
            </div>

            <div className="flex items-center justify-center gap-5">
              <EnvelopeIcon className="h-7 w-7 animate-pulse text-primary-500" />
              <p className="text-xl">{contactInfo.email}</p>
            </div>
          </div>

          <form className="mx-auto flex max-w-md flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type="text"
                placeholder="Name"
                className="contact-input"
                {...register("name")}
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
                {...register("email")}
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
              {...register("subject")}
            />

            <textarea
              placeholder="Message"
              className="contact-input h-40"
              {...register("message")}
            />

            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="rounded bg-primary-500 py-4 px-10 font-bold text-black hover:bg-primary-600 active:bg-primary-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer footerInfo={footerInfo} />
    </section>
  );
}

export default ContactSection;
