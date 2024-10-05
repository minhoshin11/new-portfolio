export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} 신민호</p>
        <div className="flex justify-center space-x-4 sm:mr-9 gap-2 flex-col sm:flex-row">
          <div className="hover:text-blue-400">
            Email: tlsalsgh777@naver.com
          </div>
          <a className="hover:text-blue-400">Phone: 010-2237-7592</a>
        </div>
      </div>
    </footer>
  );
}
