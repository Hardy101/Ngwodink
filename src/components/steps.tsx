const Steps = () => {
  return (
    <section>
      <div className="px-16 py-16 font-manrope bg-dark-secondary">
        <div className="heading text-center">
          <h2 className="text-white text-5xl font-manrope-bold">
            Build code real-time platform
          </h2>
          <p className="w-2/5 text-light-primary font-manrope-medium mt-4 mx-auto">
            What do you want to code [code, build, deploy, collaborate on,
            analyze and learn] today?
          </p>
        </div>
        <div className="processes mt-32">
          {/* Meet Intellisense */}
          <div className="process flex justify-between">
            <div className="w-1/2 process-text grid gap-y-8 mb-auto">
              <h3 className="text-white text-3xl font-manrope-bold">
                Meet Intellisense
              </h3>
              <p className="text-light-primary font-manrope-medium">
                Go beyond syntax highlighting and autocomplete with
                Intellisense, which provides smart autocomplete based on
                variable types, function definitions and imported modules.
              </p>
              <button className="text-green-primary mr-auto flex items-center gap-x-2 font-manrope-semi-bold">
                <span>View Intellisense</span>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            {/* <div className="rotate-90 w-full h-px bg-gradient-to-r from-transparent via-[#a8ff60] to-transparent opacity-70"></div> */}

            <div className="w-1/2 process-code bg-dark-quaternary pt-16 pl-16 text-light-primary border-2 rounded-2xl border-light-primary/40">
              <div className="code-editor bg-dark-secondary rounded-md p-8 ml-auto">
                <p className="font-manrope-medium leading-8">
                  <span className="text-dark-primary mr-6">1</span>
                  <span className="text-dark-tertiary">{"<?php"}</span>
                  <span className="block text-dark-primary">2</span>
                  <span className="text-dark-primary mr-6">3</span>
                  <span className="inline-block text-dark-tertiary mr-2">
                    namespace
                  </span>
                  <span className="text-green-primary">
                    App\Http\Controllers\Api
                  </span>
                  <br />
                  <span className="text-dark-primary mr-6">4</span>
                  <span className="text-dark-tertiary mr-2">use</span>
                  <span>App\Helpers</span>
                  <span className="text-green-primary">\Constant;</span>
                  <br />
                  <span className="text-dark-primary mr-6">5</span>
                  <span className="text-dark-tertiary mr-2">use</span>
                  <span>Illuminate\Http</span>
                  <span className="text-green-primary">\Request;</span>
                  <br />
                  <span className="text-dark-primary mr-6">6</span>
                  <span className="text-dark-tertiary mr-2">use</span>
                  <span>App\Models</span>
                  <span className="text-green-primary">\Report;</span>
                  <span className="block text-dark-primary mr-6">7</span>
                  <span className="text-dark-primary mr-6">8</span>
                  <span className="inline-block text-dark-tertiary mr-2">
                    class
                  </span>
                  <span className="mr-2 text-green-primary">
                    ReportController
                  </span>
                  <span className="text-dark-tertiary mr-2">extends</span>
                  <span className="text-green-primary">Controller</span>
                  <br />
                  <span className="text-dark-primary mr-6">9</span>
                  <span className="text-purple-500">{"{"}</span>
                  <br />
                  <span className="text-dark-primary mr-6">10</span>
                  <span className="inline-block text-dark-tertiary ml-8 mr-2">
                    public
                  </span>
                  <span className="mr-2 text-dark-tertiary">function</span>
                  <span className="text-green-primary">list()</span>
                  <br />
                  <span className="text-dark-primary mr-6">11</span>
                  <span className="ml-8 text-purple-500">{"{"}</span>
                  <br />
                  <span className="text-dark-primary mr-6">12</span>
                  <span className="inline-block text-dark-tertiary ml-16 mr-2">
                    $filters = [];
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
