
import { BellIcon, MessageSquareIcon, UserIcon, AlertCircleIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const badgeVariantMap: Record<NotificationType, "default" | "secondary" | "success" | "destructive" | "warning" | "info" | "accent"> = {
  message: "info",
  inquiry: "accent",
  alert: "destructive",
  system: "secondary"
};

interface NotificationListProps {
  notifications: Notification[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium">Notifications</CardTitle>
        {unreadCount > 0 && (
          <Badge variant="accent" className="ml-2">{unreadCount} unread</Badge>
        )}
      </CardHeader>
      <CardContent className="px-3 max-h-[calc(100vh-16rem)] overflow-auto">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "flex items-start rounded-lg border p-3 transition-colors",
                !notification.read 
                  ? "bg-primary/5 border-primary/20" 
                  : "hover:bg-muted/50"
              )}
            >
              <div className={cn(
                "mr-3 flex h-9 w-9 items-center justify-center rounded-full",
                `bg-${badgeVariantMap[notification.type]}/10`
              )}>
                <div className={cn("text-", badgeVariantMap[notification.type])}>
                  {iconMap[notification.type]}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="font-medium">{notification.title}</div>
                  {!notification.read && (
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {notification.description}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
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
