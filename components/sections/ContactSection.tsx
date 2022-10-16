import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {}

function ContactSection({}: ContactSectionProps) {
  const { register, handleSubmit } = useForm<ContactFormType>();

  function onSubmit(formData: ContactFormType): void {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  }

  return (
    <section className="h-screen snap-start pt-24" id="contact">
      <div className="mx-auto flex max-w-7xl flex-col items-center ">
        <h3 className="mb-24 text-center text-2xl uppercase tracking-2 text-gray-500 md:tracking-8">
          Contact
        </h3>

        <div className="flex flex-col gap-10">
          <h4 className="text-center text-4xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>

          <div className="space-y-10">
            <div className="flex items-center justify-center gap-5">
              <PhoneIcon className="h-7 w-7 animate-pulse text-red-600" />
              <p className="text-xl">+48 516 605 828</p>
            </div>

            <div className="flex items-center justify-center gap-5">
              <EnvelopeIcon className="h-7 w-7 animate-pulse text-red-600" />
              <p className="text-xl">szewczykjan@outlook.com</p>
            </div>
          </div>

          <form className="mx-auto flex w-fit flex-col gap-2">
            <div className="flex gap-2">
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

            <textarea placeholder="Message" className="contact-input" {...register("message")} />

            <button
              onChange={handleSubmit(onSubmit)}
              type="submit"
              className="rounded-lg bg-red-500 py-5 px-10 font-bold text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
