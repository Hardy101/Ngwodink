const HeroSection = () => {
  return (
    <section className="pt-16">
      <div className="relative font-manrope h-dvh grid gap-x-24 grid-cols-2 text-white px-16 pt-32 pb-16">
        {/* Floating dots */}
        <span className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-primary rounded-full"></span>
        <span className="absolute bottom-30 right-1/4 w-4 h-4 bg-green-primary rounded-full"></span>
        <div className="text grid gap-y-8 mb-auto">
          <h1 className="text-7xl font-manrope-semi-bold">
            It's time to make your software
          </h1>
          <p className="text-light-primary font-manrope-semi-bold">
            What do you want to code [code, build, deploy, collaborate on,
            analyze and learn] today?
          </p>
          <button className="bg-green-primary text-black px-4 py-2 rounded-md mr-auto flex items-center gap-x-2 font-manrope-semi-bold">
            <span>Download</span>
            <span className="w-px h-3 bg-black rounded-md"></span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <p className="mt-4 font-manrope-medium">
            Trusted by software reviews - <span className="italic">Coders</span>
          </p>
          <p className="flex gap-4">
            <ul className="flex items-center gap-x-2 text-green-primary">
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star-half-stroke"></i>
              </li>
            </ul>
            <span>
              4.8<span className="text-light-primary">/5.0</span>
            </span>
          </p>
        </div>
        <div className="code-editor-container relative text-sm">
          <div className="code-editor-selector absolute bottom-0 -left-1/8 w-full bg-dark-secondary rounded-md p-4 shadow-green-transparent shadow-2xl">
            <ul className="flex flex-col gap-y-1">
              <li className="flex items-center gap-x-2 bg-green-transparent rounded-lg p-1 hover:bg-green-transparent">
                <i className="fa-solid fa-cube"></i>
                <span className="grow flex justify-between">
                  <span>List</span>
                  <span>(mixed $var1 [, mixed $...]):array</span>
                </span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_set_streams_context</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_set_external_entity_loader</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_get_last_error</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>lcfirst</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_use_internal_errors</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_disable_entity_loader</span>
              </li>
              <li className="flex items-center gap-x-2  p-1 rounded-lg cursor-pointer hover:bg-green-transparent">
                <i className="fa-solid fa-cube text-green-primary"></i>
                <span>Libxml_get_errors</span>
              </li>
            </ul>
          </div>
          <div className="code-editor w-4/5 h-full bg-dark-secondary rounded-md p-8 ml-auto">
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
              <span className="mr-2 text-green-primary">ReportController</span>
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
    </section>
  );
};

export default HeroSection;
