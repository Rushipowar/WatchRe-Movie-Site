import React from "react";

function SubscribePage() {
  const subPlans = [
    {
      id: 1,
      title: "Basic Plan",
      price: 9.99,
      month: 1,
      button: "Get Started",
      li: [
        "Access Movies",
        "Get Movie Details",
        "Limited Access",
        "1 Month Only",
      ],
    },
    {
      id: 2,
      title: "Standard Plan",
      price: 49.99,
      month: 6,
      button: "Buy Now",
      li: [
        "Access Movies",
        "Get Movie Details",
        "All Access",
        "6 Month Only",
      ],
    },
    {
      id: 3,
      title: "Upgraded Plan",
      price: 99.99,
      month: 12,
      button: "Upgrade Now",
      li: [
        "Access Movies",
        "Get Movie Details",
        "All Access",
        "12 Month Only",
      ],
    },
  ];
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
            {subPlans.map((subPlan, index) => {
              return (
                <div
                key={index} className="cardone text-black px-2 py-2 bg-slate-200 shadow-lg w-96 h-96 text-center rounded-md hover:scale-110 duration-300"
                >
                  <h3 className="text-left ml-3 mt-3">{subPlan.title}</h3>
                  <h2 className="mt-3 ml-3 font-bold text-lg text-left">
                    ${subPlan.price}/{" "}
                    <span className="font-semibold">{subPlan.month} Month</span>
                  </h2>
                  <button className="px-28 py-3 bg-yellow-300 rounded-md hover:bg-yellow-400 duration-300 text-white mt-5 ml-3 font-bold">
                    {subPlan.button}
                  </button>
                  <ul className="mt-6 text-start ml-12">
                    {subPlan.li.map((li) => {
                      return (
                        <li className="mt-6">
                          <i class="fa fa-check mr-2"></i>
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscribePage;
