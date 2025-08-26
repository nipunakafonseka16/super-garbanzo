export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">About Cisco</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Cisco
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Connect with a partner
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Trademarks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Supply Chain Transparency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                <img
                  src="https://ext.same-assets.com/1364585098/10178532.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                <img
                  src="https://ext.same-assets.com/1364585098/3160824485.svg"
                  alt="X/Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                <img
                  src="https://ext.same-assets.com/1364585098/3444395379.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                <img
                  src="https://ext.same-assets.com/1364585098/4249169664.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Cisco Systems, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
