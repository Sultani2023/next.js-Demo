import { MailIcon } from "lucide-react";
import { SiGithub, SiTwitter, SiLinkedin } from 'react-simple-icons';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">RemoteTeam</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering remote teams to collaborate seamlessly from anywhere in the world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</a></li>
              <li><a href="/projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="/tasks" className="hover:text-blue-600 transition-colors">Tasks</a></li>
              <li><a href="/team" className="hover:text-blue-600 transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/support" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <SiGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <SiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <SiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <MailIcon size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">© 2026 RemoteTeam. All rights reserved.</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500">
          <p>Empowering Afghan women through technology</p>
        </div>
      </div>
    </footer>
  );
}