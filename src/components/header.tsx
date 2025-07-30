import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handlePurchase = () => {
    window.open('https://pay.celetus.com/P1UPFZAS', '_blank');
  };

  return null;
}
