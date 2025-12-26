import {
  SubscribeButton,
  SubscriptionContainer,
  SubscriptionFeatures,
  SubscriptionPrice,
  SubscriptionTitle,
} from "./src";

interface SubscriptionCardProps {
  name: string;
  description?: string;
  price: string;
  period: string;
  features: string[];
  isLoggedIn: boolean;
  mostPopular?: boolean;
}

const SubscriptionCard = ({
  name,
  description,
  price,
  period,
  features,
  isLoggedIn,
  mostPopular,
}: SubscriptionCardProps) => {
  return (
    <SubscriptionContainer mostPopular={mostPopular}>
      <SubscriptionTitle name={name} description={description} />
      <SubscriptionPrice price={price} period={period} />
      <SubscriptionFeatures features={features} />
      <SubscribeButton
        planName={name}
        mostPopular={mostPopular}
        isLoggedIn={isLoggedIn}
      />
    </SubscriptionContainer>
  );
};
SubscriptionCard.displayName = "SubscriptionCard";

export { SubscriptionCard };
