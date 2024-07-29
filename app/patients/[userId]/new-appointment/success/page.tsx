import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/lib/actions/patient.actions";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  const user = await getUser(userId);



  Sentry.metrics.set("user_view_appointment-success", user.name);


  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
        <Image src="/assets/images/brand-logo.png" alt="logo" width={1000} height={1000} className="mb-12  w-fit" />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={200}
            width={180}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center max-[560px]:text-[17px] max-[560px]:leading-8  ">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3 ">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={200}
              height={200}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="justify-items-end my-6 text-dark-600 xl:text-left text-sm"> © 2024 PatientAtEase</p>
      </div>
    </div>
  );
};

export default RequestSuccess;


