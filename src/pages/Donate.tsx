import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';

const Donate = () => {
  const handleDonate = () => {
    window.open('https://buy.stripe.com/cNicN5gG3f8ocU4cjN0Ba00', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            asChild
            className="mb-6 flex items-center gap-2 hover:bg-primary/10"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Support <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Spendora</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us continue providing free financial literacy workshops to students. 
            Your donation makes a real difference in young people's financial education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Donation Section */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-blue-800 dark:text-blue-200 mb-2">
                  Choose Your Amount
                </CardTitle>
                <p className="text-gray-700 dark:text-gray-300">
                  Every donation helps us reach more students with essential financial education.
                  You can choose any amount that works for you.
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Make a Difference Today
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Your support helps keep our workshops completely free for all students.
                    Choose any amount that feels right for you.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>💳</span>
                    <span>Secure payment powered by Stripe</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleDonate}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Donate Now
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You'll be redirected to our secure Stripe payment page
                </p>
              </CardContent>
            </Card>

            {/* Alternative Support Methods */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-200 text-xl">
                  Other Ways to Support Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Share our workshop with friends and family</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Follow us on social media</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Volunteer at our workshops</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Provide feedback to help us improve</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Impact & Benefits */}
          <div className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Impact of Your Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Workshop Materials</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Provides essential learning materials and supplies for students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Free Venue Access</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Supports venue costs to keep workshops completely free</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Educational Content</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Helps develop new and improved educational content</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Reach More Students</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Enables us to expand and reach more students in need</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-700">
              <CardHeader>
                <CardTitle className="text-indigo-800 dark:text-indigo-200 text-xl">
                  Why We Need Your Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">
                  Spendora is run entirely by high school students who are passionate about 
                  financial education. Your donations help us keep workshops completely free 
                  for all participants while covering materials, venue costs, and program development.
                  Every dollar makes a real difference in a student's financial future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 border-pink-200 dark:border-pink-700">
              <CardHeader>
                <CardTitle className="text-pink-800 dark:text-pink-200 text-xl">
                  Student Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-700 dark:text-pink-300 leading-relaxed">
                  "Thanks to Spendora, I learned how to budget my allowance and even started 
                  investing! Now I'm helping my friends understand money too." - Workshop Participant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;