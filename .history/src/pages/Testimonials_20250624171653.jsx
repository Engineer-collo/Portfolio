export default function Testimonials() {
    const testimonials = [
      {
        name: "Simon Waweru",
        content: "Working with Collins was a game-changer! His expertise in React and backend integration is unmatched.",
        profile_pic: "https://i.pinimg.com/736x/f0/4b/c7/f04bc7f4b16a2fc94078139ad03e6f88.jpg",
      },
      {
        name: "Irine Cherop",
        content: "Collins is a team player and a tech visionary. He delivered our project ahead of schedule with superb quality.",
        profile_pic: ",
      },
      {
        name: "Joy A.",
        content: "He doesn't just write code—he solves real problems. A true full-stack craftsman!",
        profile_pic: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ];
  
    return (
      <div className="bg-gray-950 text-white py-14 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-teal-400">
          💬 What People Are Saying
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/30 transition transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.profile_pic}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-teal-400 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-teal-300">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  