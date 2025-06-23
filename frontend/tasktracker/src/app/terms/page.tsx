import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
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
            <Link href="/register">
              <Button
                variant="outline"
                className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
              >
                Back to Register
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
                Terms of Service
              </h1>
              <p className="text-purple-200 mb-8">Last updated: January 2024</p>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mb-4">
                    By accessing and using TaskTracker (&quot;the
                    Service&quot;), you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree
                    to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Description of Service
                  </h2>
                  <p className="mb-4">
                    TaskTracker is a web-based task management application that
                    allows users to create, organize, and track their tasks and
                    projects. The Service is provided to you free of charge for
                    personal and commercial use, subject to the terms and
                    conditions set forth in this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. User Accounts and Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong className="text-purple-300">
                        Account Creation:
                      </strong>{" "}
                      You must provide accurate and complete information when
                      creating your account. You are responsible for maintaining
                      the confidentiality of your account credentials.
                    </p>
                    <p>
                      <strong className="text-purple-300">
                        Account Security:
                      </strong>{" "}
                      You are responsible for all activities that occur under
                      your account. Please notify us immediately of any
                      unauthorized use of your account.
                    </p>
                    <p>
                      <strong className="text-purple-300">
                        Age Requirement:
                      </strong>{" "}
                      You must be at least 13 years old to use this Service.
                      Users under 18 must have parental consent.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Acceptable Use Policy
                  </h2>
                  <p className="mb-4">You agree not to use the Service to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Upload, post, or transmit any content that is illegal,
                      harmful, or violates others&apos; rights
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the Service or
                      other users&apos; accounts
                    </li>
                    <li>
                      Use the Service for any commercial purpose without our
                      express written consent
                    </li>
                    <li>
                      Interfere with or disrupt the Service or servers connected
                      to the Service
                    </li>
                    <li>
                      Violate any applicable local, state, national, or
                      international law
                    </li>
                    <li>
                      Impersonate any person or entity or misrepresent your
                      affiliation
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Content and Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong className="text-purple-300">Your Content:</strong>{" "}
                      You retain ownership of all content you create and store
                      in TaskTracker. By using the Service, you grant us a
                      limited license to store, display, and process your
                      content solely for the purpose of providing the Service.
                    </p>
                    <p>
                      <strong className="text-purple-300">Our Content:</strong>{" "}
                      The Service, including its design, functionality, and
                      underlying technology, is owned by TaskTracker and
                      protected by intellectual property laws.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Privacy and Data Protection
                  </h2>
                  <p className="mb-4">
                    Your privacy is important to us. Our collection and use of
                    your personal information is governed by our Privacy Policy,
                    which is incorporated into these Terms by reference. By
                    using the Service, you consent to the collection and use of
                    your information as outlined in our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Service Availability
                  </h2>
                  <p className="mb-4">
                    While we strive to provide reliable service, we do not
                    guarantee that the Service will be available at all times.
                    The Service may be temporarily unavailable due to
                    maintenance, updates, or technical issues. We reserve the
                    right to modify, suspend, or discontinue the Service at any
                    time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Termination
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong className="text-purple-300">By You:</strong> You
                      may terminate your account at any time by contacting us.
                    </p>
                    <p>
                      <strong className="text-purple-300">By Us:</strong> We may
                      terminate or suspend your account immediately if you
                      violate these Terms or engage in conduct that we determine
                      to be harmful to the Service or other users.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    9. Disclaimers and Limitations
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong className="text-purple-300">
                        Service &quot;As Is&quot;:
                      </strong>{" "}
                      The Service is provided &quot;as is&quot; without
                      warranties of any kind, either express or implied.
                    </p>
                    <p>
                      <strong className="text-purple-300">
                        Limitation of Liability:
                      </strong>{" "}
                      TaskTracker shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages
                      resulting from your use of the Service.
                    </p>
                    <p>
                      <strong className="text-purple-300">Data Loss:</strong>{" "}
                      While we implement security measures to protect your data,
                      we recommend maintaining your own backups of important
                      information.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. We
                    will notify users of significant changes via email or
                    through the Service. Your continued use of the Service after
                    such modifications constitutes acceptance of the updated
                    Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    11. Governing Law
                  </h2>
                  <p className="mb-4">
                    These Terms shall be governed by and construed in accordance
                    with the laws of Colorado, without regard to its conflict of
                    law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    12. Contact Information
                  </h2>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us at:
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-purple-800/30">
                    <p className="text-purple-200">
                      <strong>Email:</strong> legal@tasktracker.com
                    </p>
                    <p className="text-purple-200">
                      <strong>Address:</strong> TaskTracker Legal Department
                      <br />
                      123 Business Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </section>

                <section className="border-t border-purple-800/30 pt-8">
                  <p className="text-sm text-gray-400">
                    By clicking &quot;I agree&quot; during registration, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service.
                  </p>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/register">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Back to Registration
            </Button>
          </Link>
          <Link href="/privacy">
            <Button
              variant="outline"
              className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
            >
              Privacy Policy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
