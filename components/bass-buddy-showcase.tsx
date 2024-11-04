'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Play, Pause, SkipForward , LogOut } from "lucide-react"
import Link from "next/link"

export function BassBuddyShowcaseComponent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <header className={`sticky top-0 transition-all duration-300 ${scrolled ? 'bg-opacity-90 backdrop-blur-md' : 'bg-transparent'} z-10`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Bass-Buddy</span>
          </div>
          <ul className="flex space-x-6">
            {['about', 'commands', 'terms', 'privacy'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-pink-400 transition-colors duration-200 text-lg">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-24 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x">
            Welcome to Bass-Buddy
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your ultimate Discord music companion. Bring life to your server with high-quality music streaming from YouTube, intuitive controls, and seamless Discord integration.
          </p>
          <Card className="bg-gradient-to-r from-purple-800 to-indigo-800 border-2 border-pink-500 shadow-lg shadow-pink-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-4 text-left">
                {[
                  "High-quality music streaming",
                  "Support for multiple music sources",
                  "Easy-to-use commands",
                  "Create and manage playlists",
                  "Advanced queue management",
                  "Seamless Discord integration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-pink-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="commands" className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Play, title: "Play", command: "/play [search query]", description: "Play a song or add it to the queue" },
              { icon: Pause, title: "Pause", command: "/pause", description: "Pause the current song" },
              { icon: Play, title: "Resume", command: "/resume", description: "Resume playback of a paused song" },
              { icon: SkipForward, title: "Skip", command: "/skip", description: "Skip to the next song in the queue" },
              { icon: LogOut, title: "Leave", command: "/leave", description: "Make the bot leave the voice channel" }
            ].map((cmd, index) => (
              <Card key={index} className="bg-gradient-to-br from-indigo-800 to-purple-900 border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-400">
                    <cmd.icon className="mr-2 h-5 w-5" /> {cmd.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <code className="bg-black bg-opacity-50 px-2 py-1 rounded text-cyan-400">{cmd.command}</code>
                  <p className="mt-2 text-sm">{cmd.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="terms" className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Terms and Conditions</h2>
          <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-500 shadow-lg shadow-purple-500/20">
            <CardContent className="p-6">
              <p className="mb-4">By using Bass-Buddy, you agree to the following terms:</p>
              <ul className="space-y-2">
                {[
                  "You will not use the bot for any illegal activities",
                  "You will not attempt to exploit or manipulate the bot",
                  "We reserve the right to modify or terminate the service at any time",
                  "You are responsible for any content you play through the bot",
                  "We are not responsible for any third-party content played through the bot"
                ].map((term, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="h-5 w-5 bg-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="privacy" className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">Privacy Policy</h2>
          <Card className="bg-gradient-to-br from-indigo-900 to-purple-900 border-2 border-cyan-500 shadow-lg shadow-cyan-500/20">
            <CardContent className="p-6">
              <p className="mb-4">Bass-Buddy respects your privacy:</p>
              <ul className="space-y-2">
                {[
                  "We do not collect or store personal information",
                  "Usage data is anonymized and used only for improving the service",
                  "We do not share any data with third parties",
                  "Your Discord server information is only used for bot functionality",
                  "You can request deletion of any data associated with your server"
                ].map((policy, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="h-5 w-5 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></span>
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

      </main>

      

      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Bass-Buddy. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-pink-500/50 hover:shadow-pink-500/75 transition-all duration-300">
          <Link href="https://discord.com/oauth2/authorize?client_id=1018901458776764477" className="flex items-center">
            <Music className="mr-2 h-5 w-5" />
            Add to Server
          </Link>
        </Button>
      </div>
    </div>
  )
}