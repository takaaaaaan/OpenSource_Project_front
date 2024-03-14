// components/ui/AspectRatioCard.tsx
import { Card } from "@/components/ui/card";

interface AspectRatioCardProps {
  children: React.ReactNode;
}

const AspectRatioCard: React.FC<AspectRatioCardProps> = ({ children }) => {
  return (
    <div className="relative pb-1/1">
      <Card className="absolute top-0 left-0 h-full w-full">{children}</Card>
    </div>
  );
};

export default AspectRatioCard;
