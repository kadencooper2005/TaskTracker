import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-purple-800/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold text-2xl hover:text-purple-300 transition-colors"
          >
            TaskTracker
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/terms">
              <Button
                variant="outline"
                className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
              >
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="bg-black/40 border-purple-800/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-white mb-2">
                Privacy Policy
              </h1>
              <p className="text-purple-200 mb-8">Last updated: January 2024</p>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    1. Introduction
                  </h2>
                  <p className="mb-4">
                    TaskTracker (&quot;we,&quot; &quot;our,&quot; or
                    &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you use our task
                    management service (&quot;Service&quot;). Please read this
                    privacy policy carefully. If you do not agree with the terms
                    of this privacy policy, please do not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Information We Collect
                  </h2>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Personal Information
                  </h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily
                    provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Register for an account</li>
                    <li>Use our Service</li>
                    <li>Contact us for support</li>
                    <li>Subscribe to our newsletter</li>
                  </ul>

                  <p className="mb-4">This personal information may include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>
                      <strong className="text-purple-300">
                        Contact Information:
                      </strong>{" "}
                      Name, email address
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Account Information:
                      </strong>{" "}
                      Username, password (encrypted)
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Profile Information:
                      </strong>{" "}
                      Profile picture, preferences
                    </li>
                    <li>
                      <strong className="text-purple-300">Task Data:</strong>{" "}
                      Tasks, projects, notes, and related content you create
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Automatically Collected Information
                  </h3>
                  <p className="mb-4">
                    When you access our Service, we may automatically collect
                    certain information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-purple-300">
                        Device Information:
                      </strong>{" "}
                      IP address, browser type, operating system
                    </li>
                    <li>
                      <strong className="text-purple-300">Usage Data:</strong>{" "}
                      Pages visited, time spent, features used
                    </li>
                    <li>
                      <strong className="text-purple-300">Log Data:</strong>{" "}
                      Server logs, error reports, performance data
                    </li>
                    <li>
                      <strong className="text-purple-300">Cookies:</strong>{" "}
                      Session cookies, preference cookies, analytics cookies
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="mb-4">
                    We use the information we collect for various purposes,
                    including:
                  </p>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Service Provision
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Provide, operate, and maintain our Service</li>
                    <li>
                      Process your account registration and manage your account
                    </li>
                    <li>Enable you to create, store, and manage your tasks</li>
                    <li>
                      Provide customer support and respond to your inquiries
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Service Improvement
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Analyze usage patterns to improve our Service</li>
                    <li>Develop new features and functionality</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Conduct research and analytics</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Communication
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Send you technical notices and support messages</li>
                    <li>Provide updates about our Service</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Respond to your comments and questions</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Legal and Security
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and abuse</li>
                    <li>Enforce our Terms of Service</li>
                    <li>Protect the security and integrity of our Service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except in
                    the following circumstances:
                  </p>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Service Providers
                  </h3>
                  <p className="mb-4">
                    We may share your information with trusted third-party
                    service providers who assist us in operating our Service,
                    such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Cloud hosting providers</li>
                    <li>Email service providers</li>
                    <li>Analytics providers</li>
                    <li>Customer support tools</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Legal Requirements
                  </h3>
                  <p className="mb-4">
                    We may disclose your information if required to do so by law
                    or in response to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Valid legal requests from government authorities</li>
                    <li>Court orders or subpoenas</li>
                    <li>Legal processes or investigations</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Business Transfers
                  </h3>
                  <p className="mb-4">
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred as part of that
                    transaction. We will notify you of any such change in
                    ownership.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Data Security
                  </h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>
                      <strong className="text-purple-300">Encryption:</strong>{" "}
                      Data is encrypted in transit and at rest
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Access Controls:
                      </strong>{" "}
                      Limited access to personal information
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Regular Audits:
                      </strong>{" "}
                      Security practices are regularly reviewed
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Secure Infrastructure:
                      </strong>{" "}
                      Industry-standard security protocols
                    </li>
                  </ul>
                  <p className="mb-4">
                    However, no method of transmission over the internet or
                    electronic storage is 100% secure. While we strive to
                    protect your personal information, we cannot guarantee
                    absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Your Privacy Rights
                  </h2>
                  <p className="mb-4">
                    Depending on your location, you may have the following
                    rights regarding your personal information:
                  </p>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    General Rights
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>
                      <strong className="text-purple-300">Access:</strong>{" "}
                      Request access to your personal information
                    </li>
                    <li>
                      <strong className="text-purple-300">Correction:</strong>{" "}
                      Request correction of inaccurate information
                    </li>
                    <li>
                      <strong className="text-purple-300">Deletion:</strong>{" "}
                      Request deletion of your personal information
                    </li>
                    <li>
                      <strong className="text-purple-300">Portability:</strong>{" "}
                      Request a copy of your data in a portable format
                    </li>
                    <li>
                      <strong className="text-purple-300">Opt-out:</strong>{" "}
                      Unsubscribe from marketing communications
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    GDPR Rights (EU Residents)
                  </h3>
                  <p className="mb-4">
                    If you are located in the European Union, you have
                    additional rights under GDPR:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Right to restrict processing</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                    <li>
                      Right to lodge a complaint with supervisory authorities
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    CCPA Rights (California Residents)
                  </h3>
                  <p className="mb-4">
                    If you are a California resident, you have rights under the
                    CCPA:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Right to know what personal information is collected
                    </li>
                    <li>Right to delete personal information</li>
                    <li>
                      Right to opt-out of the sale of personal information
                    </li>
                    <li>
                      Right to non-discrimination for exercising your rights
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to enhance
                    your experience:
                  </p>

                  <h3 className="text-xl font-semibold text-purple-300 mb-3">
                    Types of Cookies
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>
                      <strong className="text-purple-300">
                        Essential Cookies:
                      </strong>{" "}
                      Required for basic functionality
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Preference Cookies:
                      </strong>{" "}
                      Remember your settings and preferences
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Analytics Cookies:
                      </strong>{" "}
                      Help us understand how you use our Service
                    </li>
                    <li>
                      <strong className="text-purple-300">
                        Marketing Cookies:
                      </strong>{" "}
                      Used to deliver relevant advertisements
                    </li>
                  </ul>

                  <p className="mb-4">
                    You can control cookies through your browser settings.
                    However, disabling certain cookies may affect the
                    functionality of our Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Children&apos;s Privacy
                  </h2>
                  <p className="mb-4">
                    Our Service is not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children under 13. If you are a parent or guardian and
                    believe your child has provided us with personal
                    information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    9. International Data Transfers
                  </h2>
                  <p className="mb-4">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure that such transfers
                    comply with applicable data protection laws and implement
                    appropriate safeguards to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    10. Data Retention
                  </h2>
                  <p className="mb-4">
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    Policy, unless a longer retention period is required by law.
                    When we no longer need your information, we will securely
                    delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    11. Changes to This Privacy Policy
                  </h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Providing notice through our Service</li>
                  </ul>
                  <p className="mb-4">
                    Your continued use of the Service after any changes
                    indicates your acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    12. Contact Us
                  </h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our
                    privacy practices, please contact us:
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-purple-800/30">
                    <p className="text-purple-200 mb-2">
                      <strong>Email:</strong> privacy@tasktracker.com
                    </p>
                    <p className="text-purple-200 mb-2">
                      <strong>Data Protection Officer:</strong>{" "}
                      dpo@tasktracker.com
                    </p>
                    <p className="text-purple-200">
                      <strong>Address:</strong> TaskTracker Privacy Team
                      <br />
                      123 Business Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </section>

                <section className="border-t border-purple-800/30 pt-8">
                  <p className="text-sm text-gray-400">
                    This Privacy Policy is effective as of the date stated at
                    the top of this policy. We encourage you to review this
                    policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/terms">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Terms of Service
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="outline"
              className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
            >
              Back to Registration
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
