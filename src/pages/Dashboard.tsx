import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Award, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Dashboard | Spendora Workshop";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 liquid-page">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Welcome back, <span className="text-primary">Student</span>! 👋
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Track your progress and manage your workshops here.
                        </p>
                    </div>
                    <Button onClick={() => navigate('/#workshop-schedule')} className="rounded-full">
                        Browse More Workshops
                    </Button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <Card className="bg-background/40 backdrop-blur-md border-white/10 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Workshops Attended</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2</div>
                            <p className="text-xs text-muted-foreground">+1 from last month</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background/40 backdrop-blur-md border-white/10 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground">Next: Budgeting 101</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background/40 backdrop-blur-md border-white/10 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground">Stock Market Basics</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="upcoming" className="w-full animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                    <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-8">
                        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upcoming" className="space-y-4">
                        <Card className="bg-background/40 backdrop-blur-md border-white/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="h-24 w-24 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-3xl">💰</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                            Confirmed
                                        </span>
                                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> July 15, 2:00 PM
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold">Budgeting 101: Master Your Money</h3>
                                    <p className="text-muted-foreground">
                                        Learn the 50/30/20 rule and how to save for your first car or college.
                                    </p>
                                </div>
                                <Button className="w-full md:w-auto rounded-full group-hover:translate-x-1 transition-transform">
                                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-4">
                        <Card className="bg-background/40 backdrop-blur-md border-white/10 shadow-lg opacity-80 hover:opacity-100 transition-opacity">
                            <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="h-24 w-24 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-3xl">📈</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                                            Completed
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            June 10, 2025
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold">Stock Market Basics</h3>
                                    <p className="text-muted-foreground">
                                        Introduction to stocks, ETFs, and long-term investing strategies.
                                    </p>
                                </div>
                                <Button variant="outline" className="w-full md:w-auto rounded-full">
                                    Download Certificate
                                </Button>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
