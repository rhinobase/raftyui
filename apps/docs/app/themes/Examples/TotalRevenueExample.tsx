import { Text } from "@rafty/ui";

export function TotalRevenueExample() {
  return (
    <div className="space-y-1">
      <Text className="text-sm font-medium">Total Revenue</Text>
      <div>
        <Text className="text-2xl font-bold">$15,231.89</Text>
        <Text className="text-xs opacity-60">+20.1% from last month</Text>
      </div>
    </div>
  );
}
