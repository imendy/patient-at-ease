import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import * as Sentry from "@sentry/nextjs";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

 

    Sentry.metrics.set("user_view_new_appointment", patient.name);


  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Image src="/assets/images/brand-logo.png" alt="logo" width={1000} height={1000} className="mb-12  w-fit" />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

<p className="justify-items-end my-6 text-dark-600 xl:text-left text-sm"> © 2024 PatientAtEase</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;