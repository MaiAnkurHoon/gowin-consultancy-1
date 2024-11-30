

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Consultancy Service</h3>
            <p className="text-sm">
              Providing expert consultancy services to help your business grow and succeed.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">
              Email: info@example.com<br />
              Phone: +123 456 7890
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-300 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04 4.27 4.27 0 00-7.29 3.9A12.13 12.13 0 013 4.79a4.27 4.27 0 001.32 5.7 4.23 4.23 0 01-1.94-.54v.05a4.27 4.27 0 003.42 4.18 4.27 4.27 0 01-1.93.07 4.27 4.27 0 003.99 2.97A8.56 8.56 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 4.56a8.56 8.56 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-300 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.08 8.2 8.8v-6.22h-2.47v-2.58h2.47v-1.97c0-2.44 1.49-3.78 3.67-3.78 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.58h-2.45v6.22c4.62-.72 8.2-4.38 8.2-8.8 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-teal-300 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.08 8.2 8.8v-6.22h-2.47v-2.58h2.47v-1.97c0-2.44 1.49-3.78 3.67-3.78 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.58h-2.45v6.22c4.62-.72 8.2-4.38 8.2-8.8 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Consultancy Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;