
import { BellIcon, MessageSquareIcon, UserIcon, AlertCircleIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NotificationType = "message" | "inquiry" | "alert" | "system";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const iconMap: Record<NotificationType, React.ReactNode> = {
  message: <MessageSquareIcon className="h-4 w-4" />,
  inquiry: <UserIcon className="h-4 w-4" />,
  alert: <AlertCircleIcon className="h-4 w-4" />,
  system: <BellIcon className="h-4 w-4" />
};

interface NotificationListProps {
  notifications: Notification[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-md">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "flex items-start border-l-2 rounded-md p-3",
                !notification.read ? "border-l-primary bg-primary/5" : "border-l-transparent"
              )}
            >
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {iconMap[notification.type]}
              </div>
              <div className="flex-1">
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-muted-foreground">
                  {notification.description}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {notification.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
