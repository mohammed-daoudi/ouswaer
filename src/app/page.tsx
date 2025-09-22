import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                OUS
              </span>
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                WEAR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Top off your look. Own your vibe.
            </p>
            <Badge variant="secondary" className="text-sm">
              Premium Youth Caps
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-aura">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg">
              Explore 3D Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-gray-800 hover:shadow-aura transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-red-400">3D Product Showcase</CardTitle>
              <CardDescription>
                Interactive 3D models with signature aura effects and physics-like motion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🧢</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:shadow-aura transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-red-400">Premium Quality</CardTitle>
              <CardDescription>
                Carefully curated caps with modern designs and superior craftsmanship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-4xl">⭐</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:shadow-aura transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-red-400">Youth Culture</CardTitle>
              <CardDescription>
                Designed for the confident, casual, and nonchalant youth aesthetic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🔥</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Brand Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mysterious. Moody. <span className="text-red-400">Modern.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Ouswear represents the intersection of style and mystery. Our caps aren't just accessories—
            they're statements of confidence, designed for those who understand that true style comes
            from embracing the shadows and owning your unique aura.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline">Dark Aesthetic</Badge>
            <Badge variant="outline">Premium Materials</Badge>
            <Badge variant="outline">3D Experience</Badge>
            <Badge variant="outline">Youth-Focused</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
