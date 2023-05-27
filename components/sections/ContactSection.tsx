"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@szum-tech/design-system";
import { useForm } from "react-hook-form";

import SectionTitle from "@components/SectionTitle";
import { ContactSectionInfo } from "@types";

interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  contactInfo: ContactSectionInfo;
}

function ContactSection({ contactInfo }: ContactSectionProps) {
  const { register, handleSubmit } = useForm<ContactFormType>();

  function onSubmit(formData: ContactFormType): void {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  }

  return (
    <section className="mt-2 flex min-h-screen snap-start pb-32 pt-16 md:pt-24" id="contact">
      <div className="mx-auto flex max-w-7xl flex-1 flex-col px-5 md:px-10">
        <SectionTitle title="Contact" />

        <div className="flex flex-col gap-10">
          <h3 className="text-center typography-heading-4 md:typography-heading-3">
            {contactInfo.title}
          </h3>

          <div className="space-y-8 text-gray-200">
            <a
              className="flex items-center justify-center gap-5"
              href={`tel:${contactInfo.phoneNumber.replaceAll(" ", "")}`}
            >
              <PhoneIcon className="h-7 w-7 text-primary-500/80" />
              <p className="typography-heading-6">{contactInfo.phoneNumber}</p>
            </a>

            <a
              className="flex items-center justify-center gap-5"
              href={`mailto:${contactInfo.email}`}
            >
              <EnvelopeIcon className="h-7 w-7 text-primary-500/80" />
              <p className="typography-heading-6">{contactInfo.email}</p>
            </a>

            <div className="flex items-center justify-center gap-5">
              <MapPinIcon className="h-7 w-7 text-primary-500/80" />
              <p className="typography-heading-6">{contactInfo.address}</p>
            </div>
          </div>

          <form className="mx-auto w-full max-w-md">
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="col-span-2 md:col-span-1">
                <Input type="text" placeholder="Name" {...register("name")} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input type="email" placeholder="Email" {...register("email")} />
              </div>
              <div className="col-span-2">
                <Input type="text" placeholder="Subject" {...register("subject")} />
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Message"
                  className="contact-input h-40"
                  {...register("message")}
                />
              </div>
            </div>

            <Button
              block
              size="lg"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
