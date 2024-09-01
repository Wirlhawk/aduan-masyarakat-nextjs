import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function StatCard({
    title,
    value,
    change,
    color,
    icon,
    className,
}) {
    return (
        <Card className={`bg-${color}-100 `}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium text-${color}-800`}>
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className={`text-2xl font-bold text-${color}-800`}>
                    {value}
                </div>
                <p className={`text-xs text-${color}-600`}>{change}</p>
            </CardContent>
        </Card>
    );
}
