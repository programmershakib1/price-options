import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 free personal training session",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 45,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group classes",
        "2 personal training sessions per month",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 70,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "All group classes",
        "Unlimited personal training sessions",
        "Sauna access",
        "Access to premium equipment",
      ],
    },
    {
      id: 4,
      name: "Family",
      price: 100,
      currency: "USD",
      features: [
        "Access for up to 4 family members",
        "Access to gym equipment",
        "Locker room access",
        "Family group classes",
        "4 personal training sessions per month",
        "Sauna access",
      ],
    },
    {
      id: 5,
      name: "Student",
      price: 15,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Student-only group classes",
        "1 personal training session per month",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option, idx) => (
          <PriceOption key={idx} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
