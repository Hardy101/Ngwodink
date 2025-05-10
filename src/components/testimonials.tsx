import { face } from "../assets/constants/media";

const people_testimonials = [
  {
    id: 0,
    title: "Amazing One",
    comment:
      "VS code will have deep remote development. You can connect to a container running a different OS and use any VS code plugins, debugging for that",
    author: "Raymed Floyd",
    profile_src: face.face1,
    position: "Backend Engineer",
  },
  {
    id: 1,
    title: "Really helpful",
    comment:
      "Revolutionary tech. This invention will reimagine the way code editors work and how we interact with code",
    author: "Raymed Floyd",
    profile_src: face.face2,
    position: "Backend Engineer",
  },
  {
    id: 2,
    title: "Really helpful",
    comment:
      "Revolutionary tech. This invention will reimagine the way code editors work and how we interact with code",
    author: "Raymed Floyd",
    profile_src: face.face3,
    position: "Backend Engineer",
  },
  {
    id: 3,
    title: "Really helpful",
    comment:
      "Revolutionary tech. This invention will reimagine the way code editors work and how we interact with code",
    author: "Raymed Floyd",
    profile_src: face.face4,
    position: "Backend Engineer",
  },
  {
    id: 4,
    title: "Really helpful",
    comment:
      "Revolutionary tech. This invention will reimagine the way code editors work and how we interact with code",
    author: "Raymed Floyd",
    profile_src: face.face5,
    position: "Backend Engineer",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="relative px-16 py-16 font-manrope bg-dark-secondary text-white">
        <div className="heading text-center">
          <h2 className="text-5xl font-manrope-bold">Love from developers</h2>
          <p className="text-lg mx-auto text-light-primary mt-3">
            Join with 2500+ developers building with Ngwodink
          </p>
        </div>
        <div className="fromusers grid grid-cols-3 gap-8 mt-8">
          {people_testimonials.map((people) => (
            <div
              key={people.id}
              className="grid gap-y-4 bg-dark-primary/30 backdrop-blur-2xl p-4 border-2 border-light-primary rounded-xl"
            >
              <h3 className="font-manrope-semi-bold text-lg">{people.title}</h3>
              <p className="text-light-primary">{people.comment}</p>
              <div className="flex gap-3 justify-between items-center">
                <img src={people.profile_src} alt="profile image of person" className="w-8 h-8 rounded-full" />
                <p className="flex flex-col gap-1 mr-auto">
                  <span>{people.author}</span>
                  <span className="text-light-primary">{people.position}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
