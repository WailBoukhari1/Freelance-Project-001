const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Company Name</h3>
          <p className="text-sm">Making quality products since 1999.</p>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <div>
          <p>Follow us:</p>
          <div className="flex space-x-2">
            <a href="https://facebook.com" className="hover:text-gray-400">FB</a>
            <a href="https://twitter.com" className="hover:text-gray-400">TW</a>
            <a href="https://instagram.com" className="hover:text-gray-400">IG</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        © 2023 Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
