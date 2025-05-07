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

            <CodeEditor />
          </div>
          <div className="process flex justify-between">
            <div className="order-2 w-1/2 process-text grid gap-y-8 mb-auto">
              <h3 className="text-white text-3xl font-manrope-bold">
                Run & Debub
              </h3>
              <p className="text-light-primary font-manrope-medium">
                Debug code right from the editor. Launch or attach to your
                running app and debug with breakpoints, call stack and an
                interactive console.
              </p>
              <button className="text-green-primary mr-auto flex items-center gap-x-2 font-manrope-semi-bold">
                <span>View Intellisense</span>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            {/* <div className="rotate-90 w-full h-px bg-gradient-to-r from-transparent via-[#a8ff60] to-transparent opacity-70"></div> */}

            <div className="w-1/2 process-code bg-dark-quaternary pt-16 pl-16 text-light-primary border-2 rounded-2xl border-light-primary/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CodeEditor = () => {
  return (
    <div className="w-1/2 process-code bg-dark-quaternary pt-16 pl-16 text-light-primary border-2 rounded-2xl border-light-primary/40">
      <div className="code-editor bg-dark-secondary rounded-md text-sm p-8 ml-auto">
        <p className="font-manrope-medium">
          <ol className="list-inside leading-7 [&>li]:before:text-dark-primary [&>li]:before:content-[attr(value)] [&>li]:before:mr-2 [&>li]:before:font-manrope-medium">
            <li value="1">
              <span className="text-dark-tertiary pl-3">{"<?php"}</span>
            </li>
            <li value="2"></li>
            <li value="3">
              <span className="inline-block text-dark-tertiary pl-3 pr-2">
                namespace
              </span>
              <span className="text-green-primary">
                App\Http\Controllers\Api
              </span>
            </li>
            <li value="4">
              <span className="inline-block text-dark-tertiary pl-3 pr-2">
                use
              </span>
              <span>App\Helpers</span>
              <span className="text-green-primary">\Constant;</span>
            </li>
            <li value="5">
              <span className="inline-block text-dark-tertiary pl-3 pr-2">
                use
              </span>
              <span>Illuminate\Http</span>
              <span className="text-green-primary">\Request;</span>
            </li>
            <li value="6">
              <span className="inline-block text-dark-tertiary pl-3 pr-2">
                use
              </span>
              <span>App\Models</span>
              <span className="text-green-primary">\Report;</span>
            </li>
            <li value="7">
              <span className="inline-block text-dark-tertiary pl-3 pr-2">
                class
              </span>
              <span className="mr-2 text-green-primary">ReportController</span>
              <span className="text-dark-tertiary mr-2">extends</span>
              <span className="text-green-primary">Controller</span>
            </li>
            <li value="8">
              <span className="text-purple-500 pl-3">{"{"}</span>
            </li>
            <li value="9">
              <span className="inline-block text-dark-tertiary ml-8 mr-2">
                public
              </span>
              <span className="mr-2 text-dark-tertiary">function</span>
              <span className="text-green-primary">list()</span>
            </li>
            <li value="10">
              <span className="ml-8 text-purple-500 pl-3">{"{"}</span>
            </li>
            <li value="11">
              <span className="inline-block text-dark-tertiary ml-16 mr-2">
                $filters = [];
              </span>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Steps;
