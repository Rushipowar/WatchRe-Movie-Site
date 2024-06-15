import React from "react";

function SubscribePage() {
  return (
    <div>
      <section className="Header">
        <h1>Pricing</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          molestiae earum porro in maiores, harum impedit, distinctio qui iure
          ipsam perferendis facilis ratione veritatis id voluptatem nihil
          recusandae at laborum!
        </p>
      </section>

      <section>
        <div className="Cards">
          <h1>Subscription Plans</h1>
          <div className="w-full h-full flex justify-center gap-6">
            <div className="cardone text-black px-2 py-2 bg-slate-200 shadow-lg w-96 h-96 text-center rounded-md hover:scale-125 duration-300">
              <h3 className="text-left ml-3 mt-3">Basic Plan</h3>
              <h2 className="mt-3 ml-3 font-bold text-lg text-left">
                $9.99/ <span className="font-semibold">month</span>
              </h2>
              <button className="px-28 py-3 bg-yellow-300 rounded-md text-white mt-5 ml-3 font-bold">
                Get Started
              </button>
              <ul className="mt-6 text-start ml-12">
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Access Movies</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Get Movie Details</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Limited Access</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>1 Month Only</li>
              </ul>
            </div>

            <div className="cardone text-black px-2 py-2 bg-slate-200 shadow-lg w-96 h-96 text-center rounded-md scale-110">
              <h3 className="text-left ml-3 mt-3">Basic Plan</h3>
              <h2 className="mt-3 ml-3 font-bold text-lg text-left">
                $9.99/ <span className="font-semibold">month</span>
              </h2>
              <button className="px-28 py-3 bg-yellow-300 rounded-md text-white mt-5 ml-3 font-bold">
                Get Started
              </button>
              <ul className="mt-6 text-start ml-12">
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Access Movies</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Get Movie Details</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Limited Access</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>1 Month Only</li>
              </ul>
            </div>

            <div className="cardone text-black px-2 py-2 bg-slate-200 shadow-lg w-96 h-96 text-center rounded-md">
              <h3 className="text-left ml-3 mt-3">Basic Plan</h3>
              <h2 className="mt-3 ml-3 font-bold text-lg text-left">
                $9.99/ <span className="font-semibold">month</span>
              </h2>
              <button className="px-28 py-3 bg-yellow-300 rounded-md text-white mt-5 ml-3 font-bold">
                Get Started
              </button>
              <ul className="mt-6 text-start ml-12">
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Access Movies</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Get Movie Details</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>Limited Access</li>
                <li className="mt-6"><i class="fa fa-check mr-2"></i>1 Month Only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscribePage;
