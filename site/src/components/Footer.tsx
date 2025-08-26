import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About Cisco
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Connect with a partner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Statement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Trademarks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Supply Chain Transparency
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <img
                  src="https://ext.same-assets.com/1364585098/10178532.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <img
                  src="https://ext.same-assets.com/1364585098/3160824485.svg"
                  alt="X/Twitter"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <img
                  src="https://ext.same-assets.com/1364585098/3444395379.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <img
                  src="https://ext.same-assets.com/1364585098/4249169664.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            © 2025 Cisco Systems, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
