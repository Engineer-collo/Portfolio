import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-16">
          <div className=" bg-gray-300 rounded-md p-4 max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
            <p className="text-lg mb-6 text-gray-700">
              Feel free to reach out via email or connect with me on social media.
            </p>
            <div className="space-y-4">
              <p><strong>Email:</strong> collinslikhomba@gmail.com</p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedln
                </a>
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://web.facebook.com/profile.php?id=100005185668731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://web.facebook.com
                </a>
              </p>
              <p>
                <strong>X:</strong>{" "}
                <a
                  href="https://x.com/CollinsLikhomba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  
                </a>
              </p>
              <p className="font-medium text-lg font-sans text-gray-800">
                <strong className="text-black">Phone No:</strong> 0743250838
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
