import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">
            {initials}
          </div>
          <CardTitle>{user.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mt-1 text-sm text-muted-foreground">
            {user.company?.name ?? user.company_name ?? "-"}
        </p>

        <div className="mt-4 flex gap-2">
          <Button className="flex-1 rounded-full">View Profile</Button>

          <Button
            variant="outline"
            onClick={onToggleFavorite}
            className={cn(
              "rounded-full",
              isFavorite && "border-primary text-primary"
            )}
          >
            <Heart
              className="size-4"
              fill={isFavorite ? "currentColor" : "none"}
            />
            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}