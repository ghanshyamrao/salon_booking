import { APP_CONFIG } from '../../constants'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import appStoreImage from '../../assets/App Store Link.png'
import playStoreImage from '../../assets/Google Play Link.png'

const Footer = () => {
  const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Case studies', href: '#' },
    { label: 'Reviews', href: '#' },
    { label: 'Updates', href: '#' },
  ];

  const supportLinks1 = [
    { label: 'Getting started', href: '#' },
    { label: 'Help center', href: '#' },
    { label: 'Server status', href: '#' },
    { label: 'Report a bug', href: '#' },
    { label: 'Chat support', href: '#' },
  ];

  const providerLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: "Faq's", href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const supportLinks2 = [
    { label: 'Getting started', href: '#' },
    { label: 'Help center', href: '#' },
    { label: 'Other Products', href: '#' },
    { label: 'Report a bug', href: '#' },
    { label: 'Chat support', href: '#' },
  ];

  const socialIcons = [
    { icon: Facebook, href: '#', color: 'bg-[#1877F2]' },
    { icon: Instagram, href: '#', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { icon: Twitter, href: '#', color: 'bg-black' },
    { icon: MessageCircle, href: '#', color: 'bg-[#25D366]' },
    { icon: Youtube, href: '#', color: 'bg-[#FF0000]' },
    { icon: Linkedin, href: '#', color: 'bg-[#0077B5]' },
  ];

  return (
    <footer className="bg-white text-gray-900 mt-20 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-900">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-6 h-6 rounded-full ${social.color} flex items-center justify-center text-white hover:opacity-80 transition`}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              {supportLinks1.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-900">For Provider</h3>
            <ul className="space-y-2">
              {providerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              {supportLinks2.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold text-base mb-4 text-gray-900">SignUp For Subscription</h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Enter Email Address"
                  className="flex-1 border-gray-300 text-gray-900 placeholder:text-gray-500 h-10"
                />
                <Button variant="primary" className="h-10 px-6 bg-[#B56584] hover:bg-[#B56584] w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="#" className="flex-1 h-10">
                  <img 
                    src={appStoreImage} 
                    alt="Download on the App Store" 
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="#" className="flex-1 h-10">
                <img 
                    src={playStoreImage} 
                    alt="Download on the App Store" 
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Select defaultValue="english">
                  <SelectTrigger className="h-10 border-gray-300 text-sm w-full sm:w-auto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="usd">
                  <SelectTrigger className="h-10 border-gray-300 text-sm w-full sm:w-auto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="inr">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              Copyright © {new Date().getFullYear()} - All Rights Reserved {APP_CONFIG.BRAND_NAME}
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition">
                Terms and Conditions
              </a>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

