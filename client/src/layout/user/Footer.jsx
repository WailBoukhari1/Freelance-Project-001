import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="p-10 text-black border border-top-primary">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-2 animate-fadeInUp text-primary">
            Company Name
          </h3>
          <p className="text-sm animate-fadeInUp delay-200">
            Making quality products since xxxx.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <PhoneOutlined className="text-primary" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailOutlined className="text-primary" />
              <span>info@company.com</span>
            </div>
          </div>
        </div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 animate-fadeInUp delay-400">
          <li>
            <a
              href="/about"
              className="hover:underline hover:text-primary transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:underline hover:text-primary transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:underline hover:text-primary transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="hover:underline hover:text-primary transition duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-start">
          <p className="animate-fadeInUp delay-600">Follow us:</p>
          <div className="flex space-x-4 mt-2 animate-fadeInUp delay-800">
            <a
              href="https://facebook.com"
              className="hover:text-pink-100 transition duration-300 text-primary"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-pink-100 transition duration-300 text-primary"
            >
              <TwitterOutlined />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-100 transition duration-300 text-primary"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-pink-100 transition duration-300 text-primary"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-6 animate-fadeInUp delay-1000">
        <div>© 2024 Company Name. All rights reserved.</div>
        <div className="space-x-4 mt-2 md:mt-0">
          <a
            href="/privacy"
            className="hover:underline hover:text-primary transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline hover:text-primary transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
