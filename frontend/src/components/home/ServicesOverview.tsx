import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import type { Service } from "@/lib/types";
import { formatPrice, truncate } from "@/lib/utils";
import { services as mockServices } from "@/lib/mock-data";
import {
  PiHeartbeat,
  PiStethoscope,
  PiShieldCheck,
  PiFlower,
  PiClipboardText,
  PiMonitor,
  PiBaby,
  PiFirstAid,
} from "react-icons/pi";

const iconMap: Record<string, React.ReactNode> = {
  prenatal: <PiBaby size={32} />,
  gynecology: <PiStethoscope size={32} />,
  delivery: <PiFirstAid size={32} />,
  "high-risk": <PiShieldCheck size={32} />,
  fertility: <PiFlower size={32} />,
  checkup: <PiClipboardText size={32} />,
  ultrasound: <PiMonitor size={32} />,
  postpartum: <PiHeartbeat size={32} />,
};

function getIcon(service: Service, index: number) {
  if (service.icon && iconMap[service.icon]) return iconMap[service.icon];
  const keys = Object.keys(iconMap);
  return iconMap[keys[index % keys.length]];
}

interface ServicesOverviewProps {
  services?: Service[];
}

export default function ServicesOverview({
  services = mockServices,
}: ServicesOverviewProps) {
  // Show first 6 per UI spec
  const displayed = services.slice(0, 6);

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[26px] font-bold text-text-primary md:text-[36px]">
            Our Services
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-text-secondary">
            Comprehensive obstetrics and gynecology care tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((service, index) => {
            const name = service.name;
            const desc = service.description;
            const accent = index % 2 === 0 ? "primary" : "secondary";

            return (
              <Card
                key={service.id}
                hover
                accentColor={accent}
                className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                    accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}>
                  {getIcon(service, index)}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {truncate(desc, 100)}
                </p>
                <p className="mt-3 text-sm font-semibold text-primary">
                  {formatPrice(service.price)}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/services">
            <Button variant="secondary">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
