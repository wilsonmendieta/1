export function Stats() {
  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Team Members", value: "200+" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
