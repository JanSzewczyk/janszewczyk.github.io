"use client";

import { Button, Input, Textarea } from "@szum-tech/design-system";
import { IconMail, IconMapPin, IconPhone, IconSend } from "@szum-tech/design-system/icons";
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

        <div className="flex flex-col gap-6 md:gap-10">
          <h3 className="text-center typography-heading-4 md:typography-heading-3">
            {contactInfo.title}
          </h3>

          <div className="space-y-6 text-gray-200 md:space-y-8">
            <a
              className="flex items-center justify-center gap-2 md:gap-4"
              href={`tel:${contactInfo.phoneNumber.replaceAll(" ", "")}`}
            >
              <IconPhone className="h-5 w-5 text-primary-500/80 md:h-7 md:w-7" />
              <p className="typography-subtitle-1 md:typography-heading-6">
                {contactInfo.phoneNumber}
              </p>
            </a>

            <a
              className="flex items-center justify-center gap-2 md:gap-4"
              href={`mailto:${contactInfo.email}`}
            >
              <IconMail className="h-5 w-5 text-primary-500/80 md:h-7 md:w-7" />
              <p className="typography-subtitle-1 md:typography-heading-6">{contactInfo.email}</p>
            </a>

            <div className="flex items-center justify-center gap-2 md:gap-4">
              <IconMapPin className="h-5 w-5 text-primary-500/80 md:h-7 md:w-7" />
              <p className="typography-subtitle-1 md:typography-heading-6">{contactInfo.address}</p>
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
                <Textarea placeholder="Message" {...register("message")} />
              </div>
            </div>

            <div className="mt-4">
              <Button
                block
                size="lg"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                type="submit"
                endIcon={<IconSend />}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
