import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Schedify",
  icons: [
    {
      url: "https://schedify.dev/schedify.png",
    },
  ],
};

export default function TermsAndServicesPage() {
  return (
    <div className="container py-10 pt-20 font-geist-sans">
      <h1 className="text-3xl font-bold uppercase">
        Schedify Terms of Service
      </h1>

      <p className="text-zinc-700 text-sm py-2">
        <b>Effective Date:</b> December 10, 2024
      </p>

      <p className="py-4">
        These Terms of Service (“<b>Terms</b>”) constitute a legally binding
        agreement between you (“<b>you</b>,” “<b>your</b>,” or “<b>User</b>”)
        and Schedify, a proprietorship (“<b>Schedify</b>,” “<b>Company</b>,” “
        <b>we</b>,” “<b>our</b>,” or “<b>us</b>”), governing your access to and
        use of our webhook scheduling services (“<b>Services</b>”).
      </p>
      <p className="py-4">
        By accessing or using our Services, you acknowledge that you have read,
        understood, and agree to be bound by these <b>Terms</b>, as well as our
        Privacy Policy. If you do not agree to these <b>Terms</b>, you may not
        access or use the <b>Services</b>.
      </p>

      <h2 className="text-lg font-bold uppercase py-3">1. Eligibility</h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          You must be at least 18 years of age to access or use the{" "}
          <b>Services</b>.
        </li>
        <li>
          By agreeing to these <b>Terms</b>, you represent and warrant that you
          have the legal authority to bind yourself or the entity you represent
          to these <b>Terms</b>.
        </li>
        <li>
          If you are using the <b>Services</b> on behalf of an organization, you
          agree that you are authorized to act on behalf of and bind that
          organization to these <b>Terms</b>.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        2. Account Registration
      </h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          Access to the <b>Services</b> requires an account authenticated via
          Clerk. By using Clerk’s authentication, you agree to comply with their
          terms and conditions.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials and ensuring all account activity complies with
          these <b>Terms</b>.
        </li>
        <li>
          The <b>Company</b> reserves the right to suspend or terminate your
          account if any unauthorized or prohibited activity is detected.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        3. Use of the Services
      </h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          The <b>Services</b> allow <b>Users</b> to schedule HTTP requests (
          <b>“webhooks”</b>) to be sent at designated times. <b>Users</b> are
          responsible for providing accurate and complete webhook URLs, timing,
          and payload data.
        </li>

        <li>You agree that:</li>

        <ol className="list-decimal pl-10">
          <li>
            You will not use the <b>Services</b> to transmit any data that is
            illegal, harmful, infringing, or otherwise violates third-party
            rights.
          </li>
          <li>
            You will not engage in any activity that disrupts, damages, or
            impairs the functionality of the <b>Services</b>.
          </li>
        </ol>

        <li>
          The <b>Company</b> reserves the right to monitor and review webhook
          activity to ensure compliance with these <b>Terms</b>.
        </li>
      </ul>

      <h2 className="text-lg font-bold uppercase py-3">4. Fees and Payment</h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          Certain features of the <b>Services</b> may be subject to fees.
          Applicable fees and payment terms will be disclosed at the point of
          purchase or subscription.
        </li>
        <li>
          All payments are final and non-refundable except as required by law or
          explicitly stated in writing.
        </li>
        <li>
          The <b>Company</b> reserves the right to modify pricing or payment
          terms with reasonable notice to <b>Users</b>.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        5. Service Availability
      </h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          The <b>Company</b> strives to provide reliable and continuous access
          to the <b>Services</b> but does not guarantee uninterrupted or
          error-free operation.
        </li>
        <li>
          Scheduled maintenance or unforeseen technical issues may affect the
          availability of the <b>Services</b>. The <b>Company</b> will make
          reasonable efforts to notify <b>Users</b> of planned outages.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">6. Termination</h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          The <b>Company</b> may suspend or terminate your access to the{" "}
          <b>Services</b> at its sole discretion if you breach these{" "}
          <b>Terms</b> or for any reason deemed appropriate.
        </li>
        <li>
          You may terminate your use of the <b>Services</b> at any time by
          closing your account.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        7. Intellectual Property
      </h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          The <b>Services</b> and all related intellectual property are owned by
          Schedify Inc. or its licensors. These <b>Terms</b> do not grant you
          any ownership rights to the <b>Services</b> or underlying technology.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">8. Disclaimers</h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          The <b>Services</b> are provided “as is” without warranties of any
          kind, express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </li>
        <li>
          The <b>Company</b> disclaims all liability for errors, omissions, or
          interruptions in the <b>Services</b>.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        9. Limitation of Liability
      </h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          To the maximum extent permitted by law, Schedify Inc. shall not be
          liable for indirect, incidental, special, or consequential damages
          arising from or related to your use of the <b>Services</b>.
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">10. Governing Law</h2>
      <ul className="list-decimal pl-10 space-y-2">
        <li>
          These <b>Terms</b> shall be governed by and construed in accordance
          with the laws of [Insert Governing Jurisdiction]. Any disputes arising
          under these <b>Terms</b> shall be subject to the exclusive
          jurisdiction of the courts located in [Insert Jurisdiction].
        </li>
      </ul>
      <h2 className="text-lg font-bold uppercase py-3">
        11. Contact Information
      </h2>
      <p>
        If you have any questions about these <b>Terms</b>, please contact us
        at:
      </p>

      <p className="pl-10">
        <b>Schedify</b>
        <br />
        Email:{" "}
        <a
          className="underline underline-offset-2"
          href="mailto:terms@schedify.dev"
        >
          terms@schedify.dev
        </a>
      </p>
    </div>
  );
}
