const featuresClasses =
  "group bg-dark-quaternary rounded-2xl p-8 border border-light-primary/40 hover:border-green-primary hover:shadow-lg shadow-green-primary/20 hover:bg-green-primary/10 transition-all duration-300 cursor-pointer";
const iconClasses = "group-hover:text-green-primary text-light-primary/50 text-3xl bg-dark-quinary rounded-lg px-6 py-3 mr-auto";
const Features = () => {
  return (
    <section>
      <div className="px-16 py-16 font-manrope bg-dark-secondary">
        <h2 className="text-white text-5xl font-manrope-bold">Our features</h2>
        <p className="text-light-primary mt-4">
          What do you want to code [code, build, deploy, collaborate on, analyze
          and learn] today?
        </p>
        <div className="grid grid-cols-4 gap-x-16 mt-16">
          {/* Intellisense */}
          <div className={featuresClasses}>
            <div className="flex flex-col gap-y-4">
              <i className={`fa-solid fa-lightbulb ${iconClasses}`}></i>
              <h3 className="text-white text-2xl font-manrope-bold">
                Intellisense
              </h3>
              <p className="text-light-primary">
                Go beyond syntax highlighting and autocomplete with
                Intellisense.
              </p>
            </div>
          </div>
          {/* Run and Debug */}
          <div className={featuresClasses}>
            <div className="flex flex-col gap-y-4">
              <i className={`fa-solid fa-play ${iconClasses}`}></i>
              <h3 className="text-white text-2xl font-manrope-bold">
                Run and Debug
              </h3>
              <p className="text-light-primary">
                Run and debug your code with ease.
              </p>
            </div>
          </div>
          {/* Version Control */}
          <div className={featuresClasses}>
            <div className="flex flex-col gap-y-4">
              <i className={`fa-solid fa-code-branch ${iconClasses}`}></i>
              <h3 className="text-white text-2xl font-manrope-bold">
                Built-in Git
              </h3>
              <p className="text-light-primary">
                Track changes and collaborate with ease.
              </p>
            </div>
          </div>
          {/* Extensions */}
          <div className={featuresClasses}>
            <div className="flex flex-col gap-y-4">
              <i className={`fa-solid fa-plug ${iconClasses}`}></i>
              <h3 className="text-white text-2xl font-manrope-bold">
                Extensions
              </h3>
              <p className="text-light-primary">
                Install extensions to add new features to your code editor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
