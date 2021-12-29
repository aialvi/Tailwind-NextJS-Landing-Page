import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "14-day free trial",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Premium setup support",
    description:
      "Customers can experience all the benefits free of charge by selecting the 14-day trial. Cancel anytime!",
    icon: ScaleIcon,
  },
  {
    name: "Over 30+ reports",
    description:
      "Real-time adherence reports are available on the multiple factors of products, stocks and related sectors.",
    icon: LightningBoltIcon,
  },
  {
    name: "Accounting module",
    description:
      "brief summary of accounting operations, receivables, cash flows etc based onn the inventory system.",
    icon: AnnotationIcon,
  },
];

export default function Features() {
  return (
    <div className="mb-12 py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center py-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Invenerry
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage inventory
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            With inVenerry, you get simple yet powerful software for maintaining
            product relationss with manufacturers, B2B wholesalers, online
            sellers and retailers. Its robust reporting capabilities and
            analytics make it the best choice for inventory management.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
