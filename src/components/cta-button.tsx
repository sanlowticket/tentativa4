import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAButton() {
  const handlePurchase = () => {
    window.open('https://pay.celetus.com/P1UPFZAS', '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-center">
        <Button 
          onClick={handlePurchase}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all animate-pulse-cta"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          COMPRAR COM DESCONTO
        </Button>
      </div>
    </div>
  );
}