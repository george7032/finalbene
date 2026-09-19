import Layout from "@/components/Layout";
import { Star, Clock, Shield } from "lucide-react";
const park1Image = "/images/park1.jpeg";
const park2Image = "/images/park2.jpeg";
const park3Image = "/images/park3.jpeg";

const features = [
  { title: "Bouncing Castles", description: "Multiple themed bounce houses for different age groups", icon: Star },
  { title: "Slides & Climbing", description: "Safe slides and climbing structures for adventurous play", icon: Star },
  { title: "Swings & Rides", description: "Traditional swings and modern fun rides for all ages", icon: Star },
  { title: "Play Zones", description: "Dedicated areas for toddlers and older children", icon: Star },
];

const packages = [
  { title: "Birthday Party Package", price: "From Ksh 5,000", features: ["3-hour park access", "Decorated party area", "Birthday setup assistance", "Safety supervision", "Photography area"], color: "from-pink-400 to-pink-600" },
  { title: "Family Fun Day", price: "From Ksh 2,000", features: ["Full day access", "Family seating area", "Refreshment options", "Safety equipment", "Photo opportunities"], color: "from-blue-400 to-blue-600" },
  { title: "Weekend Special", price: "From Ksh 1,500", features: ["4-hour weekend access", "Group activities", "Snack provisions", "Safety supervision", "Fun competitions"], color: "from-green-400 to-green-600" },
];

const safetyMeasures = [
  "Regular equipment inspection and maintenance",
  "Trained supervisors on duty at all times",
  "Age-appropriate play zones",
  "First aid station on-site",
  "Safety briefings before activities",
  "Sanitized equipment and play areas",
];

export default function ParkPage() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Kids Amusement Park</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Where Fun Meets Learning! The most exciting playground in Embakasi
          </p>
          <div className="mt-8">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
              Book Your Visit Today!
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Amazing Play Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className="hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[park1Image, park2Image, park3Image].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-64">
                <img src={img} alt={`Park area ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Fun Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your celebration or family outing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="hover-lift">
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
                  <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-3xl font-bold">{pkg.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                      Book This Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Safety First</h2>
              <p className="text-xl text-muted-foreground">
                Your child's safety is our top priority. We maintain the highest safety standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyMeasures.map((measure) => (
                <div key={measure} className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-muted-foreground">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">Operating Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Weekdays</h3>
                <p className="text-lg">3:00 PM - 6:00 PM</p>
                <p className="text-white/80 text-sm mt-2">(After school hours)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Weekends</h3>
                <p className="text-lg">9:00 AM - 6:00 PM</p>
                <p className="text-white/80 text-sm mt-2">(Full day fun)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
