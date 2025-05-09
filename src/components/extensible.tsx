const Customizable: React.FC = () => {
  return (
    <section>
      <div className="relative px-16 py-16 font-manrope bg-dark-secondary text-white overflow-clip">
        <div
          className="absolute w-1/4 h-1/2 top-20 left-36 bg-green-primary"
          style={{
            background:
              "radial-gradient(circle at left center, #b4f34e 0%, transparent 70%)",
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 bg-dark-secondary/20 backdrop-blur-3xl"></div>
        <div className="relative text grid gap-y-6 z-10">
          <h2 className="text-5xl font-manrope-bold">
            Extensible and customizable
          </h2>
          <p className="w-2/5 text-lg">
            Want even more features? Install extensions to add new languages,
            themes, debuggers, and to connect to additional services
          </p>
          <button className="text-green-primary mr-auto flex items-center gap-x-2 font-manrope-semi-bold mt-4">
            <span>View Intellisense</span>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customizable;
