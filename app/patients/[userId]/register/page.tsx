import Image from "next/image";

import { getUser } from "@/lib/actions/patient.actions";
import RegisterForm from "@/components/forms/RegisterForm";

import * as Sentry from "@sentry/nextjs";

const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);  



    Sentry.metrics.set("user_view_register", user.name);


  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/images/brand-logo.png"
              height={1000}
              width={1000}
              alt="patientatease logo"
              className="mb-12 w-fit"
            />

<RegisterForm user={user} />

<p className="justify-items-end py-6 text-dark-600 xl:text-left text-sm"> © 2024 PatientAtEase</p>
</div>
</section>

<Image
src="/assets/images/register-img.png"
height={1000}
width={1000}
alt="patient"
className="side-img max-w-[450px]"
/>
</div>
  )
}

export default Register